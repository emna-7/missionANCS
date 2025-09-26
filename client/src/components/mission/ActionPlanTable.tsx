import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2, CheckCircle, X, FolderOpen, Target, User, Clock, BarChart, FileText, Settings } from "lucide-react";

interface Action {
  id: string;
  description: string;
  criticality: string;
  responsible: string;
  workload: string;
  completion: string;
  evaluation: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  icon: string;
  actions: Action[];
}

interface ActionPlanTableProps {
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
}

export function ActionPlanTable({ projects, setProjects }: ActionPlanTableProps) {
  const [showAddForm, setShowAddForm] = useState<{ [key: string]: boolean }>({});
  const [newAction, setNewAction] = useState<{ [key: string]: Partial<Action> }>({});

  // Ajouter un nouveau projet
  const addProject = () => {
    const existingNumbers = projects
      .map(p => {
        const match = p.name.match(/Projet\s+(\d+)/i);
        return match ? parseInt(match[1]) : 0;
      })
      .filter(n => n > 0);

    const nextNumber = existingNumbers.length > 0 ? Math.max(...existingNumbers) + 1 : projects.length + 1;

    // Demande fine et implicite du nom du projet
    const projectName = prompt(`Nom du projet :`, `Projet ${nextNumber}`)?.trim();
    if (!projectName) return; // Annulé par l'utilisateur

    const projectDescription = prompt(`Description (optionnelle) :`, `Description du ${projectName}`)?.trim();

    const newProject: Project = {
      id: `projet-${Date.now()}`,
      name: projectName,
      description: projectDescription || `Description du ${projectName}`,
      actions: [
        {
          id: `action-${Date.now()}`,
          description: `Première action du ${projectName}`,
          criticality: "Moyenne",
          responsible: "À définir",
          workload: "0",
          completion: "0",
          evaluation: ""
        }
      ]
    };

    setProjects(prev => [...prev, newProject]);
  };

  // Supprimer un projet
  const deleteProject = (projectId: string) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce projet et toutes ses actions ?")) {
      setProjects(prev => prev.filter(p => p.id !== projectId));
    }
  };

  // Commencer l'ajout d'une action
  const startAddingAction = (projectId: string) => {
    setShowAddForm(prev => ({ ...prev, [projectId]: true }));

    // Toujours initialiser les données, même si elles existent déjà
    setNewAction(prev => ({
      ...prev,
      [projectId]: {
        description: "",
        criticality: "Moyenne",
        responsible: "",
        workload: "0",
        completion: "0",
        evaluation: ""
      }
    }));
  };

  // Mettre à jour les champs du formulaire
  const updateNewAction = (projectId: string, field: keyof Action, value: string) => {
    setNewAction(prev => ({
      ...prev,
      [projectId]: {
        ...prev[projectId],
        [field]: value
      }
    }));
  };

  // Sauvegarder une nouvelle action
  const saveAction = (projectId: string) => {
    const actionData = newAction[projectId];
    if (!actionData?.description?.trim()) {
      alert("Veuillez saisir une description pour l'action");
      return;
    }

    const action: Action = {
      id: `action-${Date.now()}`,
      description: actionData.description.trim(),
      criticality: actionData.criticality || "Moyenne",
      responsible: actionData.responsible?.trim() || "",
      workload: actionData.workload || "0",
      completion: actionData.completion || "0",
      evaluation: actionData.evaluation?.trim() || ""
    };

    setProjects(prev =>
      prev.map(project =>
        project.id === projectId
          ? { ...project, actions: [...project.actions, action] }
          : project
      )
    );

    // Fermer le formulaire après sauvegarde
    setShowAddForm(prev => ({ ...prev, [projectId]: false }));
    setNewAction(prev => {
      const newState = { ...prev };
      delete newState[projectId];
      return newState;
    });


  };

  // Fermer le formulaire d'ajout
  const closeAddForm = (projectId: string) => {
    setShowAddForm(prev => ({ ...prev, [projectId]: false }));
    setNewAction(prev => {
      const newState = { ...prev };
      delete newState[projectId];
      return newState;
    });
  };

  // Supprimer une action
  const deleteAction = (actionId: string) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette action ?")) {
      setProjects(prev =>
        prev.map(project => ({
          ...project,
          actions: project.actions.filter(action => action.id !== actionId)
        }))
      );
    }
  };

  // Mettre à jour une action existante
  const updateAction = (actionId: string, field: keyof Action, value: string) => {
    setProjects(prev =>
      prev.map(project => ({
        ...project,
        actions: project.actions.map(action =>
          action.id === actionId ? { ...action, [field]: value } : action
        )
      }))
    );
  };

  // Obtenir la couleur selon la criticité
  const getCriticalityColor = (criticality: string) => {
    switch (criticality) {
      case "Haute": return "bg-red-100 text-red-800 border-red-200";
      case "Moyenne": return "bg-orange-100 text-orange-800 border-orange-200";
      case "Faible": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <Card className="shadow-lg border-0 bg-white">
      <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-3 text-gray-800">
            <div className="p-2 bg-[#FFC000] rounded-lg">
              <BarChart className="h-5 w-5 text-gray-900" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Tableau de Suivi des Actions</h2>
              <p className="text-sm text-gray-600 font-normal">Gestion complète des projets et actions</p>
            </div>
          </CardTitle>
          <div className="flex items-center gap-6">
            <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
              <div className="text-sm text-gray-600 text-center">
                <div className="font-bold text-lg text-gray-800">{projects.length}</div>
                <div className="text-xs">Projet(s)</div>
              </div>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
              <div className="text-sm text-gray-600 text-center">
                <div className="font-bold text-lg text-[#FFC000]">
                  {projects.reduce((total, project) => total + project.actions.length, 0)}
                </div>
                <div className="text-xs">Action(s)</div>
              </div>
            </div>
            <Button
              onClick={addProject}
              className="bg-gradient-to-r from-[#FFC000] to-yellow-500 hover:from-yellow-500 hover:to-[#FFC000] text-gray-900 font-semibold shadow-lg hover:shadow-xl transition-all duration-200 px-6 py-2"
            >
              <Plus className="h-4 w-4 mr-2" />
              Nouveau Projet
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto overflow-y-auto max-h-[600px] border-t border-gray-200">
          <Table className="min-w-[1400px]">
            <TableHeader className="sticky top-0 z-10 bg-gray-50 border-b border-gray-200">
              <TableRow>
                <TableHead className="border-r border-gray-200 font-medium text-gray-700 p-3 w-[15%]">
                  <div className="flex items-center gap-2">
                    <FolderOpen className="h-4 w-4 text-gray-500" />
                    <span>Projet</span>
                  </div>
                </TableHead>
                <TableHead className="border-r border-gray-200 font-medium text-gray-700 p-3 w-[25%]">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-gray-500" />
                    <span>Action</span>
                  </div>
                </TableHead>
                <TableHead className="border-r border-gray-200 font-medium text-gray-700 p-3 w-[8%] text-center">
                  <div className="flex items-center justify-center gap-2">
                    <span>Criticité</span>
                  </div>
                </TableHead>
                <TableHead className="border-r border-gray-200 font-medium text-gray-700 p-3 w-[12%]">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-gray-500" />
                    <span>Responsable</span>
                  </div>
                </TableHead>
                <TableHead className="border-r border-gray-200 font-medium text-gray-700 p-3 w-[8%] text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span>Charge</span>
                  </div>
                </TableHead>
                <TableHead className="border-r border-gray-200 font-medium text-gray-700 p-3 w-[12%] text-center">
                  <div className="flex items-center justify-center gap-2">
                    <BarChart className="h-4 w-4 text-gray-500" />
                    <span>Réalisation</span>
                  </div>
                </TableHead>
                <TableHead className="border-r border-gray-200 font-medium text-gray-700 p-3 w-[20%]">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-gray-500" />
                    <span>Évaluation & Commentaires</span>
                  </div>
                </TableHead>
                <TableHead className="font-medium text-gray-700 p-3 w-[6%] text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Settings className="h-4 w-4 text-gray-500" />
                    <span>Actions</span>
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <React.Fragment key={project.id}>
                  {/* En-tête du projet */}
                  <TableRow className="bg-gradient-to-r from-gray-100 to-gray-200 border-b-2 border-gray-300">
                    <TableCell colSpan={8} className="p-6">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-white rounded-full shadow-md border border-gray-200">
                            <FolderOpen className="h-6 w-6 text-gray-700" />
                          </div>
                          <div>
                            <h3 className="font-bold text-xl text-gray-800">{project.name}</h3>
                            <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => startAddingAction(project.id)}
                            className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50 shadow-md font-medium"
                          >
                            <Plus className="h-4 w-4 mr-2" />
                            Ajouter action
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => deleteProject(project.id)}
                            className="bg-white text-red-600 border-red-300 hover:bg-red-50 shadow-md font-medium"
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Supprimer projet
                          </Button>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>

                  {/* Actions du projet */}
                  {project.actions.map((action, index) => (
                    <TableRow key={action.id} className="hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100">
                      <TableCell className="border-r border-gray-200 p-4 bg-gray-50">
                        {index === 0 ? (
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-[#FFC000] rounded-full"></div>
                            <span className="text-sm font-semibold text-gray-800">{project.name}</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 ml-5">
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            <span className="text-sm text-gray-600">Action {index + 1}</span>
                          </div>
                        )}
                      </TableCell>
                      <TableCell className="border-r border-gray-200 p-4">
                        <Textarea
                          value={action.description}
                          onChange={(e) => updateAction(action.id, "description", e.target.value)}
                          className="h-20 w-full resize-none border-2 border-gray-200 rounded-lg p-3 text-sm focus:border-[#FFC000] focus:ring-2 focus:ring-yellow-100 transition-all duration-200 bg-white shadow-sm overflow-hidden"
                          placeholder="Décrivez l'action à réaliser..."
                        />
                      </TableCell>
                      <TableCell className="border-r border-gray-200 p-4 text-center">
                        <Badge className={`${getCriticalityColor(action.criticality)} px-3 py-1 text-xs font-semibold shadow-sm`}>
                          {action.criticality}
                        </Badge>
                      </TableCell>
                      <TableCell className="border-r border-gray-200 p-4">
                        <Input
                          value={action.responsible}
                          onChange={(e) => updateAction(action.id, "responsible", e.target.value)}
                          className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 text-sm focus:border-[#FFC000] focus:ring-2 focus:ring-yellow-100 transition-all duration-200 bg-white shadow-sm"
                          placeholder="Responsable..."
                        />
                      </TableCell>
                      <TableCell className="border-r border-gray-200 p-4 text-center">
                        <Input
                          type="number"
                          min="0"
                          value={action.workload}
                          onChange={(e) => updateAction(action.id, "workload", e.target.value)}
                          className="w-20 border-2 border-gray-200 rounded-lg text-center text-sm font-semibold focus:border-[#FFC000] focus:ring-2 focus:ring-yellow-100 transition-all duration-200 bg-white shadow-sm"
                          placeholder="0"
                        />
                      </TableCell>
                      <TableCell className="border-r border-gray-200 p-4">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Input
                              type="number"
                              min="0"
                              max="100"
                              value={action.completion}
                              onChange={(e) => updateAction(action.id, "completion", e.target.value)}
                              className="w-20 border-2 border-gray-200 rounded-lg text-center text-sm font-bold focus:border-[#FFC000] focus:ring-2 focus:ring-yellow-100 transition-all duration-200 bg-white shadow-sm"
                            />
                            <span className="text-xs text-gray-600 font-medium">%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                            <div
                              className="h-3 rounded-full bg-gradient-to-r from-[#FFC000] to-yellow-500 transition-all duration-500 shadow-sm"
                              style={{ width: `${action.completion}%` }}
                            />
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="border-r border-gray-200 p-4">
                        <Textarea
                          value={action.evaluation}
                          onChange={(e) => updateAction(action.id, "evaluation", e.target.value)}
                          className="h-20 w-full resize-none border-2 border-gray-200 rounded-lg p-3 text-sm focus:border-[#FFC000] focus:ring-2 focus:ring-yellow-100 transition-all duration-200 bg-white shadow-sm overflow-hidden"
                          placeholder="Évaluation et commentaires..."
                        />
                      </TableCell>
                      <TableCell className="p-4 text-center">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteAction(action.id)}
                          className="text-red-600 border-red-300 hover:bg-red-50 hover:border-red-400 shadow-sm transition-all duration-200"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}

                  {/* Formulaire d'ajout d'action */}
                  {showAddForm[project.id] && (
                    <TableRow className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-[#FFC000] shadow-lg">
                      <TableCell className="border-r border-yellow-300 p-4 bg-gradient-to-r from-[#FFC000] to-yellow-400">
                        <div className="flex items-center gap-2">
                          <div className="p-2 bg-white rounded-full shadow-sm">
                            <Plus className="h-4 w-4 text-gray-800" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-gray-900">Nouvelle action</div>
                            <div className="text-xs text-gray-700">Remplissez les champs</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="border border-gray-300 p-3">
                        <Textarea
                          value={newAction[project.id]?.description || ""}
                          onChange={(e) => updateNewAction(project.id, "description", e.target.value)}
                          className="h-20 w-full resize-none border-2 border-yellow-300 rounded-md p-2 text-sm focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 overflow-hidden"
                          placeholder="Décrivez la nouvelle action..."
                        />
                      </TableCell>
                      <TableCell className="border border-gray-300 p-3 text-center">
                        <select
                          value={newAction[project.id]?.criticality || "Moyenne"}
                          onChange={(e) => updateNewAction(project.id, "criticality", e.target.value)}
                          className="w-full border-2 border-yellow-300 rounded-md px-2 text-sm focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
                        >
                          <option value="Haute" className="text-red-800 font-medium">Haute</option>
                          <option value="Moyenne" className="text-orange-800 font-medium">Moyenne</option>
                          <option value="Faible" className="text-green-800 font-medium">Faible</option>
                        </select>
                      </TableCell>
                      <TableCell className="border border-gray-300 p-3">
                        <Input
                          value={newAction[project.id]?.responsible || ""}
                          onChange={(e) => updateNewAction(project.id, "responsible", e.target.value)}
                          className="w-full border-2 border-yellow-300 rounded-md px-3 text-sm focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
                          placeholder="Responsable..."
                        />
                      </TableCell>
                      <TableCell className="border border-gray-300 p-3 text-center">
                        <Input
                          type="number"
                          min="0"
                          value={newAction[project.id]?.workload || "0"}
                          onChange={(e) => updateNewAction(project.id, "workload", e.target.value)}
                          className="w-16 border-2 border-yellow-300 rounded-md text-center text-sm font-medium focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
                          placeholder="0"
                        />
                      </TableCell>
                      <TableCell className="border border-gray-300 p-3">
                        <div className="space-y-2">
                          <Input
                            type="number"
                            min="0"
                            max="100"
                            value={newAction[project.id]?.completion || "0"}
                            onChange={(e) => updateNewAction(project.id, "completion", e.target.value)}
                            className="w-16 border-2 border-yellow-300 rounded p-2 text-sm text-center font-bold"
                          />
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="h-2 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 transition-all duration-300"
                              style={{ width: `${newAction[project.id]?.completion || 0}%` }}
                            />
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="border border-gray-300 p-3">
                        <Textarea
                          value={newAction[project.id]?.evaluation || ""}
                          onChange={(e) => updateNewAction(project.id, "evaluation", e.target.value)}
                          className="h-20 w-full resize-none border-2 border-yellow-300 rounded-md p-2 text-sm focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 overflow-hidden"
                          placeholder="Évaluation et commentaires..."
                        />
                      </TableCell>
                      <TableCell className="border border-gray-300 p-3 text-center">
                        <div className="flex flex-col gap-1">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => saveAction(project.id)}
                            className="text-green-600 border-green-300 hover:bg-green-100 text-xs"
                          >
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Ajouter
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => closeAddForm(project.id)}
                            className="text-red-600 border-red-300 hover:bg-red-100 text-xs"
                          >
                            <X className="h-3 w-3 mr-1" />
                            Fermer
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
