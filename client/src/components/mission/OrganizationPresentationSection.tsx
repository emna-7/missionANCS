import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formSections } from "@/lib/utils/form-sections";
import { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  PlusCircle,
  Trash2,
  AlertTriangle,
  Info,
  FileUp,
  Settings,
  Edit
} from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

interface OrganizationPresentationSectionProps {
  form: any;
}

export function OrganizationPresentationSection({ form }: OrganizationPresentationSectionProps) {
  const isCompleted = formSections[2].isCompleted(form.getValues());
  
  // Tabs management
  const [activeTab, setActiveTab] = useState("general");
  
  // Process management functions
  const addProcess = () => {
    const currentProcesses = form.getValues("businessProcesses") || [];
    const newId = currentProcesses.length > 0 
      ? Math.max(...currentProcesses.map((p: any) => p.id)) + 1 
      : 1;
    
    form.setValue("businessProcesses", [
      ...currentProcesses,
      {
        id: newId,
        name: "",
        description: "",
        dataType: ""
      }
    ]);
    
    // Also add a corresponding security requirement
    const currentSecurityReqs = form.getValues("securityRequirements") || [];
    form.setValue("securityRequirements", [
      ...currentSecurityReqs,
      {
        processId: newId,
        processName: "",
        confidentiality: 1,
        integrity: 1,
        availability: 1
      }
    ]);
  };
  
  const removeProcess = (processId: number) => {
    // Remove process
    const currentProcesses = form.getValues("businessProcesses") || [];
    form.setValue(
      "businessProcesses",
      currentProcesses.filter((p: any) => p.id !== processId)
    );
    
    // Remove corresponding security requirement
    const currentSecurityReqs = form.getValues("securityRequirements") || [];
    form.setValue(
      "securityRequirements",
      currentSecurityReqs.filter((sr: any) => sr.processId !== processId)
    );
  };
  
  // Watchers
  const businessProcesses = form.watch("businessProcesses") || [];
  const securityRequirements = form.watch("securityRequirements") || [];
  
  // Update process name in security requirements when it changes in business processes
  const updateProcessNameInSecurityRequirements = (processId: number, newName: string) => {
    const currentSecurityReqs = form.getValues("securityRequirements") || [];
    const updatedSecurityReqs = currentSecurityReqs.map((sr: any) => {
      if (sr.processId === processId) {
        return { ...sr, processName: newName };
      }
      return sr;
    });
    form.setValue("securityRequirements", updatedSecurityReqs);
  };
  
  // Modifier les fonctions de couleur pour supporter 4 niveaux
  const getConfidentialityColor = (level: number) => {
    switch(level) {
      case 1: return "bg-green-100 text-green-800 border-green-200";
      case 2: return "bg-blue-100 text-blue-800 border-blue-200";
      case 3: return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case 4: return "bg-red-100 text-red-800 border-red-200";
      default: return "";
    }
  };
  
  const getIntegrityColor = (level: number) => {
    switch(level) {
      case 1: return "bg-green-100 text-green-800 border-green-200";
      case 2: return "bg-blue-100 text-blue-800 border-blue-200";
      case 3: return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case 4: return "bg-red-100 text-red-800 border-red-200";
      default: return "";
    }
  };
  
  const getAvailabilityColor = (level: number) => {
    switch(level) {
      case 1: return "bg-green-100 text-green-800 border-green-200";
      case 2: return "bg-blue-100 text-blue-800 border-blue-200";
      case 3: return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case 4: return "bg-red-100 text-red-800 border-red-200";
      default: return "";
    }
  };
  
  // Ajouter fonction pour calculer la criticité et la classification
  const getCriticality = (conf: number, integ: number, avail: number) => {
    return Math.max(conf, integ, avail);
  };

  const getClassification = (criticality: number) => {
    switch(criticality) {
      case 4: return "Critique et Prioritaire";
      case 3: return "Important mais avec flexibilité";
      case 2: return "Modéré, nécessite vigilance";
      case 1: return "Faible, peu impactant";
      default: return "";
    }
  };
  
  // Get CIA matrix
  const ciaMatrix = form.watch("ciaMatrix") || {
    confidentiality: [
      { level: 1, name: "Faible", description: "Information publique, diffusion sans restriction." },
      { level: 2, name: "Moyen", description: "Restreint au personnel interne et partenaires autorisés." },
      { level: 3, name: "Élevé", description: "Très restreint, accès limité aux personnes expressément autorisées." },
      { level: 4, name: "Critique", description: "Strictement confidentiel, accès extrêmement limité et contrôlé." }
    ],
    integrity: [
      { level: 1, name: "Faible", description: "Modifications mineures acceptables, impact limité." },
      { level: 2, name: "Moyen", description: "Les erreurs tolérables si détectées, données vérifiées par processus." },
      { level: 3, name: "Élevé", description: "Aucune erreur tolérée, vérification avancée requise." },
      { level: 4, name: "Critique", description: "Intégrité absolue requise, toute altération pourrait être catastrophique." }
    ],
    availability: [
      { level: 1, name: "Faible", description: "Indisponibilité tolérable, peu d'impact opérationnel." },
      { level: 2, name: "Moyen", description: "Disponible aux heures ouvrées avec interruptions planifiées." },
      { level: 3, name: "Élevé", description: "Haute disponibilité requise 24/7, temps d'arrêt minimal." },
      { level: 4, name: "Critique", description: "Disponibilité permanente critique, aucune interruption tolérée." }
    ]
  };

  // Processus métier prédéfinis - affichés comme lignes fixes
  const predefinedProcesses = [
    "Gestion des audits",
    "Gestion des risques",
    "Gestion des ressources humaines",
    "Services fiscaux",
    "Gestion des incidents de sécurité",
    "Gestion des achats"
  ];

  // Initialiser automatiquement les processus prédéfinis
  useEffect(() => {
    const currentProcesses = form.getValues("businessProcesses") || [];
    const currentSecurityReqs = form.getValues("securityRequirements") || [];

    // Si aucun processus n'existe, initialiser avec les processus prédéfinis
    if (currentProcesses.length === 0) {
      const initialProcesses = predefinedProcesses.map((processName, index) => ({
        id: index + 1,
        name: processName,
        description: "",
        dataType: ""
      }));

      const initialSecurityReqs = predefinedProcesses.map((processName, index) => ({
        processId: index + 1,
        processName: processName,
        confidentiality: 1,
        integrity: 1,
        availability: 1
      }));

      form.setValue("businessProcesses", initialProcesses);
      form.setValue("securityRequirements", initialSecurityReqs);
    }
  }, [form, predefinedProcesses]);

  // Dans la fonction OrganizationPresentationSection, ajouter une fonction pour modifier un processus
  // const [editingProcessId, setEditingProcessId] = useState<number | null>(null);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Présentation de l'organisme audité</h2>
        <Badge variant={isCompleted ? "default" : "outline"} className={isCompleted ? "bg-green-100 text-green-800" : ""}>
          {isCompleted ? "Complété" : "Non complété"}
        </Badge>
      </div>

      <Tabs 
        defaultValue="general" 
        value={activeTab} 
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="general" className="flex items-center gap-2">
            <Info className="h-4 w-4" />
            <span>Informations générales</span>
          </TabsTrigger>
          <TabsTrigger value="processes" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            <span>Cartographie des processus</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            <span>Exigences de sécurité</span>
          </TabsTrigger>
          <TabsTrigger value="cia" className="flex items-center gap-2">
            <FileUp className="h-4 w-4" />
            <span>Matrice CIA</span>
          </TabsTrigger>
        </TabsList>
        
        {/* Informations générales */}
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>Présentation générale de l'organisme audité</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="orgName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom de l'organisme</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Ex: ACME Corporation" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="orgCreationDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date de création</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="orgBusinessActivity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Activité principale</FormLabel>
                    <FormControl>
                      <Textarea 
                        {...field} 
                        placeholder="Ex: Conseil en informatique, telecoms, éditeur logiciel..."
                        rows={3}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="orgContactInfo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Coordonnées</FormLabel>
                    <FormControl>
                      <Textarea 
                        {...field} 
                        placeholder="Ex: Adresse, téléphone, email..."
                        rows={3}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="orgWebsite"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Site web</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Ex: https://www.example.com" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Cartographie des processus */}
        <TabsContent value="processes">
          <Card>
            <CardHeader>
              <CardTitle>Cartographie des processus de l'organisme</CardTitle>
              <p className="text-sm text-gray-600 mt-2">
                Processus métier prédéfinis de l'organisme. Complétez les descriptions et flux de données.
              </p>
            </CardHeader>
            <CardContent>
              {businessProcesses.length === 0 ? (
                <div className="text-center py-6 text-muted-foreground">
                  Aucun processus défini. Cliquez sur "Ajouter un processus" pour commencer.
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[50px]">ID</TableHead>
                      <TableHead>Processus métier</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Flux de données associés</TableHead>
                      <TableHead className="w-[120px]">Statut</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {businessProcesses.map((process: any, index: number) => (
                      <TableRow key={process.id}>
                        <TableCell className="font-medium">{process.id}</TableCell>
                        <TableCell>
                          <div className="font-medium text-gray-900 py-2">
                            {process.name}
                          </div>
                        </TableCell>
                        <TableCell>
                          <FormField
                            control={form.control}
                            name={`businessProcesses.${index}.description`}
                            render={({ field }) => (
                              <FormItem className="mb-0">
                                <FormControl>
                                  <Input {...field} placeholder="Description du processus" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </TableCell>
                        <TableCell>
                          <FormField
                            control={form.control}
                            name={`businessProcesses.${index}.dataType`}
                            render={({ field }) => (
                              <FormItem className="mb-0">
                                <FormControl>
                                  <Input {...field} placeholder="Flux de données" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </TableCell>
                        <TableCell>
                          <div className="text-center text-gray-400">
                            <span className="text-xs">Processus fixe</span>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Exigences de sécurité */}
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Exigences de sécurité pour chaque processus</CardTitle>
            </CardHeader>
            <CardContent>
              {securityRequirements.length === 0 ? (
                <div className="text-center py-6 text-muted-foreground">
                  Aucune exigence de sécurité définie. Ajoutez d'abord des processus dans l'onglet précédent.
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Désignation du processus</TableHead>
                      <TableHead className="w-[120px]">Confidentialité</TableHead>
                      <TableHead className="w-[120px]">Intégrité</TableHead>
                      <TableHead className="w-[120px]">Disponibilité</TableHead>
                      <TableHead className="w-[120px]">Criticité</TableHead>
                      <TableHead>Classification</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {securityRequirements.map((req: any, index: number) => {
                      const process = businessProcesses.find((p: any) => p.id === req.processId) || {};
                      const criticality = getCriticality(req.confidentiality, req.integrity, req.availability);
                      const classification = getClassification(criticality);
                      
                      return (
                        <TableRow key={req.processId}>
                          <TableCell className="font-medium">{process.name || `Processus ${req.processId}`}</TableCell>
                          <TableCell>
                            <FormField
                              control={form.control}
                              name={`securityRequirements.${index}.confidentiality`}
                              render={({ field }) => (
                                <FormItem className="mb-0">
                                  <FormControl>
                                    <RadioGroup
                                      onValueChange={(value) => field.onChange(parseInt(value))}
                                      defaultValue={field.value?.toString()}
                                      value={field.value?.toString()}
                                      className="flex flex-col space-y-1"
                                    >
                                      {[1, 2, 3, 4].map((level) => (
                                        <div 
                                          key={level} 
                                          className={cn(
                                            "flex items-center space-x-2 rounded-md border px-3 py-2", 
                                            field.value === level && getConfidentialityColor(level)
                                          )}
                                        >
                                          <RadioGroupItem value={level.toString()} id={`conf-${req.processId}-${level}`} />
                                          <label htmlFor={`conf-${req.processId}-${level}`} className="text-sm font-medium">
                                            {level}
                                          </label>
                                        </div>
                                      ))}
                                    </RadioGroup>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TableCell>
                          <TableCell>
                            <FormField
                              control={form.control}
                              name={`securityRequirements.${index}.integrity`}
                              render={({ field }) => (
                                <FormItem className="mb-0">
                                  <FormControl>
                                    <RadioGroup
                                      onValueChange={(value) => field.onChange(parseInt(value))}
                                      defaultValue={field.value?.toString()}
                                      value={field.value?.toString()}
                                      className="flex flex-col space-y-1"
                                    >
                                      {[1, 2, 3, 4].map((level) => (
                                        <div 
                                          key={level} 
                                          className={cn(
                                            "flex items-center space-x-2 rounded-md border px-3 py-2", 
                                            field.value === level && getIntegrityColor(level)
                                          )}
                                        >
                                          <RadioGroupItem value={level.toString()} id={`int-${req.processId}-${level}`} />
                                          <label htmlFor={`int-${req.processId}-${level}`} className="text-sm font-medium">
                                            {level}
                                          </label>
                                        </div>
                                      ))}
                                    </RadioGroup>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TableCell>
                          <TableCell>
                            <FormField
                              control={form.control}
                              name={`securityRequirements.${index}.availability`}
                              render={({ field }) => (
                                <FormItem className="mb-0">
                                  <FormControl>
                                    <RadioGroup
                                      onValueChange={(value) => field.onChange(parseInt(value))}
                                      defaultValue={field.value?.toString()}
                                      value={field.value?.toString()}
                                      className="flex flex-col space-y-1"
                                    >
                                      {[1, 2, 3, 4].map((level) => (
                                        <div 
                                          key={level} 
                                          className={cn(
                                            "flex items-center space-x-2 rounded-md border px-3 py-2", 
                                            field.value === level && getAvailabilityColor(level)
                                          )}
                                        >
                                          <RadioGroupItem value={level.toString()} id={`avail-${req.processId}-${level}`} />
                                          <label htmlFor={`avail-${req.processId}-${level}`} className="text-sm font-medium">
                                            {level}
                                          </label>
                                        </div>
                                      ))}
                                    </RadioGroup>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TableCell>
                          <TableCell className="font-medium">
                            {criticality}
                          </TableCell>
                          <TableCell>
                            <div className={cn(
                              "px-3 py-2 rounded-md text-sm",
                              criticality === 4 ? "bg-red-100 text-red-800" :
                              criticality === 3 ? "bg-yellow-100 text-yellow-800" :
                              criticality === 2 ? "bg-blue-100 text-blue-800" :
                              "bg-green-100 text-green-800"
                            )}>
                              {classification}
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Matrice CIA */}
        <TabsContent value="cia">
          <div className="space-y-6">
            {/* Confidentialité */}
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-blue-600">Confidentialité</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[80px]">Niveau</TableHead>
                      <TableHead className="w-[150px]">Nom</TableHead>
                      <TableHead>Description du niveau de confidentialité</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {ciaMatrix.confidentiality.map((level: any, index: number) => (
                      <TableRow key={index} className={getConfidentialityColor(level.level)}>
                        <TableCell className="font-bold text-center">{level.level}</TableCell>
                        <TableCell>{level.name}</TableCell>
                        <TableCell>{level.description}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            
            {/* Intégrité */}
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-green-600">Intégrité</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[80px]">Niveau</TableHead>
                      <TableHead className="w-[150px]">Nom</TableHead>
                      <TableHead>Description du niveau d'intégrité</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {ciaMatrix.integrity.map((level: any, index: number) => (
                      <TableRow key={index} className={getIntegrityColor(level.level)}>
                        <TableCell className="font-bold text-center">{level.level}</TableCell>
                        <TableCell>{level.name}</TableCell>
                        <TableCell>{level.description}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            
            {/* Disponibilité */}
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-amber-600">Disponibilité</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[80px]">Niveau</TableHead>
                      <TableHead className="w-[150px]">Nom</TableHead>
                      <TableHead>Description du niveau de disponibilité</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {ciaMatrix.availability.map((level: any, index: number) => (
                      <TableRow key={index} className={getAvailabilityColor(level.level)}>
                        <TableCell className="font-bold text-center">{level.level}</TableCell>
                        <TableCell>{level.name}</TableCell>
                        <TableCell>{level.description}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}








