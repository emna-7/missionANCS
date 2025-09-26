import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { PlusCircle, Trash2, Search, X, Edit, Save, ChevronUp, ChevronDown } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { formSections } from "@/lib/utils/form-sections";

interface TermsDefinitionsSectionProps {
  form: any;
}

export function TermsDefinitionsSection({ form }: TermsDefinitionsSectionProps) {
  const isCompleted = formSections[3].isCompleted(form.getValues());
  const [searchTerm, setSearchTerm] = useState("");
  const [editingTerm, setEditingTerm] = useState<{ id: number, term: string, definition: string } | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  
  // Fonction pour ajouter un nouveau terme
  const addTerm = () => {
    const currentTerms = form.getValues("termsDefinitions") || [];
    const newId = currentTerms.length > 0 
      ? Math.max(...currentTerms.map((t: any) => t.id)) + 1 
      : 1;
    
    form.setValue("termsDefinitions", [
      ...currentTerms,
      {
        id: newId,
        term: "",
        definition: ""
      }
    ]);
    
    // Mettre en mode édition le nouveau terme
    setEditingTerm({
      id: newId,
      term: "",
      definition: ""
    });
  };
  
  // Fonction pour supprimer un terme
  const removeTerm = (id: number) => {
    const currentTerms = form.getValues("termsDefinitions") || [];
    form.setValue(
      "termsDefinitions",
      currentTerms.filter((term: any) => term.id !== id)
    );
    
    // Si on supprime le terme en cours d'édition, on annule l'édition
    if (editingTerm && editingTerm.id === id) {
      setEditingTerm(null);
    }
  };
  
  // Fonction pour commencer l'édition d'un terme
  const startEditing = (term: any) => {
    setEditingTerm({
      id: term.id,
      term: term.term,
      definition: term.definition
    });
  };
  
  // Fonction pour sauvegarder les modifications
  const saveTerm = () => {
    if (!editingTerm) return;
    
    const currentTerms = form.getValues("termsDefinitions") || [];
    const updatedTerms = currentTerms.map((term: any) => 
      term.id === editingTerm.id ? { ...editingTerm } : term
    );
    
    form.setValue("termsDefinitions", updatedTerms);
    setEditingTerm(null);
  };
  
  // Fonction pour annuler l'édition
  const cancelEditing = () => {
    setEditingTerm(null);
  };
  
  // Fonction pour changer le tri
  const toggleSortDirection = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };
  
  // Fonction pour filtrer et trier les termes
  const getFilteredAndSortedTerms = () => {
    const terms = form.watch("termsDefinitions") || [];
    
    // Filtrer par terme de recherche
    const filtered = searchTerm 
      ? terms.filter((term: any) => 
          term.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
          term.definition.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : terms;
    
    // Trier par ordre alphabétique
    return [...filtered].sort((a: any, b: any) => {
      const comparison = a.term.localeCompare(b.term, 'fr', { sensitivity: 'base' });
      return sortDirection === "asc" ? comparison : -comparison;
    });
  };
  
  // Initialiser le dictionnaire avec les termes prédéfinis si vide
  useEffect(() => {
    const currentTerms = form.getValues("termsDefinitions") || [];
    
    if (currentTerms.length === 0) {
      const predefinedTerms = [
        { id: 1, term: "ANCS", definition: "Autorité Nationale de Cybersécurité émettant le référentiel SSI officiel." },
        { id: 2, term: "Antivirus", definition: "Logiciel de sécurité protégeant contre les logiciels malveillants." },
        { id: 3, term: "Application métier", definition: "Logiciel spécialisé lié aux activités de l'organisme." },
        { id: 4, term: "Appréciation des risques", definition: "Analyse de l'exposition aux menaces selon leur gravité et probabilité." },
        { id: 5, term: "Architecture réseau", definition: "Organisation technique des équipements et connexions réseau." },
        { id: 6, term: "Arrêté ministériel", definition: "Texte réglementaire fixant les critères et modalités d'audit." },
        { id: 7, term: "Audit de suivi", definition: "Audit permettant de vérifier la mise en œuvre des recommandations précédentes." },
        { id: 8, term: "Audit exhaustif", definition: "Audit complet couvrant tous les aspects du périmètre audité." },
        { id: 9, term: "Auditeur", definition: "Personne qui réalise l'audit." },
        { id: 10, term: "Base de données", definition: "Système de stockage et gestion de données structurées." },
        { id: 11, term: "Cartographie des processus", definition: "Visualisation des étapes clés des activités internes." },
        { id: 12, term: "Catégorie", definition: "Type administratif ou structurel de l'entité (ex. banque, ministère...)." },
        { id: 13, term: "Certification ISO 27001", definition: "Attestation de conformité d'un SMSI aux normes ISO 27001." },
        { id: 14, term: "Clients", definition: "Bénéficiaires des services ou produits de l'organisme audité." },
        { id: 15, term: "Composants du SI", definition: "Serveurs, applications, bases de données, équipements réseau, etc." },
        { id: 16, term: "Confidentialité", definition: "Principe de non-divulgation des informations sensibles." },
        { id: 17, term: "Conformité", definition: "Respect des normes, standards ou exigences définis." },
        { id: 18, term: "Contraintes", definition: "Obstacles ou restrictions rencontrés pendant l'audit." },
        { id: 19, term: "Contrôleur de domaine", definition: "Serveur gérant l'accès au réseau et aux ressources." },
        { id: 20, term: "Création", definition: "Date de fondation de l'organisme audité." },
        { id: 21, term: "Critères d'échantillonnage", definition: "Méthodes de sélection des structures ou composants à auditer." },
        { id: 22, term: "Critères techniques d'audit", definition: "Référentiels techniques utilisés pour évaluer un système." },
        { id: 23, term: "Décret-loi 2023-17", definition: "Cadre légal définissant les obligations en matière d'audit." },
        { id: 24, term: "Diffusion", definition: "Transmission d'un document à des destinataires." },
        { id: 25, term: "Disponibilité", definition: "Capacité d'accès aux données en temps voulu." },
        { id: 26, term: "Divulgation", definition: "Action de révéler des informations confidentielles." },
        { id: 27, term: "Domaines de sécurité du SI", definition: "Les aspects spécifiques de la sécurité évalués (organisationnels, humains, physiques, technologiques)." },
        { id: 28, term: "Droits d'accès privilégiés", definition: "Autorisations spéciales accordées à certains utilisateurs pour exécuter des tâches sensibles ou critiques." },
        { id: 29, term: "Échantillon", definition: "Partie représentative utilisée à la place d'un ensemble complet." },
        { id: 30, term: "Échantillonnage", definition: "Méthode d'analyse basée sur un sous-ensemble représentatif de données." },
        { id: 31, term: "Entrées physiques", definition: "Points d'accès physiques à des zones protégées ou restreintes." },
        { id: 32, term: "Étendue géographique", definition: "Zone géographique couverte par les activités de l'organisme." },
        { id: 33, term: "Exclusion", definition: "Élément exclu volontairement du périmètre, avec justification." },
        { id: 34, term: "Firewall", definition: "Dispositif filtrant les flux réseau entrants et sortants." },
        { id: 35, term: "Flux de données", definition: "Déplacement des données au sein des processus de l'organisme." },
        { id: 36, term: "Fonctions et responsabilités", definition: "Rôles assignés aux différents acteurs pour la gestion de la sécurité de l'information." },
        { id: 37, term: "Historique des modifications", definition: "Liste des changements faits sur un document." },
        { id: 38, term: "Homologué", definition: "Composant officiellement validé pour une utilisation dans le SI." },
        { id: 39, term: "IDS/IPS", definition: "Systèmes de détection/prévention d'intrusions." },
        { id: 40, term: "Intégrité", definition: "Exactitude et cohérence des données au fil du temps." },
        { id: 41, term: "LAN", definition: "Local Area Network : réseau local interne à un site." },
        { id: 42, term: "Lieu d'implantation", definition: "Emplacement physique d'une structure." },
        { id: 43, term: "Limites de l'audit", definition: "Éléments réduisant la portée ou la précision de l'audit." },
        { id: 44, term: "Machine physique", definition: "Serveur matériel réel hébergeant des services." },
        { id: 45, term: "Machine virtuelle", definition: "Serveur simulé exécuté sur une infrastructure physique." },
        { id: 46, term: "Maturité des mesures de sécurité", definition: "Niveau de développement et d'efficacité des contrôles de sécurité mis en place." },
        { id: 47, term: "Mesures liées aux personnes", definition: "Pratiques encadrant la sélection, l'intégration et la sensibilisation des employés en matière de sécurité." },
        { id: 48, term: "Mesures organisationnelles", definition: "Dispositifs et politiques définis pour structurer et encadrer la sécurité de l'information dans une organisation." },
        { id: 49, term: "Méthodologie d'audit", definition: "Ensemble structuré de démarches et techniques utilisées pour auditer un système." },
        { id: 50, term: "Mission d'audit", definition: "Examen structuré d'un processus ou système pour évaluer sa conformité." },
        { id: 51, term: "Missions", definition: "Rôles ou objectifs principaux assignés à l'organisme." },
        { id: 52, term: "Nom_Organisme_Audité", definition: "Champ à remplir pour identifier l'organisme audité." },
        { id: 53, term: "Nombre d'employés", definition: "Effectif total de l'organisme audité." },
        { id: 54, term: "Nomenclature", definition: "Convention de nommage utilisée pour normaliser les références." },
        { id: 55, term: "Non homologué", definition: "Composant non approuvé, nécessitant validation ou exclusion." },
        { id: 56, term: "Organisme audité", definition: "Entité faisant l'objet d'un audit." },
        { id: 57, term: "Parties prenantes", definition: "Personnes ou groupes impactés par les décisions ou activités de l'organisme." },
        { id: 58, term: "PCA", definition: "Plan de Continuité d'Activité permettant d'assurer la reprise des opérations critiques en cas de sinistre." },
        { id: 59, term: "Périmètre géographique", definition: "Zone couverte par la mission d'audit." },
        { id: 60, term: "Périmètres de sécurité physique", definition: "Zones délimitées pour contrôler l'accès physique aux ressources sensibles." },
        { id: 61, term: "Plan d'action", definition: "Mesures prévues pour corriger les écarts identifiés dans l'audit." },
        { id: 62, term: "PRA", definition: "Plan de Reprise d'Activité visant à restaurer les systèmes et services informatiques après un incident majeur." },
        { id: 63, term: "Processus critique", definition: "Processus dont l'interruption a un impact significatif sur l'activité." },
        { id: 64, term: "Processus métier", definition: "Activités critiques directement liées à la mission de l'organisme." },
        { id: 65, term: "Proxy", definition: "Serveur agissant comme intermédiaire pour les connexions web." },
        { id: 66, term: "PSSI", definition: "Politique de Sécurité des Systèmes d'Information définissant les orientations et exigences de sécurité de l'organisation." },
        { id: 67, term: "Recommandations", definition: "Propositions d'actions pour corriger ou améliorer un système." },
        { id: 68, term: "Référentiel d'audit", definition: "Document normatif de référence servant à mesurer la conformité et la sécurité du système." },
        { id: 69, term: "Reproduction", definition: "Copie ou duplication d'un document ou contenu." },
        { id: 70, term: "Routeur", definition: "Équipement dirigeant le trafic entre différents réseaux." },
        { id: 71, term: "RSSI", definition: "Responsable de la Sécurité des Systèmes d'Information chargé de piloter la sécurité informatique de l'organisation." },
        { id: 72, term: "Savoir-faire", definition: "Compétences techniques ou expériences d'une entité." },
        { id: 73, term: "Secteur d'activité", definition: "Branche économique à laquelle appartient l'organisme." },
        { id: 74, term: "Segmentation", definition: "Subdivision logique ou physique du réseau pour limiter les risques." },
        { id: 75, term: "Serveur", definition: "Ordinateur (physique ou virtuel) fournissant des services informatiques." },
        { id: 76, term: "Services fournis", definition: "Produits ou services proposés par l'organisme à ses clients." },
        { id: 77, term: "Standard", definition: "Référence formelle utilisée comme base d'évaluation." },
        { id: 78, term: "Standard métier", definition: "Norme spécifique à un secteur ou domaine professionnel." },
        { id: 79, term: "Statut", definition: "Nature publique ou privée de l'organisme." },
        { id: 80, term: "Structure", definition: "Unité ou site faisant partie du périmètre de l'audit." },
        { id: 81, term: "Switch", definition: "Équipement réseau connectant plusieurs appareils localement." },
        { id: 82, term: "Système d'information", definition: "Ensemble de ressources pour gérer l'information." },
        { id: 83, term: "Termes et conditions du contrat de travail", definition: "Clauses contractuelles fixant les obligations des employés en matière de sécurité." },
        { id: 84, term: "Terminaux finaux", definition: "Équipements utilisés par les utilisateurs finaux pour accéder aux ressources informatiques (ex. PC, laptop, smartphones)." },
        { id: 85, term: "Type d'hébergement", definition: "Méthode de déploiement : local, cloud privé, etc." },
        { id: 86, term: "WAN", definition: "Wide Area Network : réseau étendu entre plusieurs sites." }
      ];
      
      form.setValue("termsDefinitions", predefinedTerms);
    }
  }, [form]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Termes et définitions</h2>
        <Badge variant={isCompleted ? "default" : "outline"} className={isCompleted ? "bg-green-100 text-green-800" : ""}>
          {isCompleted ? "Complété" : "Non complété"}
        </Badge>
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Rechercher un terme ou une définition..."
              className="pl-8 pr-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button 
                className="absolute right-2 top-2.5"
                onClick={() => setSearchTerm("")}
              >
                <X className="h-4 w-4 text-gray-500" />
              </button>
            )}
          </div>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleSortDirection}
              className="flex items-center gap-1"
            >
              {sortDirection === "asc" ? (
                <>
                  <ChevronUp className="h-4 w-4" />
                  A-Z
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" />
                  Z-A
                </>
              )}
            </Button>
            
            <Button 
              variant="outline" 
              size="sm" 
              onClick={addTerm}
              className="flex items-center gap-1"
            >
              <PlusCircle className="h-4 w-4" />
              Ajouter un terme
            </Button>
          </div>
        </div>
        
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/3">Terme</TableHead>
                  <TableHead>Définition</TableHead>
                  <TableHead className="w-[100px] text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {getFilteredAndSortedTerms().map((term: any) => (
                  <TableRow key={term.id}>
                    <TableCell className="font-medium">{term.term}</TableCell>
                    <TableCell>{term.definition}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Modifier le terme</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4 py-4">
                              <div className="space-y-2">
                                <FormLabel>Terme</FormLabel>
                                <Input 
                                  value={editingTerm && editingTerm.id === term.id ? editingTerm.term : term.term}
                                  onChange={(e) => {
                                    if (editingTerm?.id !== term.id) {
                                      // Si on n'est pas en train d'éditer ce terme, initialiser l'édition
                                      setEditingTerm({
                                        id: term.id,
                                        term: e.target.value,
                                        definition: term.definition
                                      });
                                    } else if (editingTerm) {
                                      // Si on édite déjà ce terme, mettre à jour seulement le terme
                                      setEditingTerm({
                                        ...editingTerm,
                                        term: e.target.value
                                      });
                                    }
                                  }}
                                />
                              </div>
                              <div className="space-y-2">
                                <FormLabel>Définition</FormLabel>
                                <Textarea 
                                  rows={4}
                                  value={editingTerm && editingTerm.id === term.id ? editingTerm.definition : term.definition}
                                  onChange={(e) => {
                                    if (editingTerm?.id !== term.id) {
                                      // Si on n'est pas en train d'éditer ce terme, initialiser l'édition
                                      setEditingTerm({
                                        id: term.id,
                                        term: term.term,
                                        definition: e.target.value
                                      });
                                    } else if (editingTerm) {
                                      // Si on édite déjà ce terme, mettre à jour seulement la définition
                                      setEditingTerm({
                                        ...editingTerm,
                                        definition: e.target.value
                                      });
                                    }
                                  }}
                                />
                              </div>
                            </div>
                            <DialogFooter>
                              <DialogClose asChild>
                                <Button variant="outline" onClick={cancelEditing}>Annuler</Button>
                              </DialogClose>
                              <DialogClose asChild>
                                <Button onClick={() => {
                                  if (editingTerm?.id !== term.id) {
                                    startEditing(term);
                                  }
                                  saveTerm();
                                }}>Enregistrer</Button>
                              </DialogClose>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                        
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => removeTerm(term.id)}
                          className="h-8 w-8 p-0 text-red-500"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {getFilteredAndSortedTerms().length === 0 && (
                  <TableRow>
                    <TableCell colSpan={3} className="text-center py-4 text-gray-500">
                      {searchTerm ? "Aucun terme ne correspond à votre recherche" : "Aucun terme défini"}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


