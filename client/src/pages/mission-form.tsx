import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { MissionFormData, missionFormSchema } from "../../../shared/schema";
import { useLocation } from "wouter";
import { Loader2 } from "lucide-react";
import { formSections } from "@/lib/utils/form-sections";
import { filterMissionDataForServer } from "@/lib/utils/mission-data-filter";
import { MissionHeader } from "@/components/mission/MissionHeader";
import { ProgressSteps } from "@/components/ui/progress-steps";
import { FormNavigation } from "@/components/mission/FormNavigation";
import { AuditFormSection } from "@/components/mission/AuditFormSection";
import { SaveConfirmDialog } from "@/components/mission/SaveConfirmDialog";
import { Button } from "@/components/ui/button";
import { getCoverPageData } from "@/lib/utils/cover-page-storage";

interface MissionFormProps {
  id?: string;
}

export default function MissionForm({ id }: MissionFormProps) {
  const [_, navigate] = useLocation();
  const { toast } = useToast();
  const [currentSection, setCurrentSection] = useState(0);
  const [completedSections, setCompletedSections] = useState<Set<number>>(new Set());
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState<string | null>(null);
  const isEdit = Boolean(id);
  const missionId = id ? parseInt(id) : undefined;

  // Fetch mission data if in edit mode
  const { data: missionData, isLoading: isFetchingMission } = useQuery({
    queryKey: isEdit ? [`/api/missions/${missionId}`] : ["skip-query"],
    queryFn: async ({ queryKey }) => {
      // Si la clé est "skip-query", on retourne null
      if (queryKey[0] === "skip-query") return null;
      
      const response = await apiRequest("GET", `/api/missions/${missionId}`);
      const data = await response.json();
      return data;
    },
    enabled: isEdit && !!missionId,
  });

  // Form setup
  const form = useForm<MissionFormData>({
    resolver: zodResolver(missionFormSchema),
    defaultValues: {
      title: "",
      companyName: "",
      companyType: "",
      registrationNumber: "",
      creationDate: "",
      address: "",
      activitySector: "",
      status: "draft",
      progress: 0,
      // Nouvelles propriétés
      companyLogo: "",
      termsDefinitions: [],
      references: [],
      // Images de la page de couverture
      auditeeLogo: "",
      auditorSignature: "",
      // Avant propos values
      confidentialityOptions: {
        noDisclosure: false,
        noReproduction: false,
        noPersonalUse: false,
        noCommercialUse: false,
      },
      versionHistory: [{
        version: "1.0",
        date: new Date().toISOString().split('T')[0],
        author: "Belkhiria Emna",
        changes: "Création du rapport"
      }],
      auditorContacts: [{
        name: "Dupont",
        firstName: "Jean",
        title: "Auditeur",
        phone: "53970527",
        email: "jean@example.com"
      }],
      // Autres propriétés existantes...
      siteSamplingEvaluations: [], // Ajout de la nouvelle propriété
    },
    mode: "onSubmit",
  });

  // Update form values when fetching existing mission
  useEffect(() => {
    if (missionData) {
      // Assurons-nous que missionData est un objet
      const missionDataObj = typeof missionData === 'object' ? missionData : {};
      
      // Extraire les propriétés avec des valeurs par défaut
      const contacts = Array.isArray(missionDataObj.contacts) ? missionDataObj.contacts : [];
      const risks = Array.isArray(missionDataObj.risks) ? missionDataObj.risks : [];
      const recommendations = Array.isArray(missionDataObj.recommendations) ? missionDataObj.recommendations : [];
      
      // Extraire le reste des propriétés
      const { contacts: _, risks: __, recommendations: ___, ...rest } = missionDataObj;
      
      // Préparer des valeurs par défaut pour les nouvelles sections
      const defaultConfidentialityOptions = {
        noDisclosure: false,
        noReproduction: false,
        noPersonalUse: false,
        noCommercialUse: false,
      };
      
      const defaultVersionHistory = [{
        version: "1.0",
        date: new Date().toISOString().split('T')[0],
        author: "Belkhiria Emna",
        changes: "Création du rapport"
      }];
      
      const defaultAuditorContacts = [{
        name: "Dupont",
        firstName: "Jean",
        title: "Auditeur",
        phone: "53970527",
        email: "jean@example.com"
      }];
      
      const defaultAuditedOrgContacts = [{
        name: "Omrani",
        firstName: "Ahmed",
        title: "Responsable",
        phone: "97863452",
        email: "omrani@audite.com"
      }];
      
      // Vérifier si les propriétés existent et sont des objets/tableaux
      const confidentialityOptions = 
        rest.confidentialityOptions && typeof rest.confidentialityOptions === 'object' 
          ? rest.confidentialityOptions 
          : defaultConfidentialityOptions;
      
      const versionHistory = 
        Array.isArray(rest.versionHistory) && rest.versionHistory.length > 0 
          ? rest.versionHistory 
          : defaultVersionHistory;
      
      const auditorContacts = 
        Array.isArray(rest.auditorContacts) && rest.auditorContacts.length > 0 
          ? rest.auditorContacts 
          : defaultAuditorContacts;
      
      const auditedOrgContacts = 
        Array.isArray(rest.auditedOrgContacts) && rest.auditedOrgContacts.length > 0 
          ? rest.auditedOrgContacts 
          : defaultAuditedOrgContacts;
      
      // Charger les données de la page de couverture depuis le stockage local
      const coverPageData = missionId ? getCoverPageData(missionId) : {};

      // Réinitialiser le formulaire avec les données
      form.reset({
        ...rest,
        ...coverPageData, // Inclure les données de la page de couverture (images, etc.)
        confidentialityOptions,
        versionHistory,
        auditorContacts,
        auditedOrgContacts,
        contacts: contacts.length > 0 ? contacts : [{ name: "", position: "", email: "" }],
        risks: risks.length > 0 ? risks : [{ riskType: "", probability: "", impact: "", description: "", mitigation: "" }],
        recommendations: recommendations.length > 0
          ? recommendations
          : [{ description: "", priority: "medium", responsible: "", deadline: "" }],
      });

      // Pour les missions existantes, marquer toutes les sections comme complétées
      // basé sur le pourcentage de progression
      if (missionDataObj.progress && missionDataObj.progress > 0) {
        const sectionsToComplete = Math.floor((missionDataObj.progress / 100) * formSections.length);
        const completedSet = new Set<number>();
        for (let i = 0; i < sectionsToComplete; i++) {
          completedSet.add(i);
        }
        setCompletedSections(completedSet);
      }
    }
  }, [missionData, form]);

  // Détecter les changements dans le formulaire
  useEffect(() => {
    const subscription = form.watch(() => {
      // Ne marquer comme modifié que si ce n'est pas le chargement initial
      if (!isFetchingMission) {
        setHasUnsavedChanges(true);
      }
    });
    return () => subscription.unsubscribe();
  }, [form, isFetchingMission]);

  // Create or update mission
  const mutation = useMutation({
    mutationFn: async (data: MissionFormData) => {
      // Filtrer les données pour exclure les champs non supportés temporairement
      const filteredData = filterMissionDataForServer(data);

      if (isEdit && missionId) {
        return apiRequest("PUT", `/api/missions/${missionId}`, filteredData);
      } else {
        return apiRequest("POST", "/api/missions", filteredData);
      }
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['/api/missions'] });
      if (missionId) {
        queryClient.invalidateQueries({ queryKey: [`/api/missions/${missionId}`] });
      }
      
      toast({
        title: isEdit ? "Mission mise à jour" : "Mission créée",
        description: isEdit 
          ? "La mission d'audit a été mise à jour avec succès." 
          : "Nouvelle mission d'audit créée avec succès.",
      });
      
      navigate("/missions");
    },
    onError: (error) => {
      toast({
        title: "Erreur",
        description: `Erreur lors de l'enregistrement: ${error.message}`,
        variant: "destructive",
      });
    },
  });

  // Handle form submission - COMPLÈTEMENT DÉSACTIVÉ sauf pour la dernière section
  const onSubmit = (data: MissionFormData, event?: React.BaseSyntheticEvent) => {
    // Empêcher toute soumission par défaut
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    // BLOQUER COMPLÈTEMENT si pas la dernière section
    if (currentSection !== formSections.length - 1) {
      return false;
    }

    // Marquer la dernière section comme complétée
    setCompletedSections(prev => new Set([...prev, currentSection]));
    mutation.mutate(data);
  };

  // Calculate progress based on manually completed sections
  const calculateProgress = () => {
    const sections = formSections.map((section, index) => {
      return {
        ...section,
        completed: completedSections.has(index)
      };
    });

    return sections;
  };

  const progressSteps = calculateProgress();
  const completedSectionsCount = progressSteps.filter(s => s.completed).length;
  const progressPercentage = Math.round((completedSectionsCount / progressSteps.length) * 100);

  // Save progress without navigating away
  const saveProgress = async () => {
    try {
      const data = form.getValues();
      const filteredData = filterMissionDataForServer(data);

      if (isEdit && missionId) {
        // Mise à jour d'une mission existante
        await apiRequest("PUT", `/api/missions/${missionId}`, {
          ...filteredData,
          progress: progressPercentage
        });
        queryClient.invalidateQueries({ queryKey: [`/api/missions/${missionId}`] });
        queryClient.invalidateQueries({ queryKey: ['/api/missions'] });
      } else {
        // Création d'une nouvelle mission
        const response = await apiRequest("POST", '/api/missions', filteredData);
        const newMission = await response.json();

        // Rediriger vers l'édition de la nouvelle mission
        navigate(`/missions/${newMission.id}`);
        return;
      }

      setHasUnsavedChanges(false);

      toast({
        title: "Mission sauvegardée",
        description: "Les modifications ont été sauvegardées avec succès."
      });
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: `Erreur lors de l'enregistrement: ${error.message}`,
        variant: "destructive",
      });
    }
  };

  // Fonctions pour gérer la confirmation de sauvegarde
  const handleNavigationAttempt = (path: string) => {
    // Ne montrer la boîte de dialogue que s'il y a vraiment des changements non sauvegardés
    // et que ce n'est pas une nouvelle mission vide
    const formData = form.getValues();
    const hasRealChanges = hasUnsavedChanges && (
      formData.title?.trim() ||
      formData.companyName?.trim() ||
      formData.description?.trim() ||
      (formData.contacts && formData.contacts.some(c => c.name?.trim() || c.email?.trim())) ||
      (formData.risks && formData.risks.some(r => r.description?.trim())) ||
      isEdit // Pour les missions existantes, toujours demander confirmation
    );

    if (hasRealChanges) {
      setPendingNavigation(path);
      setShowSaveDialog(true);
    } else {
      navigate(path);
    }
  };

  const handleSaveAndNavigate = async () => {
    await saveProgress();
    setShowSaveDialog(false);
    if (pendingNavigation) {
      navigate(pendingNavigation);
      setPendingNavigation(null);
    }
  };

  const handleDiscardAndNavigate = () => {
    setHasUnsavedChanges(false);
    setShowSaveDialog(false);
    if (pendingNavigation) {
      navigate(pendingNavigation);
      setPendingNavigation(null);
    }
  };

  // Fonction séparée pour finaliser l'audit
  const handleFinalSubmit = async () => {
    try {
      const data = form.getValues();
      // Marquer la dernière section comme complétée
      setCompletedSections(prev => new Set([...prev, currentSection]));
      mutation.mutate(data);
    } catch (error) {
      console.error("Erreur lors de la soumission finale:", error);
    }
  };

  // Navigation between sections
  const goToNextSection = () => {
    if (currentSection < formSections.length - 1) {
      // Marquer la section actuelle comme complétée
      setCompletedSections(prev => new Set([...prev, currentSection]));
      setCurrentSection(currentSection + 1);
      window.scrollTo(0, 0);
    }
  };

  const goToPreviousSection = () => {
    if (currentSection > 0) {
      // Ne pas démarquer les sections quand on revient en arrière
      setCurrentSection(currentSection - 1);
      window.scrollTo(0, 0);
    }
  };

  if (isFetchingMission) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2">Chargement de la mission...</span>
      </div>
    );
  }

  return (
    <>
      <Form {...form}>
      <form onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit(onSubmit)(e);
      }}>
        <div className="space-y-6">
          <MissionHeader
            isEdit={isEdit}
            title={form.watch("title")}
            companyName={form.watch("companyName")}
            progress={progressPercentage}
            status={form.watch("status")}
            saving={mutation.isPending}
            onSave={saveProgress}
            onNavigateToMissions={() => handleNavigationAttempt("/missions")}
            missionId={missionId}
            currentSection={currentSection}
          />
          
          <Card className="p-6">
            <ProgressSteps 
              steps={progressSteps.map((s, idx) => ({ 
                id: idx, 
                name: s.name, 
                completed: s.completed 
              }))}
              currentStep={currentSection}
              onStepClick={setCurrentSection}
              className="mb-6"
            />
          </Card>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <FormNavigation 
                sections={progressSteps}
                currentSection={currentSection}
                onSectionClick={setCurrentSection}
              />
            </div>
            
            <div className="lg:col-span-3">
              <Card className="p-6">


                {/* Debug info */}
                {process.env.NODE_ENV === 'development' && (
                  <div className="mb-4 p-2 bg-gray-100 text-xs">
                    Section actuelle: {currentSection} / {formSections.length - 1} |
                    Section: {formSections[currentSection]?.name || 'Non trouvée'}
                  </div>
                )}

                <AuditFormSection
                  section={formSections[currentSection]}
                  currentSection={currentSection}
                  form={form}
                  missionId={missionId}
                />
                
                {/* Boutons de navigation SORTIS du formulaire */}
              </Card>
            </div>
          </div>

          {/* Boutons de navigation COMPLÈTEMENT SÉPARÉS du formulaire */}
          <Card className="p-6">
            <div className="flex justify-between items-center">
              <div></div>

              <div className="flex space-x-4">
                {currentSection > 0 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={goToPreviousSection}
                  >
                    Section précédente
                  </Button>
                )}

                {currentSection < formSections.length - 1 ? (
                  <Button
                    type="button"
                    onClick={goToNextSection}
                  >
                    Section suivante
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={handleFinalSubmit}
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Finaliser l'audit
                  </Button>
                )}
              </div>
            </div>
          </Card>
        </div>
      </form>
    </Form>

      <SaveConfirmDialog
        open={showSaveDialog}
        onOpenChange={setShowSaveDialog}
        onSave={handleSaveAndNavigate}
        onDiscard={handleDiscardAndNavigate}
      />
    </>
  );
}









