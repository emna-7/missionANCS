import React, { useState } from "react";
import { FormSection } from "@/lib/utils/form-sections";
import { useFormContext } from "react-hook-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertCircle, FileText, Upload, Trash2 } from "lucide-react";
import { MissionFormData } from "../../../../shared/schema";
import { RecommendationsField } from "./RecommendationsField";
import { RisksField } from "./RisksField";
import { AvantProposSection } from "./AvantProposSection";
import { MissionFrameworkSection } from "./MissionFrameworkSection";
import { TermsDefinitionsSection } from "./TermsDefinitionsSection";
import { OrganizationPresentationSection } from "./OrganizationPresentationSection";
import { AuditScopeSection } from "./AuditScopeSection";
import { AuditMethodologySection } from "./AuditMethodologySection";
import { AuditResultsSection } from "./AuditResultsSection";

import { CoverPageSection } from "./CoverPageSection";
import ActionPlanSection from "./ActionPlanSection";

interface AuditFormSectionProps {
  section: FormSection;
  currentSection: number;
  form: ReturnType<typeof useFormContext<MissionFormData>>;
  missionId?: number;
}

export function AuditFormSection({ section, currentSection, form, missionId }: AuditFormSectionProps) {
  // États pour la section références
  const [newRefTitle, setNewRefTitle] = useState("");
  const [newRefAuthor, setNewRefAuthor] = useState("");
  const [newRefYear, setNewRefYear] = useState("");
  const [newRefUrl, setNewRefUrl] = useState("");
  const [newRefDescription, setNewRefDescription] = useState("");

  // Protection contre les sections non définies
  if (!section) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-500">Section non trouvée</p>
      </div>
    );
  }

  const isCompleted = section.isCompleted(form.getValues());

  // Section 0: Page de couverture
  const renderCoverPage = () => (
    <CoverPageSection form={form} missionId={missionId} />
  );

  // Section 1: Avant propos
  const renderAvantPropos = () => (
    <AvantProposSection form={form} />
  );
  
  // Section 2: Cadre de la mission
  const renderMissionFramework = () => (
    <MissionFrameworkSection form={form} />
  );
  
  // Section 3: Termes et définitions
  const renderTermsDefinitions = () => (
    <TermsDefinitionsSection form={form} />
  );
  
  // Section 4: Références
  const renderReferences = () => {

    return (
      <div className="p-6 border rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Références</h2>
          <Badge variant="outline" className="bg-blue-100 text-blue-800">
            Section importante
          </Badge>
        </div>
        
        <div className="space-y-6">
          <div className="bg-amber-50 p-4 rounded-md border border-amber-200">
            <h3 className="font-medium text-amber-800 mb-2">Documents de référence pour l'audit</h3>
            <p className="text-amber-700">
              Indiquez tous les documents de référence utilisés pour la réalisation de la présente mission d'audit.
            </p>
          </div>
          
          {/* Tableau des références */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Titre</th>
                  <th className="border p-2 text-left">Auteur</th>
                  <th className="border p-2 text-left">Année</th>
                  <th className="border p-2 text-left">Description</th>
                  <th className="border p-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {(form.watch("references") || []).map((ref: any, index: number) => (
                  <tr key={ref.id || index} className="border-b">
                    <td className="border p-2">{ref.title || "-"}</td>
                    <td className="border p-2">{ref.author || "-"}</td>
                    <td className="border p-2">{ref.year || "-"}</td>
                    <td className="border p-2">{ref.description || "-"}</td>
                    <td className="border p-2">
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-ey-yellow hover:text-ey-yellow-dark hover:bg-ey-yellow-light"
                        onClick={() => {
                          const currentRefs = form.getValues("references") || [];
                          form.setValue(
                            "references",
                            currentRefs.filter((_: any, i: number) => i !== index)
                          );
                        }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
                {(!form.watch("references") || form.watch("references").length === 0) && (
                  <tr>
                    <td colSpan={5} className="border p-4 text-center text-gray-500">
                      Aucune référence ajoutée
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          {/* Formulaire d'ajout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border rounded-md">
            <div>
              <label className="block text-sm font-medium mb-1">Titre du document</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded" 
                placeholder="Ex: ISO 27001:2022"
                value={newRefTitle}
                onChange={(e) => setNewRefTitle(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Auteur / Organisation</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded" 
                placeholder="Ex: ISO/IEC"
                value={newRefAuthor}
                onChange={(e) => setNewRefAuthor(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Année / Version</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded" 
                placeholder="Ex: 2022"
                value={newRefYear}
                onChange={(e) => setNewRefYear(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">URL / Lien</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded" 
                placeholder="https://..."
                value={newRefUrl}
                onChange={(e) => setNewRefUrl(e.target.value)}
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Description / Pertinence</label>
              <textarea 
                className="w-full p-2 border rounded min-h-[80px]" 
                placeholder="Décrivez brièvement ce document et sa pertinence pour l'audit..."
                value={newRefDescription}
                onChange={(e) => setNewRefDescription(e.target.value)}
              />
            </div>
            
            <div className="md:col-span-2">
              <Button
                type="button"
                size="sm"
                className="bg-ey-yellow hover:bg-ey-yellow-dark text-ey-gray-900"
                onClick={() => {
                  const currentRefs = form.getValues("references") || [];
                  form.setValue("references", [
                    ...currentRefs,
                    {
                      id: Date.now(),
                      title: newRefTitle,
                      author: newRefAuthor,
                      year: newRefYear,
                      description: newRefDescription,
                      url: newRefUrl,
                      fileUrl: ""
                    }
                  ]);

                  // Réinitialiser les champs
                  setNewRefTitle("");
                  setNewRefAuthor("");
                  setNewRefYear("");
                  setNewRefDescription("");
                  setNewRefUrl("");
                }}
              >
                Ajouter cette référence
              </Button>
            </div>
          </div>
          
          <div className="mt-4 flex justify-center">
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="text-ey-yellow border-ey-yellow hover:bg-ey-yellow hover:text-ey-gray-900 transition-colors"
              onClick={() => {
                try {
                  // Créer un input file pour sélectionner un document
                  const input = document.createElement('input');
                  input.type = 'file';
                  input.accept = '.pdf,.doc,.docx,.txt,.md';

                  input.onchange = (e) => {
                    try {
                      const file = (e.target as HTMLInputElement).files?.[0];
                      if (file) {
                        console.log(`Fichier sélectionné: ${file.name}`);

                        // Extraire le nom sans extension pour le titre
                        const fileName = file.name;
                        const titleWithoutExt = fileName.substring(0, fileName.lastIndexOf('.')) || fileName;

                        const currentRefs = form.getValues("references") || [];
                        const newReference = {
                          id: Date.now(),
                          title: titleWithoutExt,
                          author: "Document importé",
                          year: new Date().getFullYear().toString(),
                          description: `Document importé: ${fileName} (${(file.size / 1024).toFixed(1)} KB)`,
                          url: "",
                          fileUrl: fileName
                        };

                        form.setValue("references", [...currentRefs, newReference]);

                        // Notification de succès
                        alert(`✅ Document "${fileName}" importé avec succès !`);
                      }
                    } catch (error) {
                      console.error('Erreur lors de l\'import:', error);
                      alert('❌ Erreur lors de l\'import du document. Veuillez réessayer.');
                    }
                  };

                  input.click();
                } catch (error) {
                  console.error('Erreur lors de l\'ouverture du sélecteur:', error);
                  alert('❌ Erreur lors de l\'ouverture du sélecteur de fichier.');
                }
              }}
            >
              <Upload className="h-4 w-4 mr-2" />
              Importer un document
            </Button>
          </div>
        </div>
      </div>
    );
  };
  
  // Section 5: Présentation de l'organisme audité
  const renderOrgPresentation = () => (
    <OrganizationPresentationSection form={form} />
  );
  
  // Section 6: Champ d'audit
  const renderAuditScope = () => (
    <AuditScopeSection form={form} />
  );
  
  // Section 7: Méthodologie d'audit
  const renderAuditMethodology = () => (
    <AuditMethodologySection form={form} />
  );

  // Section 8: Synthèse des résultats de l'audit
  const renderGeneralInformation = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">{section.name}</h2>
        <Badge variant={isCompleted ? "default" : "outline"} className={isCompleted ? "bg-green-100 text-green-800" : ""}>
          {isCompleted ? "Complété" : "Non complété"}
        </Badge>
      </div>
      
      <AuditResultsSection form={form} />
    </div>
  );

  // Section 9: Appréciation des risques
  const renderRiskAssessment = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">{section.name}</h2>
        <Badge variant={isCompleted ? "default" : "outline"} className={isCompleted ? "bg-green-100 text-green-800" : ""}>
          {isCompleted ? "Complété" : "Non complété"}
        </Badge>
      </div>
      
      <RisksField form={form} />
    </div>
  );



  // Section 10: Plan d'action
  const renderActionPlan = () => (
    <ActionPlanSection
      data={form.getValues()}
      onChange={(data) => {
        Object.keys(data).forEach(key => {
          form.setValue(key as any, data[key]);
        });
      }}
    />
  );



  // Render the appropriate section based on currentSection
  switch (currentSection) {
    case 0:
      return renderCoverPage();
    case 1:
      return renderAvantPropos();
    case 2:
      return renderMissionFramework();
    case 3:
      return renderTermsDefinitions();
    case 4:
      return renderReferences();
    case 5:
      return renderOrgPresentation();
    case 6:
      return renderAuditScope();
    case 7:
      return renderAuditMethodology();
    case 8:
      return renderGeneralInformation();
    case 9:
      return renderRiskAssessment();
    case 10:
      return renderActionPlan();
    default:
      return null;
  }
}
















