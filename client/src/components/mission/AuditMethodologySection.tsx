import React, { useState, useEffect } from "react";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import {
  FormControl,
  FormField,
  FormItem
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Plus, 
  Trash2, 
  Shield, 
  BarChart3, 
  Wrench, 
  ClipboardCheck, 
  Users, 
  Building, 
  Calendar 
} from "lucide-react";
import { 
  securityDomainOptions, 
  maturityOptions 
} from "@/lib/utils/form-sections";
import { MissionFormData } from "@shared/schema";
import { UseFormReturn } from "react-hook-form";

interface AuditMethodologySectionProps {
  form: UseFormReturn<MissionFormData>;
}

export function AuditMethodologySection({ form }: AuditMethodologySectionProps) {
  const [activeTab, setActiveTab] = useState("security-domains");

  // État pour stocker les résultats de maturité calculés depuis l'autre section
  const [calculatedMaturityResults, setCalculatedMaturityResults] = useState<Array<{
    domain: string;
    average: string;
    percentage: string;
    category: string;
    controlsCount: number;
    evaluatedCount: number;
  }>>([]);

  // Écouter l'événement de calcul de maturité depuis AuditResultsSection
  useEffect(() => {
    const handleMaturityCalculated = (event: CustomEvent) => {
      const results = event.detail;
      setCalculatedMaturityResults(results);

      // Remplacer automatiquement les données du formulaire avec les résultats calculés
      const newSecurityMeasuresMaturity = results.map((result: any, index: number) => ({
        id: index + 1,
        domainName: result.domain,
        maturityLevel: result.category,
        comments: `Moyenne: ${result.average}/5 (${result.percentage}%) - ${result.evaluatedCount}/${result.controlsCount} contrôles évalués`
      }));

      form.setValue("securityMeasuresMaturity", newSecurityMeasuresMaturity);

      // Basculer automatiquement vers l'onglet maturité
      setActiveTab("maturity");
    };

    // Vérifier s'il y a des données sauvegardées dans localStorage au chargement
    const savedResults = localStorage.getItem('domainMaturityResults');
    if (savedResults) {
      try {
        const results = JSON.parse(savedResults);
        handleMaturityCalculated({ detail: results } as CustomEvent);
        // Nettoyer localStorage après utilisation
        localStorage.removeItem('domainMaturityResults');
      } catch (error) {
        console.error('Erreur lors du chargement des résultats de maturité:', error);
      }
    }

    window.addEventListener('maturityCalculated', handleMaturityCalculated as EventListener);

    return () => {
      window.removeEventListener('maturityCalculated', handleMaturityCalculated as EventListener);
    };
  }, [form]);

  // Security Domains
  const securityDomains = form.watch("securityDomains") || [];
  const addSecurityDomain = () => {
    const newId = securityDomains.length > 0 
      ? Math.max(...securityDomains.map((d: any) => d.id)) + 1 
      : 1;
    
    form.setValue("securityDomains", [
      ...securityDomains,
      {
        id: newId,
        domainName: "",
        referential: "",
        actions: ""
      }
    ]);
  };
  
  const removeSecurityDomain = (id: number) => {
    form.setValue(
      "securityDomains",
      securityDomains.filter((domain: any) => domain.id !== id)
    );
  };

  // Security Measures Maturity
  const securityMeasuresMaturity = form.watch("securityMeasuresMaturity") || [];
  const addSecurityMeasureMaturity = () => {
    const newId = securityMeasuresMaturity.length > 0 
      ? Math.max(...securityMeasuresMaturity.map((m: any) => m.id)) + 1 
      : 1;
    
    form.setValue("securityMeasuresMaturity", [
      ...securityMeasuresMaturity,
      {
        id: newId,
        domainName: "",
        maturityLevel: "",
        comments: ""
      }
    ]);
  };
  
  const removeSecurityMeasureMaturity = (id: number) => {
    form.setValue(
      "securityMeasuresMaturity",
      securityMeasuresMaturity.filter((measure: any) => measure.id !== id)
    );
  };

  // Audit Tools
  const auditTools = form.watch("auditTools") || [];
  const addAuditTool = () => {
    const newId = auditTools.length > 0 
      ? Math.max(...auditTools.map((t: any) => t.id)) + 1 
      : 1;
    
    form.setValue("auditTools", [
      ...auditTools,
      {
        id: newId,
        toolName: "",
        version: "",
        license: "",
        features: "",
        components: ""
      }
    ]);
  };
  
  const removeAuditTool = (id: number) => {
    form.setValue(
      "auditTools",
      auditTools.filter((tool: any) => tool.id !== id)
    );
  };

  // Audit Checklists
  const auditChecklists = form.watch("auditChecklists") || [];
  const addAuditChecklist = () => {
    const newId = auditChecklists.length > 0 
      ? Math.max(...auditChecklists.map((c: any) => c.id)) + 1 
      : 1;
    
    form.setValue("auditChecklists", [
      ...auditChecklists,
      {
        id: newId,
        checklistName: "",
        version: "",
        source: "",
        description: "",
        components: ""
      }
    ]);
  };
  
  const removeAuditChecklist = (id: number) => {
    form.setValue(
      "auditChecklists",
      auditChecklists.filter((checklist: any) => checklist.id !== id)
    );
  };

  // Audit Team
  const auditTeam = form.watch("auditTeam") || [];
  const addAuditTeamMember = () => {
    const newId = auditTeam.length > 0 
      ? Math.max(...auditTeam.map((m: any) => m.id)) + 1 
      : 1;
  
    form.setValue("auditTeam", [
      ...auditTeam,
      {
        id: newId,
        lastName: "",
        firstName: "",
        role: "",
        qualification: "",
        certifiedBy: "Non",
        interventionFields: ""
      }
    ]);
  };

  const removeAuditTeamMember = (id: number) => {
    form.setValue(
      "auditTeam",
      auditTeam.filter((member: any) => member.id !== id)
    );
  };

  // Organization Team
  const organizationTeam = form.watch("organizationTeam") || [];
  const addOrganizationTeamMember = () => {
    const newId = organizationTeam.length > 0 
      ? Math.max(...organizationTeam.map((m: any) => m.id)) + 1 
      : 1;
    
    form.setValue("organizationTeam", [
      ...organizationTeam,
      {
        id: newId,
        lastName: "",
        firstName: "",
        position: "",
        function: ""
      }
    ]);
  };

  const removeOrganizationTeamMember = (id: number) => {
    form.setValue(
      "organizationTeam",
      organizationTeam.filter((member: any) => member.id !== id)
    );
  };

  // Mission Planning
  const missionPlanning = form.watch("missionPlanning") || [];
  const addMissionPlanningTask = () => {
    const newId = missionPlanning.length > 0 
      ? Math.max(...missionPlanning.map((t: any) => t.id)) + 1 
      : 1;
    
    form.setValue("missionPlanning", [
      ...missionPlanning,
      {
        id: newId,
        phase: "",
        taskDescription: "",
        startDate: "",
        endDate: "",
        period: 0,
        onSite: "yes",
        manDays: 1
      }
    ]);
  };

  const removeMissionPlanningTask = (id: number) => {
    form.setValue(
      "missionPlanning",
      missionPlanning.filter((task: any) => task.id !== id)
    );
  };

  // Fonction pour calculer la période entre deux dates
  const updatePeriod = (index: number, startDate: string, endDate: string) => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // +1 pour inclure le jour de début
      
      form.setValue(`missionPlanning.${index}.period`, diffDays);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Méthodologie d'audit</h2>
        <Badge variant="secondary" className="text-sm">
          {securityDomains.length > 0 ? "En cours" : "À compléter"}
        </Badge>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="mb-6 border-b">
          <TabsList className="h-auto p-0 bg-transparent w-full">
            <div className="flex w-full overflow-x-auto pb-2">
              <div className="flex min-w-max w-full">
                <TabsTrigger 
                  value="security-domains" 
                  className="flex items-center gap-2 px-4 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none bg-transparent"
                >
                  <Shield className="h-5 w-5" />
                  <span className="whitespace-nowrap">Domaines de sécurité</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="maturity" 
                  className="flex items-center gap-2 px-4 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none bg-transparent"
                >
                  <BarChart3 className="h-5 w-5" />
                  <span className="whitespace-nowrap">Maturité des mesures</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="tools" 
                  className="flex items-center gap-2 px-4 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none bg-transparent"
                >
                  <Wrench className="h-5 w-5" />
                  <span className="whitespace-nowrap">Outils d'audit</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="checklists" 
                  className="flex items-center gap-2 px-4 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none bg-transparent"
                >
                  <ClipboardCheck className="h-5 w-5" />
                  <span className="whitespace-nowrap">Checklists</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="audit-team" 
                  className="flex items-center gap-2 px-4 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none bg-transparent"
                >
                  <Users className="h-5 w-5" />
                  <span className="whitespace-nowrap">Équipe d'audit</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="organization-team" 
                  className="flex items-center gap-2 px-4 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none bg-transparent"
                >
                  <Building className="h-5 w-5" />
                  <span className="whitespace-nowrap">Équipe organisme</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="planning" 
                  className="flex items-center gap-2 px-4 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none bg-transparent"
                >
                  <Calendar className="h-5 w-5" />
                  <span className="whitespace-nowrap">Planning</span>
                </TabsTrigger>
              </div>
            </div>
          </TabsList>
        </div>

        {/* Domaines de sécurité */}
        <TabsContent value="security-domains" className="space-y-4 min-w-[800px]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Domaines de sécurité audités</h3>
            <Button type="button" onClick={addSecurityDomain} variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" /> Ajouter un domaine
            </Button>
          </div>

          {securityDomains.length === 0 ? (
            <div className="text-center p-4 border rounded-md border-dashed">
              Aucun domaine de sécurité défini. Ajoutez-en un en cliquant sur le bouton ci-dessus.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-secondary-50">
                    <th className="px-4 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200">Domaine de sécurité</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200">Référentiel d'audit (ANCS)</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200">Actions auditées</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {securityDomains.map((domain: any, index: number) => (
                    <tr key={domain.id}>
                      <td className="px-4 py-2 text-sm border border-secondary-200">
                        <FormField
                          control={form.control}
                          name={`securityDomains.${index}.domainName`}
                          render={({ field }) => (
                            <FormItem className="m-0">
                              <Select 
                                onValueChange={field.onChange} 
                                value={field.value || ""}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Sélectionnez un domaine" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {securityDomainOptions.map((option) => (
                                    <SelectItem key={option} value={option}>{option}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </FormItem>
                          )}
                        />
                      </td>
                      <td className="px-4 py-2 text-sm border border-secondary-200">
                        <FormField
                          control={form.control}
                          name={`securityDomains.${index}.referential`}
                          render={({ field }) => (
                            <FormItem className="m-0">
                              <FormControl>
                                <Input placeholder="Ex: ANCS / Section 8" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </td>
                      <td className="px-4 py-2 text-sm border border-secondary-200">
                        <FormField
                          control={form.control}
                          name={`securityDomains.${index}.actions`}
                          render={({ field }) => (
                            <FormItem className="m-0">
                              <FormControl>
                                <Textarea placeholder="Description des actions auditées..." {...field} rows={2} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </td>
                      <td className="px-4 py-2 text-sm border border-secondary-200">
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeSecurityDomain(domain.id)}
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </TabsContent>

        {/* Maturité des mesures */}
        <TabsContent value="maturity" className="space-y-4 min-w-[800px]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Maturité des Mesures de Sécurité</h3>
            <Button type="button" onClick={addSecurityMeasureMaturity} variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" /> Ajouter une évaluation
            </Button>
          </div>

          {/* Notification si les données ont été générées automatiquement */}
          {calculatedMaturityResults.length > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <div className="flex items-center">
                <BarChart3 className="h-5 w-5 text-blue-600 mr-2" />
                <div>
                  <h4 className="font-semibold text-blue-800">Données générées automatiquement</h4>
                  <p className="text-sm text-blue-700">
                    Ce tableau a été généré à partir des évaluations de maturité de l'onglet "Maturité SI".
                    Les moyennes par domaine ont été calculées automatiquement.
                  </p>
                </div>
              </div>
            </div>
          )}

          {securityMeasuresMaturity.length === 0 ? (
            <div className="text-center p-4 border rounded-md border-dashed">
              Aucune évaluation de maturité définie. Ajoutez-en une en cliquant sur le bouton ci-dessus.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-secondary-50">
                    <th className="px-4 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200">Domaine de sécurité</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200">Maturité des mesures</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200">Commentaires</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {securityMeasuresMaturity.map((measure: any, index: number) => {
                    // Trouver l'option de maturité correspondante pour obtenir la couleur
                    const maturityOption = maturityOptions.find(option => option.value === measure.maturityLevel);
                    const rowColorClass = maturityOption?.color || "";
                    
                    return (
                      <tr key={measure.id} className={rowColorClass}>
                        <td className="px-4 py-2 text-sm border border-secondary-200">
                          <FormField
                            control={form.control}
                            name={`securityMeasuresMaturity.${index}.domainName`}
                            render={({ field }) => (
                              <FormItem className="m-0">
                                <Select 
                                  onValueChange={field.onChange} 
                                  value={field.value || ""}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Sélectionnez un domaine" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {securityDomainOptions.map((option) => (
                                      <SelectItem key={option} value={option}>{option}</SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </FormItem>
                            )}
                          />
                        </td>
                        <td className="px-4 py-2 text-sm border border-secondary-200">
                          <FormField
                            control={form.control}
                            name={`securityMeasuresMaturity.${index}.maturityLevel`}
                            render={({ field }) => (
                              <FormItem className="m-0">
                                <Select 
                                  onValueChange={field.onChange} 
                                  value={field.value || ""}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Niveau de maturité" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {maturityOptions.map((option) => (
                                      <SelectItem 
                                        key={option.value} 
                                        value={option.value}
                                        className={field.value === option.value ? option.color : ""}
                                      >
                                        {option.label}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </FormItem>
                            )}
                          />
                        </td>
                        <td className="px-4 py-2 text-sm border border-secondary-200">
                          <FormField
                            control={form.control}
                            name={`securityMeasuresMaturity.${index}.comments`}
                            render={({ field }) => (
                              <FormItem className="m-0">
                                <FormControl>
                                  <Textarea placeholder="Détails sur la maturité..." {...field} rows={2} />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                        </td>
                        <td className="px-4 py-2 text-sm border border-secondary-200">
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeSecurityMeasureMaturity(measure.id)}
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </TabsContent>

        {/* Outils d'audit */}
        <TabsContent value="tools" className="space-y-4 min-w-[800px]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Les outils d'audit utilisés</h3>
            <Button type="button" onClick={addAuditTool} variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" /> Ajouter un outil
            </Button>
          </div>
          
          {auditTools.length === 0 ? (
            <div className="text-center p-4 border rounded-md border-dashed">
              Aucun outil d'audit défini. Ajoutez-en un en cliquant sur le bouton ci-dessus.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-secondary-50">
                    <th className="px-4 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200">Nom de l'outil</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200">Version</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200">Licence</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200">Fonctionnalités</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200">Composants testés</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {auditTools.map((tool: any, index: number) => (
                    <tr key={tool.id}>
                      <td className="px-4 py-2 text-sm border border-secondary-200">
                        <FormField
                          control={form.control}
                          name={`auditTools.${index}.toolName`}
                          render={({ field }) => (
                            <FormItem className="m-0">
                              <FormControl>
                                <Input placeholder="Nom de l'outil" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </td>
                      <td className="px-4 py-2 text-sm border border-secondary-200">
                        <FormField
                          control={form.control}
                          name={`auditTools.${index}.version`}
                          render={({ field }) => (
                            <FormItem className="m-0">
                              <FormControl>
                                <Input placeholder="Version" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </td>
                      <td className="px-4 py-2 text-sm border border-secondary-200">
                        <FormField
                          control={form.control}
                          name={`auditTools.${index}.license`}
                          render={({ field }) => (
                            <FormItem className="m-0">
                              <FormControl>
                                <Input placeholder="Type de licence" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </td>
                      <td className="px-4 py-2 text-sm border border-secondary-200">
                        <FormField
                          control={form.control}
                          name={`auditTools.${index}.features`}
                          render={({ field }) => (
                            <FormItem className="m-0">
                              <FormControl>
                                <Textarea placeholder="Fonctionnalités principales..." {...field} rows={2} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </td>
                      <td className="px-4 py-2 text-sm border border-secondary-200">
                        <FormField
                          control={form.control}
                          name={`auditTools.${index}.components`}
                          render={({ field }) => (
                            <FormItem className="m-0">
                              <FormControl>
                                <Textarea placeholder="Composants testés..." {...field} rows={2} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </td>
                      <td className="px-4 py-2 text-sm border border-secondary-200">
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeAuditTool(tool.id)}
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </TabsContent>

        {/* Checklists */}
        <TabsContent value="checklists" className="space-y-4 min-w-[800px]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Checklists d'audit</h3>
            <Button type="button" onClick={addAuditChecklist} variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" /> Ajouter une checklist
            </Button>
          </div>
          
          {auditChecklists.length === 0 ? (
            <div className="text-center p-4 border rounded-md border-dashed">
              Aucune checklist définie. Ajoutez-en une en cliquant sur le bouton ci-dessus.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-secondary-50">
                    <th className="px-4 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200">Nom de la checklist</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200">Version</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200">Source</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200">Description</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200">Composants testés</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {auditChecklists.map((checklist: any, index: number) => (
                    <tr key={checklist.id}>
                      <td className="px-4 py-2 text-sm border border-secondary-200">
                        <FormField
                          control={form.control}
                          name={`auditChecklists.${index}.checklistName`}
                          render={({ field }) => (
                            <FormItem className="m-0">
                              <FormControl>
                                <Input placeholder="Nom de la checklist" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </td>
                      <td className="px-4 py-2 text-sm border border-secondary-200">
                        <FormField
                          control={form.control}
                          name={`auditChecklists.${index}.version`}
                          render={({ field }) => (
                            <FormItem className="m-0">
                              <FormControl>
                                <Input placeholder="Version" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </td>
                      <td className="px-4 py-2 text-sm border border-secondary-200">
                        <FormField
                          control={form.control}
                          name={`auditChecklists.${index}.source`}
                          render={({ field }) => (
                            <FormItem className="m-0">
                              <FormControl>
                                <Input placeholder="Source (ex: ANCS)" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </td>
                      <td className="px-4 py-2 text-sm border border-secondary-200">
                        <FormField
                          control={form.control}
                          name={`auditChecklists.${index}.description`}
                          render={({ field }) => (
                            <FormItem className="m-0">
                              <FormControl>
                                <Textarea placeholder="Description de la checklist..." {...field} rows={2} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </td>
                      <td className="px-4 py-2 text-sm border border-secondary-200">
                        <FormField
                          control={form.control}
                          name={`auditChecklists.${index}.components`}
                          render={({ field }) => (
                            <FormItem className="m-0">
                              <FormControl>
                                <Textarea placeholder="Composants testés..." {...field} rows={2} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </td>
                      <td className="px-4 py-2 text-sm border border-secondary-200">
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeAuditChecklist(checklist.id)}
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </TabsContent>

        {/* Équipe d'audit */}
        <TabsContent value="audit-team" className="space-y-4 min-w-[800px]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Équipe d'audit</h3>
            <Button type="button" onClick={addAuditTeamMember} variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" /> Ajouter un membre
            </Button>
          </div>
          
          {auditTeam.length === 0 ? (
            <div className="text-center p-4 border rounded-md border-dashed">
              Aucun membre d'équipe défini. Ajoutez-en un en cliquant sur le bouton ci-dessus.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-secondary-50">
                    <th className="px-4 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200">Nom</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200">Prénom</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200">Rôle</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200">Qualification</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200">Certifié par l'ANCS</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200">Domaines d'intervention</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {auditTeam.map((member: any, index: number) => (
                    <tr key={member.id}>
                      <td className="px-4 py-2 text-sm border border-secondary-200">
                        <FormField
                          control={form.control}
                          name={`auditTeam.${index}.lastName`}
                          render={({ field }) => (
                            <FormItem className="m-0">
                              <FormControl>
                                <Input placeholder="Nom" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </td>
                      <td className="px-4 py-2 text-sm border border-secondary-200">
                        <FormField
                          control={form.control}
                          name={`auditTeam.${index}.firstName`}
                          render={({ field }) => (
                            <FormItem className="m-0">
                              <FormControl>
                                <Input placeholder="Prénom" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </td>
                      <td className="px-4 py-2 text-sm border border-secondary-200">
                        <FormField
                          control={form.control}
                          name={`auditTeam.${index}.role`}
                          render={({ field }) => (
                            <FormItem className="m-0">
                              <FormControl>
                                <Input placeholder="Rôle dans l'audit" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </td>
                      <td className="px-4 py-2 text-sm border border-secondary-200">
                        <FormField
                          control={form.control}
                          name={`auditTeam.${index}.qualification`}
                          render={({ field }) => (
                            <FormItem className="m-0">
                              <FormControl>
                                <Input placeholder="Qualification" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </td>
                      <td className="px-4 py-2 text-sm border border-secondary-200">
                        <FormField
                          control={form.control}
                          name={`auditTeam.${index}.certifiedBy`}
                          render={({ field }) => (
                            <FormItem className="m-0 flex items-center justify-center space-x-2">
                              <FormControl>
                                <Switch
                                  checked={field.value === "ANCS"}
                                  onCheckedChange={(checked: boolean) => field.onChange(checked ? "ANCS" : "Non")}
                                />
                              </FormControl>
                              <div className="ml-2 text-xs">{field.value === "ANCS" ? "Oui" : "Non"}</div>
                            </FormItem>
                          )}
                        />
                      </td>
                      <td className="px-4 py-2 text-sm border border-secondary-200">
                        <FormField
                          control={form.control}
                          name={`auditTeam.${index}.interventionFields`}
                          render={({ field }) => (
                            <FormItem className="m-0">
                              <FormControl>
                                <Textarea placeholder="Domaines d'intervention..." {...field} rows={2} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </td>
                      <td className="px-4 py-2 text-sm border border-secondary-200">
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeAuditTeamMember(member.id)}
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </TabsContent>

        {/* Équipe côté organisme */}
        <TabsContent value="organization-team" className="space-y-4 min-w-[800px]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Équipe côté organisme</h3>
            <Button type="button" onClick={addOrganizationTeamMember} variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" /> Ajouter un membre
            </Button>
          </div>
          
          {organizationTeam.length === 0 ? (
            <div className="text-center p-4 border rounded-md border-dashed">
              Aucun membre d'équipe défini. Ajoutez-en un en cliquant sur le bouton ci-dessus.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-secondary-50">
                    <th className="px-4 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200">Nom</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200">Prénom</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200">Poste</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200">Fonction</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {organizationTeam.map((member: any, index: number) => (
                    <tr key={member.id}>
                      <td className="px-4 py-2 text-sm border border-secondary-200">
                        <FormField
                          control={form.control}
                          name={`organizationTeam.${index}.lastName`}
                          render={({ field }) => (
                            <FormItem className="m-0">
                              <FormControl>
                                <Input placeholder="Nom" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </td>
                      <td className="px-4 py-2 text-sm border border-secondary-200">
                        <FormField
                          control={form.control}
                          name={`organizationTeam.${index}.firstName`}
                          render={({ field }) => (
                            <FormItem className="m-0">
                              <FormControl>
                                <Input placeholder="Prénom" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </td>
                      <td className="px-4 py-2 text-sm border border-secondary-200">
                        <FormField
                          control={form.control}
                          name={`organizationTeam.${index}.position`}
                          render={({ field }) => (
                            <FormItem className="m-0">
                              <FormControl>
                                <Input placeholder="Poste" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </td>
                      <td className="px-4 py-2 text-sm border border-secondary-200">
                        <FormField
                          control={form.control}
                          name={`organizationTeam.${index}.function`}
                          render={({ field }) => (
                            <FormItem className="m-0">
                              <FormControl>
                                <Input placeholder="Fonction" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </td>
                      <td className="px-4 py-2 text-sm border border-secondary-200">
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeOrganizationTeamMember(member.id)}
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </TabsContent>

        {/* Planning d'exécution */}
        <TabsContent value="planning" className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Planning d'exécution de la mission d'audit</h3>
            <Button type="button" onClick={addMissionPlanningTask} variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" /> Ajouter une tâche
            </Button>
          </div>

          {missionPlanning.length === 0 ? (
            <div className="text-center p-4 border rounded-md border-dashed">
              Aucune tâche définie. Ajoutez-en une en cliquant sur le bouton ci-dessus.
            </div>
          ) : (
            <div className="overflow-x-auto border rounded-md">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-secondary-50">
                    <th className="px-3 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200 whitespace-nowrap">Phase</th>
                    <th className="px-3 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200 whitespace-nowrap">Sous-phase</th>
                    <th className="px-3 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200 whitespace-nowrap">Date début</th>
                    <th className="px-3 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200 whitespace-nowrap">Date fin</th>
                    <th className="px-3 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200 whitespace-nowrap">Période</th>
                    <th className="px-3 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200 whitespace-nowrap">Sur site</th>
                    <th className="px-3 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200 whitespace-nowrap">H/J</th>
                    <th className="px-3 py-2 text-left text-xs font-semibold text-secondary-700 border border-secondary-200 whitespace-nowrap">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {missionPlanning.map((task: any, index: number) => (
                    <tr key={task.id}>
                      <td className="px-3 py-2 text-sm border border-secondary-200">
                        <FormField
                          control={form.control}
                          name={`missionPlanning.${index}.phase`}
                          render={({ field }) => (
                            <FormItem className="m-0">
                              <Select 
                                onValueChange={field.onChange} 
                                value={field.value || ""}
                              >
                                <FormControl>
                                  <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Phase" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="phase0">Phase 0 : Déclenchement</SelectItem>
                                  <SelectItem value="phase1">Phase 1 : Audit Organisationnel</SelectItem>
                                  <SelectItem value="phase2">Phase 2 : Appréciation Risques</SelectItem>
                                  <SelectItem value="phase3">Phase 3 : Audit Technique</SelectItem>
                                  <SelectItem value="phase4">Phase 4 : Sensibilisation</SelectItem>
                                </SelectContent>
                              </Select>
                            </FormItem>
                          )}
                        />
                      </td>
                      <td className="px-3 py-2 text-sm border border-secondary-200">
                        <FormField
                          control={form.control}
                          name={`missionPlanning.${index}.taskDescription`}
                          render={({ field }) => (
                            <FormItem className="m-0">
                              <FormControl>
                                <Input placeholder="Description" {...field} className="w-[180px]" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </td>
                      <td className="px-3 py-2 text-sm border border-secondary-200">
                        <FormField
                          control={form.control}
                          name={`missionPlanning.${index}.startDate`}
                          render={({ field }) => (
                            <FormItem className="m-0">
                              <FormControl>
                                <Input 
                                  type="date" 
                                  {...field} 
                                  className="w-[140px]"
                                  onChange={(e) => {
                                    field.onChange(e);
                                    updatePeriod(index, e.target.value, form.getValues(`missionPlanning.${index}.endDate`));
                                  }}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </td>
                      <td className="px-3 py-2 text-sm border border-secondary-200">
                        <FormField
                          control={form.control}
                          name={`missionPlanning.${index}.endDate`}
                          render={({ field }) => (
                            <FormItem className="m-0">
                              <FormControl>
                                <Input 
                                  type="date" 
                                  {...field} 
                                  className="w-[140px]"
                                  onChange={(e) => {
                                    field.onChange(e);
                                    updatePeriod(index, form.getValues(`missionPlanning.${index}.startDate`), e.target.value);
                                  }}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </td>
                      <td className="px-3 py-2 text-sm border border-secondary-200 text-center">
                        <FormField
                          control={form.control}
                          name={`missionPlanning.${index}.period`}
                          render={({ field }) => (
                            <FormItem className="m-0">
                              <FormControl>
                                <Input 
                                  type="number" 
                                  {...field} 
                                  className="w-[60px] text-center"
                                  readOnly
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </td>
                      <td className="px-3 py-2 text-sm border border-secondary-200">
                        <FormField
                          control={form.control}
                          name={`missionPlanning.${index}.onSite`}
                          render={({ field }) => (
                            <FormItem className="m-0">
                              <Select 
                                onValueChange={field.onChange} 
                                value={field.value || "yes"}
                              >
                                <FormControl>
                                  <SelectTrigger className="w-[100px]">
                                    <SelectValue placeholder="Sur site" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="yes">Oui</SelectItem>
                                  <SelectItem value="no">Non</SelectItem>
                                  <SelectItem value="partial">Partiel</SelectItem>
                                </SelectContent>
                              </Select>
                            </FormItem>
                          )}
                        />
                      </td>
                      <td className="px-3 py-2 text-sm border border-secondary-200">
                        <FormField
                          control={form.control}
                          name={`missionPlanning.${index}.manDays`}
                          render={({ field }) => (
                            <FormItem className="m-0">
                              <FormControl>
                                <Input 
                                  type="number" 
                                  {...field} 
                                  className="w-[60px]"
                                  value={field.value || ''}
                                  onChange={event => field.onChange(
                                    event.target.value === '' ? '' : Number(event.target.value)
                                  )}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </td>
                      <td className="px-3 py-2 text-sm border border-secondary-200">
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeMissionPlanningTask(task.id)}
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          {missionPlanning.length > 0 && (
            <div className="flex justify-end mt-4">
              <div className="bg-secondary-50 px-4 py-2 border border-secondary-200 rounded-md">
                <span className="font-semibold">Durée Totale: </span>
                <span>{missionPlanning.reduce((total: number, task: any) => total + (Number(task.manDays) || 0), 0)} jours/homme</span>
              </div>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}












