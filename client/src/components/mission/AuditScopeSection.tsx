import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { formSections } from "@/lib/utils/form-sections";
import { useState, useRef } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { 
  PlusCircle, 
  Trash2, 
  MapPin, 
  AlertCircle, 
  Database, 
  Laptop, 
  Network, 
  Server,
  Upload,
  Share2
} from "lucide-react";

interface AuditScopeSectionProps {
  form: any;
}

// Ajoutons d'abord des interfaces pour les types
interface GeographicSite {
  id: number;
  site: string;
  structure: string;
  location: string;
}

interface SiteSamplingEvaluation {
  siteId: number;
  operationsScore: number;
  sensitiveDataScore: number;
  complexityScore: number;
  additionalScores?: Record<number, number>; // Pour stocker les scores des critères additionnels
}

// Ajoutons une interface pour les critères d'échantillonnage additionnels
interface AdditionalSamplingCriteria {
  id: number;
  description: string;
}

export function AuditScopeSection({ form }: AuditScopeSectionProps) {
  const isCompleted = formSections[3].isCompleted(form.getValues());

  // Fonction pour obtenir la couleur en fonction du score
  const getScoreColor = (score: number) => {
    switch (score) {
      case 1:
        return "bg-green-100 border-green-300 text-green-800"; // Faible - Vert
      case 2:
        return "bg-orange-100 border-orange-300 text-orange-800"; // Moyen - Orange
      case 3:
        return "bg-red-100 border-red-300 text-red-800"; // Élevé - Rouge
      default:
        return "bg-gray-100 border-gray-300 text-gray-800";
    }
  };
  
  // Tabs management
  const [activeTab, setActiveTab] = useState("geographicPerimeter");
  
  // State pour le nouveau critère d'échantillonnage
  const [newCriteriaDescription, setNewCriteriaDescription] = useState("");
  
  // State pour le schéma d'architecture réseau
  const [networkDiagramFile, setNetworkDiagramFile] = useState<File | null>(null);
  const [networkDiagramPreview, setNetworkDiagramPreview] = useState<string | null>(null);
  
  // Fonction pour gérer l'upload du schéma d'architecture réseau
  const handleNetworkDiagramUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    // Mettre à jour le state avec le fichier
    setNetworkDiagramFile(file);
    
    // Créer une URL pour prévisualiser l'image
    const fileUrl = URL.createObjectURL(file);
    setNetworkDiagramPreview(fileUrl);
    
    // Mettre à jour le formulaire
    form.setValue("networkDiagram", {
      fileName: file.name,
      fileType: file.type,
      fileSize: file.size,
      uploadDate: new Date().toISOString()
    });
  };
  
  // Référence pour l'input file
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Fonction pour déclencher le clic sur l'input file
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };
  
  // Fonction pour ajouter un critère d'échantillonnage additionnel
  const addSamplingCriteria = () => {
    if (!newCriteriaDescription.trim()) return;
    
    const currentCriteria = form.getValues("additionalSamplingCriteria") || [];
    const newId = currentCriteria.length > 0 
      ? Math.max(...currentCriteria.map((c: AdditionalSamplingCriteria) => c.id)) + 1 
      : 1;
    
    // Ajouter le nouveau critère
    form.setValue("additionalSamplingCriteria", [
      ...currentCriteria,
      {
        id: newId,
        description: newCriteriaDescription
      }
    ]);
    
    // Initialiser les scores pour ce critère pour tous les sites existants
    const siteSamplingEvaluations = form.getValues("siteSamplingEvaluations") || [];
    const updatedEvaluations = siteSamplingEvaluations.map((evaluation: SiteSamplingEvaluation) => {
      return {
        ...evaluation,
        additionalScores: {
          ...(evaluation.additionalScores || {}),
          [newId]: 1 // Score par défaut
        }
      };
    });
    
    form.setValue("siteSamplingEvaluations", updatedEvaluations);
    
    // Réinitialiser le champ
    setNewCriteriaDescription("");
  };
  
  // Fonction pour supprimer un critère d'échantillonnage
  const removeSamplingCriteria = (criteriaId: number) => {
    const currentCriteria = form.getValues("additionalSamplingCriteria") || [];
    form.setValue(
      "additionalSamplingCriteria",
      currentCriteria.filter((c: AdditionalSamplingCriteria) => c.id !== criteriaId)
    );
    
    // Supprimer les scores associés à ce critère
    const siteSamplingEvaluations = form.getValues("siteSamplingEvaluations") || [];
    const updatedEvaluations = siteSamplingEvaluations.map((evaluation: SiteSamplingEvaluation) => {
      if (evaluation.additionalScores) {
        const { [criteriaId]: _, ...restScores } = evaluation.additionalScores;
        return {
          ...evaluation,
          additionalScores: restScores
        };
      }
      return evaluation;
    });
    
    form.setValue("siteSamplingEvaluations", updatedEvaluations);
  };

  // Geographic perimeter functions
  const addGeographicSite = () => {
    const currentSites = form.getValues("geographicPerimeter") || [];
    const newId = currentSites.length > 0 
      ? Math.max(...currentSites.map((s: any) => s.id)) + 1 
      : 1;
    
    form.setValue("geographicPerimeter", [
      ...currentSites,
      {
        id: newId,
        site: "",
        structure: "",
        location: ""
      }
    ]);
  };
  
  const removeGeographicSite = (siteId: number) => {
    const currentSites = form.getValues("geographicPerimeter") || [];
    form.setValue(
      "geographicPerimeter",
      currentSites.filter((s: any) => s.id !== siteId)
    );
  };
  
  // Application functions
  const addApplication = () => {
    const currentApps = form.getValues("applications") || [];
    const newId = currentApps.length > 0 
      ? Math.max(...currentApps.map((a: any) => a.id)) + 1 
      : 1;
    
    form.setValue("applications", [
      ...currentApps,
      {
        id: newId,
        name: "",
        modules: "",
        description: "",
        environment: "",
        developedBy: "",
        ipAddresses: "",
        userCount: 0
      }
    ]);
  };
  
  const removeApplication = (appId: number) => {
    const currentApps = form.getValues("applications") || [];
    form.setValue(
      "applications",
      currentApps.filter((a: any) => a.id !== appId)
    );
  };
  
  // Network infrastructure functions
  const addNetworkDevice = () => {
    const currentDevices = form.getValues("networkInfrastructure") || [];
    const newId = currentDevices.length > 0 
      ? Math.max(...currentDevices.map((d: any) => d.id)) + 1 
      : 1;
    
    form.setValue("networkInfrastructure", [
      ...currentDevices,
      {
        id: newId,
        type: "",
        brand: "",
        model: "",
        quantity: 1,
        managedBy: "",
        observations: "",
        inAuditPerimeter: true,
        exclusionJustification: ""
      }
    ]);
  };
  
  const removeNetworkDevice = (deviceId: number) => {
    const currentDevices = form.getValues("networkInfrastructure") || [];
    form.setValue(
      "networkInfrastructure",
      currentDevices.filter((d: any) => d.id !== deviceId)
    );
  };
  
  // Workstation functions
  const addWorkstation = () => {
    const currentWorkstations = form.getValues("workstations") || [];
    const newId = currentWorkstations.length > 0 
      ? Math.max(...currentWorkstations.map((w: any) => w.id)) + 1 
      : 1;
    
    form.setValue("workstations", [
      ...currentWorkstations,
      {
        id: newId,
        system: "",
        count: 0,
        inAuditPerimeter: true,
        exclusionJustification: ""
      }
    ]);
  };
  
  const removeWorkstation = (workstationId: number) => {
    const currentWorkstations = form.getValues("workstations") || [];
    form.setValue(
      "workstations",
      currentWorkstations.filter((w: any) => w.id !== workstationId)
    );
  };
  
  // Server functions
  const addServer = () => {
    const currentServers = form.getValues("servers") || [];
    const newId = currentServers.length > 0 
      ? Math.max(...currentServers.map((s: any) => s.id)) + 1 
      : 1;
    
    form.setValue("servers", [
      ...currentServers,
      {
        id: newId,
        name: "",
        ipAddress: "",
        type: "",
        system: "",
        role: "",
        inAuditPerimeter: true,
        exclusionJustification: ""
      }
    ]);
  };
  
  const removeServer = (serverId: number) => {
    const currentServers = form.getValues("servers") || [];
    form.setValue(
      "servers",
      currentServers.filter((s: any) => s.id !== serverId)
    );
  };
  
  // Fonction corrigée pour générer les évaluations
  const generateSiteEvaluations = () => {
    const geographicSites = form.getValues("geographicPerimeter") || [];
    const currentEvaluations = form.getValues("siteSamplingEvaluations") || [];
    
    // Créer des évaluations pour les sites qui n'en ont pas encore
    const newEvaluations = geographicSites
      .filter((site: GeographicSite) => 
        !currentEvaluations.some((evalItem: SiteSamplingEvaluation) => 
          evalItem.siteId === site.id
        )
      )
      .map((site: GeographicSite) => ({
        siteId: site.id,
        operationsScore: 1,
        sensitiveDataScore: 1,
        complexityScore: 1
      }));
    
    if (newEvaluations.length > 0) {
      form.setValue("siteSamplingEvaluations", [
        ...currentEvaluations,
        ...newEvaluations
      ]);
    }
  };
  
  // Watchers
  const geographicPerimeter = form.watch("geographicPerimeter") || [];
  const applications = form.watch("applications") || [];
  const networkInfrastructure = form.watch("networkInfrastructure") || [];
  const workstations = form.watch("workstations") || [];
  const servers = form.watch("servers") || [];
  const siteSamplingEvaluations = form.watch("siteSamplingEvaluations") || [];
  const additionalSamplingCriteria = form.watch("additionalSamplingCriteria") || [];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Champ d'audit</h2>
        <Badge variant={isCompleted ? "default" : "outline"} className={isCompleted ? "bg-green-100 text-green-800" : ""}>
          {isCompleted ? "Complété" : "Non complété"}
        </Badge>
      </div>

      <Tabs 
        defaultValue="geographicPerimeter" 
        value={activeTab} 
        onValueChange={setActiveTab}
        className="w-full"
      >
        <div className="overflow-x-auto mb-6">
          <TabsList className="flex min-w-max w-full justify-start gap-1 p-1">
            <TabsTrigger value="geographicPerimeter" className="flex items-center gap-2 whitespace-nowrap px-4 py-2">
              <MapPin className="h-4 w-4" />
              <span>Périmètre Géographique</span>
            </TabsTrigger>
            <TabsTrigger value="sampling" className="flex items-center gap-2 whitespace-nowrap px-4 py-2">
              <AlertCircle className="h-4 w-4" />
              <span>Échantillonnage</span>
            </TabsTrigger>
            <TabsTrigger value="applications" className="flex items-center gap-2 whitespace-nowrap px-4 py-2">
              <Database className="h-4 w-4" />
              <span>Applications</span>
            </TabsTrigger>
            <TabsTrigger value="network" className="flex items-center gap-2 whitespace-nowrap px-4 py-2">
              <Network className="h-4 w-4" />
              <span>Réseau et Sécurité</span>
            </TabsTrigger>
            <TabsTrigger value="workstations" className="flex items-center gap-2 whitespace-nowrap px-4 py-2">
              <Laptop className="h-4 w-4" />
              <span>Postes de travail</span>
            </TabsTrigger>
            <TabsTrigger value="servers" className="flex items-center gap-2 whitespace-nowrap px-4 py-2">
              <Server className="h-4 w-4" />
              <span>Serveurs</span>
            </TabsTrigger>
            <TabsTrigger value="networkDiagram" className="flex items-center gap-2 whitespace-nowrap px-4 py-2">
              <Share2 className="h-4 w-4" />
              <span>Architecture Réseau</span>
            </TabsTrigger>
          </TabsList>
        </div>
        
        {/* Périmètre Géographique */}
        <TabsContent value="geographicPerimeter">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Périmètre Géographique</CardTitle>
                <CardDescription>Sites et localisations concernés par l'audit</CardDescription>
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addGeographicSite}
                className="flex items-center gap-1"
              >
                <PlusCircle className="h-4 w-4" />
                Ajouter un site
              </Button>
            </CardHeader>
            <CardContent>
              {geographicPerimeter.length === 0 ? (
                <div className="text-center py-6 text-muted-foreground">
                  Aucun site défini. Cliquez sur "Ajouter un site" pour commencer.
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[50px]">ID</TableHead>
                      <TableHead>Site</TableHead>
                      <TableHead>Structure</TableHead>
                      <TableHead>Lieu d'implantation</TableHead>
                      <TableHead className="w-[100px]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {geographicPerimeter.map((site: any, index: number) => (
                      <TableRow key={site.id}>
                        <TableCell className="font-medium">{site.id}</TableCell>
                        <TableCell>
                          <FormField
                            control={form.control}
                            name={`geographicPerimeter.${index}.site`}
                            render={({ field }) => (
                              <FormItem className="mb-0">
                                <FormControl>
                                  <Input {...field} placeholder="Ex: Siège Social" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </TableCell>
                        <TableCell>
                          <FormField
                            control={form.control}
                            name={`geographicPerimeter.${index}.structure`}
                            render={({ field }) => (
                              <FormItem className="mb-0">
                                <FormControl>
                                  <Input {...field} placeholder="Ex: Filiale 1 - RH/Gestion" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </TableCell>
                        <TableCell>
                          <FormField
                            control={form.control}
                            name={`geographicPerimeter.${index}.location`}
                            render={({ field }) => (
                              <FormItem className="mb-0">
                                <FormControl>
                                  <Select onValueChange={field.onChange} value={field.value || ""}>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Ex: Tunis" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="Tunis">Tunis</SelectItem>
                                      <SelectItem value="Ariana">Ariana</SelectItem>
                                      <SelectItem value="Ben Arous">Ben Arous</SelectItem>
                                      <SelectItem value="Manouba">Manouba</SelectItem>
                                      <SelectItem value="Nabeul">Nabeul</SelectItem>
                                      <SelectItem value="Zaghouan">Zaghouan</SelectItem>
                                      <SelectItem value="Bizerte">Bizerte</SelectItem>
                                      <SelectItem value="Béja">Béja</SelectItem>
                                      <SelectItem value="Jendouba">Jendouba</SelectItem>
                                      <SelectItem value="Kef">Kef</SelectItem>
                                      <SelectItem value="Siliana">Siliana</SelectItem>
                                      <SelectItem value="Sousse">Sousse</SelectItem>
                                      <SelectItem value="Monastir">Monastir</SelectItem>
                                      <SelectItem value="Mahdia">Mahdia</SelectItem>
                                      <SelectItem value="Sfax">Sfax</SelectItem>
                                      <SelectItem value="Kairouan">Kairouan</SelectItem>
                                      <SelectItem value="Kasserine">Kasserine</SelectItem>
                                      <SelectItem value="Sidi Bouzid">Sidi Bouzid</SelectItem>
                                      <SelectItem value="Gabès">Gabès</SelectItem>
                                      <SelectItem value="Médenine">Médenine</SelectItem>
                                      <SelectItem value="Tataouine">Tataouine</SelectItem>
                                      <SelectItem value="Gafsa">Gafsa</SelectItem>
                                      <SelectItem value="Tozeur">Tozeur</SelectItem>
                                      <SelectItem value="Kébili">Kébili</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </TableCell>
                        <TableCell>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeGeographicSite(site.id)}
                            className="h-8 w-8 p-0 text-red-500"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Échantillonnage et critères de sélection */}
        <TabsContent value="sampling">
          <Card>
            <CardHeader>
              <CardTitle>Critères d'échantillonnage</CardTitle>
              <CardDescription>
                Justifier le choix du périmètre géographique de la mission d'audit, et présenter les critères d'échantillonnage
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Critères généraux d'échantillonnage */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Critères généraux</h3>
                
                <div className="bg-amber-50 border border-amber-200 rounded-md px-3 py-2 text-sm text-amber-700 mb-4">
                  <span className="font-semibold">NOTE :</span> Les critères d'échantillonnage doivent être confirmés et discutés entre l'organisme audité et l'auditeur.
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  <FormField
                    control={form.control}
                    name="operationsImpact"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Impact sur les opérations</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            placeholder="Ex: Sites ayant un rôle critique dans les processus métiers"
                            rows={2}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="sensitiveData"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Données sensibles traitées</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            placeholder="Ex: Sites traitant des informations confidentielles"
                            rows={2}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="infrastructureComplexity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Complexité d'infrastructure</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            placeholder="Ex: Sites ayant des infrastructures IT complexes"
                            rows={2}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              
              {/* Tableau d'évaluation des sites */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Évaluation des sites pour l'échantillonnage</h3>
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm"
                    onClick={generateSiteEvaluations}
                  >
                    Générer les évaluations
                  </Button>
                </div>
                
                {/* Ajout de critères additionnels */}
                <div className="flex gap-2 mb-4">
                  <Input
                    value={newCriteriaDescription}
                    onChange={(e) => setNewCriteriaDescription(e.target.value)}
                    placeholder="Nouveau critère d'échantillonnage (ex: Historique des incidents)"
                    className="flex-1"
                  />
                  <Button 
                    type="button" 
                    onClick={addSamplingCriteria}
                    disabled={!newCriteriaDescription.trim()}
                  >
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Ajouter un critère
                  </Button>
                </div>
                
                {geographicPerimeter.length === 0 ? (
                  <div className="text-center py-6 text-muted-foreground">
                    Aucun site défini. Veuillez d'abord ajouter des sites dans l'onglet "Périmètre Géographique".
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[50px]">N°</TableHead>
                          <TableHead>Structure</TableHead>
                          <TableHead>Lieu d'implantation</TableHead>
                          <TableHead className="w-[150px]">Impact sur les opérations</TableHead>
                          <TableHead className="w-[150px]">Données sensibles</TableHead>
                          <TableHead className="w-[150px]">Complexité infrastructure</TableHead>
                          
                          {/* Colonnes dynamiques pour les critères additionnels */}
                          {additionalSamplingCriteria.map((criteria: AdditionalSamplingCriteria) => (
                            <TableHead key={criteria.id} className="w-[150px]">
                              <div className="flex items-center justify-between">
                                <span>{criteria.description}</span>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeSamplingCriteria(criteria.id)}
                                  className="h-6 w-6 p-0 ml-1 text-red-500"
                                >
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              </div>
                            </TableHead>
                          ))}
                          
                          <TableHead className="w-[100px]">Score total</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {geographicPerimeter.map((site: GeographicSite) => {
                          // Trouver l'évaluation correspondante ou créer une nouvelle
                          let evaluation = siteSamplingEvaluations.find(
                            (evalItem: SiteSamplingEvaluation) => evalItem.siteId === site.id
                          );
                          
                          if (!evaluation) {
                            evaluation = {
                              siteId: site.id,
                              operationsScore: 1,
                              sensitiveDataScore: 1,
                              complexityScore: 1,
                              additionalScores: {}
                            };
                            
                            // Ajouter l'évaluation au formulaire
                            form.setValue("siteSamplingEvaluations", [
                              ...siteSamplingEvaluations,
                              evaluation
                            ]);
                          }
                          
                          // Calculer le score total (critères standards + additionnels)
                          const additionalScoresSum = evaluation.additionalScores 
                            ? Object.values(evaluation.additionalScores).reduce((sum: number, score) => {
                                // Vérifier que score est un nombre valide
                                const scoreValue = typeof score === 'number' ? score : 1;
                                return sum + scoreValue;
                              }, 0)
                            : 0;
                          
                          const totalScore = 
                            (evaluation.operationsScore || 1) + 
                            (evaluation.sensitiveDataScore || 1) + 
                            (evaluation.complexityScore || 1) +
                            additionalScoresSum;
                          
                          // Trouver l'index de l'évaluation dans le tableau
                          const evaluationIndex = siteSamplingEvaluations.findIndex(
                            (e: SiteSamplingEvaluation) => e.siteId === site.id
                          );
                          
                          return (
                            <TableRow key={site.id} className={totalScore >= 7 ? "bg-green-50" : ""}>
                              <TableCell className="font-medium">{site.id}</TableCell>
                              <TableCell>{site.structure}</TableCell>
                              <TableCell>{site.location}</TableCell>
                              <TableCell>
                                <FormField
                                  control={form.control}
                                  name={`siteSamplingEvaluations.${evaluationIndex}.operationsScore`}
                                  render={({ field }) => (
                                    <FormItem className="mb-0">
                                      <Select
                                        onValueChange={(value) => field.onChange(parseInt(value))}
                                        value={field.value?.toString() || "1"}
                                      >
                                        <FormControl>
                                          <SelectTrigger className={getScoreColor(field.value || 1)}>
                                            <SelectValue placeholder="Score" />
                                          </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                          <SelectItem value="1" className="bg-green-100 text-green-800">1 - Faible</SelectItem>
                                          <SelectItem value="2" className="bg-orange-100 text-orange-800">2 - Moyen</SelectItem>
                                          <SelectItem value="3" className="bg-red-100 text-red-800">3 - Élevé</SelectItem>
                                        </SelectContent>
                                      </Select>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </TableCell>
                              <TableCell>
                                <FormField
                                  control={form.control}
                                  name={`siteSamplingEvaluations.${evaluationIndex}.sensitiveDataScore`}
                                  render={({ field }) => (
                                    <FormItem className="mb-0">
                                      <Select
                                        onValueChange={(value) => field.onChange(parseInt(value))}
                                        value={field.value?.toString() || "1"}
                                      >
                                        <FormControl>
                                          <SelectTrigger className={getScoreColor(field.value || 1)}>
                                            <SelectValue placeholder="Score" />
                                          </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                          <SelectItem value="1" className="bg-green-100 text-green-800">1 - Faible</SelectItem>
                                          <SelectItem value="2" className="bg-orange-100 text-orange-800">2 - Moyen</SelectItem>
                                          <SelectItem value="3" className="bg-red-100 text-red-800">3 - Élevé</SelectItem>
                                        </SelectContent>
                                      </Select>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </TableCell>
                              <TableCell>
                                <FormField
                                  control={form.control}
                                  name={`siteSamplingEvaluations.${evaluationIndex}.complexityScore`}
                                  render={({ field }) => (
                                    <FormItem className="mb-0">
                                      <Select
                                        onValueChange={(value) => field.onChange(parseInt(value))}
                                        value={field.value?.toString() || "1"}
                                      >
                                        <FormControl>
                                          <SelectTrigger className={getScoreColor(field.value || 1)}>
                                            <SelectValue placeholder="Score" />
                                          </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                          <SelectItem value="1" className="bg-green-100 text-green-800">1 - Faible</SelectItem>
                                          <SelectItem value="2" className="bg-orange-100 text-orange-800">2 - Moyen</SelectItem>
                                          <SelectItem value="3" className="bg-red-100 text-red-800">3 - Élevé</SelectItem>
                                        </SelectContent>
                                      </Select>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </TableCell>
                              
                              {/* Cellules dynamiques pour les critères additionnels */}
                              {additionalSamplingCriteria.map((criteria: AdditionalSamplingCriteria) => (
                                <TableCell key={criteria.id}>
                                  <FormField
                                    control={form.control}
                                    name={`siteSamplingEvaluations.${evaluationIndex}.additionalScores.${criteria.id}`}
                                    render={({ field }) => (
                                      <FormItem className="mb-0">
                                        <Select
                                          onValueChange={(value) => field.onChange(parseInt(value))}
                                          value={(evaluation.additionalScores?.[criteria.id] || 1).toString()}
                                        >
                                          <FormControl>
                                            <SelectTrigger className={getScoreColor(evaluation.additionalScores?.[criteria.id] || 1)}>
                                              <SelectValue placeholder="Score" />
                                            </SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                            <SelectItem value="1" className="bg-green-100 text-green-800">1 - Faible</SelectItem>
                                            <SelectItem value="2" className="bg-orange-100 text-orange-800">2 - Moyen</SelectItem>
                                            <SelectItem value="3" className="bg-red-100 text-red-800">3 - Élevé</SelectItem>
                                          </SelectContent>
                                        </Select>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                </TableCell>
                              ))}
                              
                              <TableCell className="font-bold text-center">
                                {totalScore}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </div>
              
              {/* Suppression de la section dupliquée "Critères d'échantillonnage additionnels" */}
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Applications */}
        <TabsContent value="applications">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Tableau des Applications</CardTitle>
                <CardDescription>Applications dans le périmètre d'audit</CardDescription>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={addApplication}
                className="flex items-center gap-1"
              >
                <PlusCircle className="h-4 w-4" />
                Ajouter une application
              </Button>
            </CardHeader>
            <CardContent>
              {applications.length === 0 ? (
                <div className="text-center py-6 text-muted-foreground">
                  Aucune application définie. Cliquez sur "Ajouter une application" pour commencer.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead style={{ width: '50px' }}>ID</TableHead>
                        <TableHead style={{ width: '180px' }}>Nom / Identification</TableHead>
                        <TableHead style={{ width: '150px' }}>Modules</TableHead>
                        <TableHead style={{ width: '200px' }}>Description</TableHead>
                        <TableHead style={{ width: '150px' }}>Environnement</TableHead>
                        <TableHead style={{ width: '180px' }}>Développé par / Année</TableHead>
                        <TableHead style={{ width: '200px' }}>Noms ou @IP des serveurs d'hébergement</TableHead>
                        <TableHead style={{ width: '120px' }}>Nb Utilisateurs</TableHead>
                        <TableHead style={{ width: '80px' }}>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {applications.map((app: any, index: number) => (
                        <TableRow key={app.id}>
                          <TableCell className="font-medium">{app.id}</TableCell>
                          <TableCell>
                            <FormField
                              control={form.control}
                              name={`applications.${index}.name`}
                              render={({ field }) => (
                                <FormItem className="mb-0">
                                  <FormControl>
                                    <Input 
                                      {...field} 
                                      placeholder="Nom de l'application" 
                                      className="w-full min-w-[160px] h-11"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TableCell>
                          <TableCell>
                            <FormField
                              control={form.control}
                              name={`applications.${index}.modules`}
                              render={({ field }) => (
                                <FormItem className="mb-0">
                                  <FormControl>
                                    <Input 
                                      {...field} 
                                      placeholder="Ex: Module 1" 
                                      className="w-full min-w-[130px] h-11"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TableCell>
                          <TableCell>
                            <FormField
                              control={form.control}
                              name={`applications.${index}.description`}
                              render={({ field }) => (
                                <FormItem className="mb-0">
                                  <FormControl>
                                    <Input 
                                      {...field} 
                                      placeholder="Description de l'application" 
                                      className="w-full min-w-[180px] h-11"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TableCell>
                          <TableCell>
                            <FormField
                              control={form.control}
                              name={`applications.${index}.environment`}
                              render={({ field }) => (
                                <FormItem className="mb-0">
                                  <FormControl>
                                    <Input 
                                      {...field} 
                                      placeholder="Ex: Production" 
                                      className="w-full min-w-[130px] h-11"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TableCell>
                          <TableCell>
                            <FormField
                              control={form.control}
                              name={`applications.${index}.developedBy`}
                              render={({ field }) => (
                                <FormItem className="mb-0">
                                  <FormControl>
                                    <Input 
                                      {...field} 
                                      placeholder="Ex: Développé par X (2020)" 
                                      className="w-full min-w-[160px] h-11"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TableCell>
                          <TableCell>
                            <FormField
                              control={form.control}
                              name={`applications.${index}.ipAddresses`}
                              render={({ field }) => (
                                <FormItem className="mb-0">
                                  <FormControl>
                                    <Input 
                                      {...field} 
                                      placeholder="Ex: srv-app01, 192.168.1.10" 
                                      className="w-full min-w-[180px] h-11"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TableCell>
                          <TableCell>
                            <FormField
                              control={form.control}
                              name={`applications.${index}.userCount`}
                              render={({ field }) => (
                                <FormItem className="mb-0">
                                  <FormControl>
                                    <Input 
                                      type="number" 
                                      {...field} 
                                      value={field.value || ''}
                                      onChange={event => field.onChange(
                                        event.target.value === '' ? '' : Number(event.target.value)
                                      )}
                                      placeholder="Ex: 100" 
                                      className="w-full min-w-[100px] h-11"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeApplication(app.id)}
                              className="h-8 w-8 p-0 text-red-500"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Infrastructure réseau et sécurité */}
        <TabsContent value="network">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Tableau de l'Infrastructure Réseau et Sécurité</CardTitle>
                <CardDescription>Équipements réseau et sécurité dans le périmètre d'audit</CardDescription>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={addNetworkDevice}
                className="flex items-center gap-1"
              >
                <PlusCircle className="h-4 w-4" />
                Ajouter un équipement
              </Button>
            </CardHeader>
            <CardContent>
              {networkInfrastructure.length === 0 ? (
                <div className="text-center py-6 text-muted-foreground">
                  Aucun équipement défini. Cliquez sur "Ajouter un équipement" pour commencer.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nature (Composant)</TableHead>
                        <TableHead>Marque</TableHead>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Administré par</TableHead>
                        <TableHead>Observations</TableHead>
                        <TableHead>Inclus au périmètre d'audit</TableHead>
                        <TableHead>Justification d'exclusion</TableHead>
                        <TableHead className="w-[80px]">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {networkInfrastructure.map((device: any, index: number) => (
                        <TableRow key={device.id} className={!device.inAuditPerimeter ? "bg-red-50" : ""}>
                          <TableCell>
                            <FormField
                              control={form.control}
                              name={`networkInfrastructure.${index}.type`}
                              render={({ field }) => (
                                <FormItem className="mb-0">
                                  <FormControl>
                                    <Input {...field} placeholder="Ex: Firewall" className="w-full min-w-[130px] h-11" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TableCell>
                          <TableCell>
                            <FormField
                              control={form.control}
                              name={`networkInfrastructure.${index}.brand`}
                              render={({ field }) => (
                                <FormItem className="mb-0">
                                  <FormControl>
                                    <Input {...field} placeholder="Ex: Cisco" className="w-full min-w-[120px] h-11" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TableCell>
                          <TableCell>
                            <FormField
                              control={form.control}
                              name={`networkInfrastructure.${index}.quantity`}
                              render={({ field }) => (
                                <FormItem className="mb-0">
                                  <FormControl>
                                    <Input 
                                      type="number" 
                                      {...field} 
                                      value={field.value || ''}
                                      onChange={event => field.onChange(
                                        event.target.value === '' ? '' : Number(event.target.value)
                                      )}
                                      placeholder="Ex: 2" 
                                      className="w-full min-w-[80px] h-11"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TableCell>
                          <TableCell>
                            <FormField
                              control={form.control}
                              name={`networkInfrastructure.${index}.managedBy`}
                              render={({ field }) => (
                                <FormItem className="mb-0">
                                  <FormControl>
                                    <Input {...field} placeholder="Ex: Administrateur A" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TableCell>
                          <TableCell>
                            <FormField
                              control={form.control}
                              name={`networkInfrastructure.${index}.observations`}
                              render={({ field }) => (
                                <FormItem className="mb-0">
                                  <FormControl>
                                    <Input {...field} placeholder="Observations" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TableCell>
                          <TableCell>
                            <FormField
                              control={form.control}
                              name={`networkInfrastructure.${index}.inAuditPerimeter`}
                              render={({ field }) => (
                                <FormItem className="flex items-center justify-center space-x-2 mb-0">
                                  <FormControl>
                                    <Switch
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TableCell>
                          <TableCell>
                            <FormField
                              control={form.control}
                              name={`networkInfrastructure.${index}.exclusionJustification`}
                              render={({ field }) => (
                                <FormItem className="mb-0">
                                  <FormControl>
                                    <Input 
                                      {...field} 
                                      disabled={networkInfrastructure[index].inAuditPerimeter}
                                      placeholder="Justification si exclu" 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeNetworkDevice(device.id)}
                              className="h-8 w-8 p-0 text-red-500"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Postes de travail */}
        <TabsContent value="workstations">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Tableau des Postes de Travail</CardTitle>
                <CardDescription>Systèmes d'exploitation et postes de travail dans le périmètre d'audit</CardDescription>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={addWorkstation}
                className="flex items-center gap-1"
              >
                <PlusCircle className="h-4 w-4" />
                Ajouter un type de poste
              </Button>
            </CardHeader>
            <CardContent>
              {workstations.length === 0 ? (
                <div className="text-center py-6 text-muted-foreground">
                  Aucun poste de travail défini. Cliquez sur "Ajouter un type de poste" pour commencer.
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Système d'exploitation</TableHead>
                      <TableHead>Nombre de postes</TableHead>
                      <TableHead>Inclus au périmètre d'audit</TableHead>
                      <TableHead>Justification d'exclusion</TableHead>
                      <TableHead className="w-[80px]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {workstations.map((workstation: any, index: number) => (
                      <TableRow key={workstation.id} className={!workstation.inAuditPerimeter ? "bg-red-50" : ""}>
                        <TableCell>
                          <FormField
                            control={form.control}
                            name={`workstations.${index}.system`}
                            render={({ field }) => (
                              <FormItem className="mb-0">
                                <FormControl>
                                  <Input {...field} placeholder="Ex: Windows 10" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </TableCell>
                        <TableCell>
                          <FormField
                            control={form.control}
                            name={`workstations.${index}.count`}
                            render={({ field }) => (
                              <FormItem className="mb-0">
                                <FormControl>
                                  <Input 
                                    type="number" 
                                    {...field} 
                                    value={field.value || ''}
                                    onChange={event => field.onChange(
                                      event.target.value === '' ? '' : Number(event.target.value)
                                    )}
                                    placeholder="Ex: 50" 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </TableCell>
                        <TableCell>
                          <FormField
                            control={form.control}
                            name={`workstations.${index}.inAuditPerimeter`}
                            render={({ field }) => (
                              <FormItem className="flex items-center justify-center space-x-2 mb-0">
                                <FormControl>
                                  <Switch
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </TableCell>
                        <TableCell>
                          <FormField
                            control={form.control}
                            name={`workstations.${index}.exclusionJustification`}
                            render={({ field }) => (
                              <FormItem className="mb-0">
                                <FormControl>
                                  <Input 
                                    {...field} 
                                    disabled={workstations[index].inAuditPerimeter}
                                    placeholder="Justification si exclu du périmètre" 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeWorkstation(workstation.id)}
                            className="h-8 w-8 p-0 text-red-500"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Serveurs */}
        <TabsContent value="servers">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Tableau des Serveurs</CardTitle>
                <CardDescription>Serveurs dans le périmètre d'audit</CardDescription>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={addServer}
                className="flex items-center gap-1"
              >
                <PlusCircle className="h-4 w-4" />
                Ajouter un serveur
              </Button>
            </CardHeader>
            <CardContent>
              {servers.length === 0 ? (
                <div className="text-center py-6 text-muted-foreground">
                  Aucun serveur défini. Cliquez sur "Ajouter un serveur" pour commencer.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead style={{ width: '180px' }}>Nom du serveur</TableHead>
                        <TableHead style={{ width: '150px' }}>Adresse IP</TableHead>
                        <TableHead style={{ width: '120px' }}>Type (VM/HW)</TableHead>
                        <TableHead style={{ width: '180px' }}>Système d'exploitation</TableHead>
                        <TableHead style={{ width: '180px' }}>Rôle/Métier (ex: BDD)</TableHead>
                        <TableHead style={{ width: '120px' }}>Inclus au périmètre</TableHead>
                        <TableHead style={{ width: '200px' }}>Justification d'exclusion</TableHead>
                        <TableHead style={{ width: '80px' }}>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {servers.map((server: any, index: number) => (
                        <TableRow key={server.id} className={!server.inAuditPerimeter ? "bg-red-50" : ""}>
                          <TableCell>
                            <FormField
                              control={form.control}
                              name={`servers.${index}.name`}
                              render={({ field }) => (
                                <FormItem className="mb-0">
                                  <FormControl>
                                    <Input 
                                      {...field} 
                                      placeholder="Ex: Serveur Web A" 
                                      className="w-full min-w-[160px] h-11"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TableCell>
                          <TableCell>
                            <FormField
                              control={form.control}
                              name={`servers.${index}.ipAddress`}
                              render={({ field }) => (
                                <FormItem className="mb-0">
                                  <FormControl>
                                    <Input 
                                      {...field} 
                                      placeholder="Ex: 192.168.1.2" 
                                      className="w-full min-w-[130px] h-11"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TableCell>
                          <TableCell>
                            <FormField
                              control={form.control}
                              name={`servers.${index}.type`}
                              render={({ field }) => (
                                <FormItem className="mb-0">
                                  <FormControl>
                                    <Input 
                                      {...field} 
                                      placeholder="Ex: VM" 
                                      className="w-full min-w-[100px] h-11"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TableCell>
                          <TableCell>
                            <FormField
                              control={form.control}
                              name={`servers.${index}.system`}
                              render={({ field }) => (
                                <FormItem className="mb-0">
                                  <FormControl>
                                    <Input 
                                      {...field} 
                                      placeholder="Ex: Windows Server 2019" 
                                      className="w-full min-w-[160px] h-11"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TableCell>
                          <TableCell>
                            <FormField
                              control={form.control}
                              name={`servers.${index}.role`}
                              render={({ field }) => (
                                <FormItem className="mb-0">
                                  <FormControl>
                                    <Input 
                                      {...field} 
                                      placeholder="Ex: Serveur de base de données" 
                                      className="w-full min-w-[160px] h-11"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TableCell>
                          <TableCell>
                            <FormField
                              control={form.control}
                              name={`servers.${index}.inAuditPerimeter`}
                              render={({ field }) => (
                                <FormItem className="flex items-center justify-center space-x-2 mb-0">
                                  <FormControl>
                                    <Switch
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TableCell>
                          <TableCell>
                            <FormField
                              control={form.control}
                              name={`servers.${index}.exclusionJustification`}
                              render={({ field }) => (
                                <FormItem className="mb-0">
                                  <FormControl>
                                    <Input 
                                      {...field} 
                                      disabled={servers[index].inAuditPerimeter}
                                      placeholder="Justification si exclu" 
                                      className="w-full min-w-[180px] h-11"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeServer(server.id)}
                              className="h-8 w-8 p-0 text-red-500"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Schéma synoptique de l'architecture du réseau */}
        <TabsContent value="networkDiagram">
          <Card>
            <CardHeader>
              <CardTitle>Schéma synoptique de l'architecture du réseau</CardTitle>
              <CardDescription>
                Schématiser le réseau en faisant apparaître les connexions (LAN, WAN, etc.), 
                la segmentation, l'emplacement des composantes du SI, etc.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-amber-50 border border-amber-200 rounded-md p-4 text-amber-700">
                <p className="font-semibold mb-2">Recommandations pour le schéma d'architecture :</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Incluez tous les éléments réseau importants (routeurs, firewalls, switches, etc.)</li>
                  <li>Montrez clairement la segmentation réseau (VLANs, zones de sécurité)</li>
                  <li>Identifiez les connexions externes (Internet, VPN, liens WAN)</li>
                  <li>Indiquez l'emplacement des serveurs critiques et des applications</li>
                  <li>Formats recommandés : PNG, JPG, PDF ou Visio</li>
                </ul>
              </div>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
                <div className="flex flex-col items-center justify-center space-y-4">
                  {networkDiagramPreview ? (
                    <div className="space-y-4 w-full">
                      <div className="relative max-w-full max-h-[500px] overflow-auto mx-auto">
                        <img 
                          src={networkDiagramPreview} 
                          alt="Schéma d'architecture réseau" 
                          className="max-w-full object-contain"
                        />
                      </div>
                      <div className="flex items-center justify-center space-x-4">
                        <Button 
                          type="button" 
                          variant="outline"
                          onClick={triggerFileInput}
                        >
                          <Upload className="h-4 w-4 mr-2" />
                          Remplacer le schéma
                        </Button>
                        <Button 
                          type="button" 
                          variant="destructive"
                          onClick={() => {
                            setNetworkDiagramFile(null);
                            setNetworkDiagramPreview(null);
                            form.setValue("networkDiagram", null);
                          }}
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Supprimer
                        </Button>
                      </div>
                      <div className="text-center text-sm text-gray-500">
                        {networkDiagramFile && (
                          <p>Fichier : {networkDiagramFile.name} ({(networkDiagramFile.size / 1024 / 1024).toFixed(2)} MB)</p>
                        )}
                      </div>
                    </div>
                  ) : (
                    <>
                      <Upload className="h-12 w-12 text-gray-400" />
                      <div className="text-center">
                        <h3 className="text-lg font-medium text-gray-900">
                          Importer le schéma d'architecture réseau
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          Glissez-déposez un fichier ici, ou cliquez pour parcourir
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          PNG, JPG, PDF ou Visio jusqu'à 10MB
                        </p>
                      </div>
                      <Button 
                        type="button" 
                        variant="outline"
                        onClick={triggerFileInput}
                        className="mt-2"
                      >
                        Parcourir
                      </Button>
                    </>
                  )}
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    accept="image/png,image/jpeg,application/pdf,application/vnd.visio"
                    onChange={handleNetworkDiagramUpload}
                  />
                </div>
              </div>
              
              <FormField
                control={form.control}
                name="networkDiagramDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description du schéma d'architecture</FormLabel>
                    <FormControl>
                      <Textarea 
                        {...field} 
                        placeholder="Décrivez brièvement l'architecture réseau représentée dans le schéma..."
                        rows={4}
                      />
                    </FormControl>
                    <FormDescription>
                      Ajoutez des informations complémentaires qui ne sont pas visibles sur le schéma.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}






