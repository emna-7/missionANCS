import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trash2, Plus } from "lucide-react";

interface ActionPlanItem {
  id: string;
  projet: string;
  action: string;
  priorite: string;
  responsable: string;
  charge: string;
  planification: string;
}

interface ActionPlanSectionProps {
  data: {
    actionPlan?: ActionPlanItem[];
  };
  onChange: (data: any) => void;
}

export default function ActionPlanSection({ data, onChange }: ActionPlanSectionProps) {
  const [actionPlan, setActionPlan] = useState<ActionPlanItem[]>(
    data.actionPlan || []
  );

  const addProjectWithAction = () => {
    const newAction: ActionPlanItem = {
      id: Date.now().toString(),
      projet: `Nouveau Projet ${Object.keys(groupedActions).length + 1}`,
      action: '',
      priorite: '',
      responsable: '',
      charge: '',
      planification: ''
    };
    const updated = [...actionPlan, newAction];
    setActionPlan(updated);
    setTimeout(() => {
      onChange({ ...data, actionPlan: updated });
    }, 0);
  };

  const addActionToProject = (projectName: string) => {
    const newAction: ActionPlanItem = {
      id: Date.now().toString(),
      projet: projectName,
      action: '',
      priorite: '',
      responsable: '',
      charge: '',
      planification: ''
    };
    const updated = [...actionPlan, newAction];
    setActionPlan(updated);
    setTimeout(() => {
      onChange({ ...data, actionPlan: updated });
    }, 0);
  };

  const removeAction = (id: string) => {
    const updated = actionPlan.filter(item => item.id !== id);
    setActionPlan(updated);
    setTimeout(() => {
      onChange({ ...data, actionPlan: updated });
    }, 0);
  };

  const updateAction = (id: string, field: keyof ActionPlanItem, value: string) => {
    const updated = actionPlan.map(item =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setActionPlan(updated);
    setTimeout(() => {
      onChange({ ...data, actionPlan: updated });
    }, 0);
  };

  // Grouper les actions par projet
  const groupedActions = actionPlan.reduce((acc, action) => {
    const projet = action.projet || 'Sans projet';
    if (!acc[projet]) {
      acc[projet] = [];
    }
    acc[projet].push(action);
    return acc;
  }, {} as Record<string, ActionPlanItem[]>);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-4">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-bold text-center w-full">
              Plan d'action proposé
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex justify-end mb-4">
            <Button type="button" onClick={addProjectWithAction} className="flex items-center gap-2 bg-[#FFC000] text-black hover:bg-[#e6ac00]">
              <Plus className="h-4 w-4" />
              Ajouter un projet
            </Button>
          </div>

          <div className="overflow-x-auto">
            <div className="max-h-[600px] overflow-y-auto border border-slate-300 rounded-lg">
              <table className="min-w-[1200px] w-full border-collapse">
                {/* En-têtes sticky */}
                <thead style={{ position: 'sticky', top: 0, zIndex: 100 }}>
                  <tr style={{ backgroundColor: '#f1f5f9', borderBottom: '2px solid #cbd5e1' }}>
                    <th style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#f1f5f9', border: '1px solid #cbd5e1', padding: '12px', fontSize: '14px', fontWeight: 'bold', textAlign: 'left', width: '15%' }}>
                      Projet
                    </th>
                    <th style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#f1f5f9', border: '1px solid #cbd5e1', padding: '12px', fontSize: '14px', fontWeight: 'bold', textAlign: 'left', width: '25%' }}>
                      Action
                    </th>
                    <th style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#f1f5f9', border: '1px solid #cbd5e1', padding: '12px', fontSize: '14px', fontWeight: 'bold', textAlign: 'center', width: '12%' }}>
                      Priorité
                    </th>
                    <th style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#f1f5f9', border: '1px solid #cbd5e1', padding: '12px', fontSize: '14px', fontWeight: 'bold', textAlign: 'left', width: '18%' }}>
                      Responsable de l'action
                    </th>
                    <th style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#f1f5f9', border: '1px solid #cbd5e1', padding: '12px', fontSize: '14px', fontWeight: 'bold', textAlign: 'center', width: '12%' }}>
                      Charge (H/J)
                    </th>
                    <th style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#f1f5f9', border: '1px solid #cbd5e1', padding: '12px', fontSize: '14px', fontWeight: 'bold', textAlign: 'left', width: '15%' }}>
                      Planification
                    </th>
                    <th style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#f1f5f9', border: '1px solid #cbd5e1', padding: '12px', fontSize: '14px', fontWeight: 'bold', textAlign: 'center', width: '8%' }}>
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {Object.entries(groupedActions).map(([projectName, actions]) => (
                    <React.Fragment key={projectName}>
                      {/* En-tête du projet */}
                      <tr className="bg-slate-100 border-b border-slate-200">
                        <td className="p-2 bg-slate-100 border-r border-slate-200">
                          <h3 className="font-bold text-xs text-slate-700">{projectName}</h3>
                          <p className="text-xs text-slate-500">{actions.length} action(s)</p>
                        </td>
                        <td className="p-1 bg-slate-100 border-r border-slate-200"></td>
                        <td className="p-1 bg-slate-100 border-r border-slate-200"></td>
                        <td className="p-1 bg-slate-100 border-r border-slate-200"></td>
                        <td className="p-1 bg-slate-100 border-r border-slate-200"></td>
                        <td className="p-1 bg-slate-100 border-r border-slate-200"></td>
                        <td className="p-1 bg-slate-100 text-center">
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => addActionToProject(projectName)}
                            className="h-5 px-2 text-xs bg-white text-slate-600 border-slate-300 hover:bg-slate-50"
                          >
                            <Plus className="h-3 w-3 mr-1" />
                            Ajouter action
                          </Button>
                        </td>
                      </tr>

                      {/* Actions du projet */}
                      {actions.map((action, actionIndex) => (
                        <tr key={action.id} className="hover:bg-slate-50 transition-colors duration-200 border-b border-slate-100">
                          <td className="border-r border-slate-200 p-1 bg-slate-50" style={{ fontSize: '12px' }}>
                            {actionIndex === 0 ? (
                              <Input
                                value={action.projet}
                                onChange={(e) => {
                                  // Mettre à jour tous les éléments du même projet
                                  const updated = actionPlan.map(item =>
                                    item.projet === projectName ? { ...item, projet: e.target.value } : item
                                  );
                                  setActionPlan(updated);
                                  setTimeout(() => {
                                    onChange({ ...data, actionPlan: updated });
                                  }, 0);
                                }}
                                placeholder="Nom du projet..."
                                className="w-full h-8 border border-slate-200 rounded p-2 text-xs focus:border-[#FFC000] bg-white font-semibold"
                              />
                            ) : (
                              <span className="text-xs text-slate-600 ml-4">...</span>
                            )}
                          </td>
                          <td className="border border-slate-300 p-2">
                            <Textarea
                              value={action.action}
                              onChange={(e) => updateAction(action.id, 'action', e.target.value)}
                              placeholder="Description de l'action..."
                              className="h-16 w-full resize-none border border-slate-200 rounded p-2 text-xs focus:border-[#FFC000] bg-white"
                            />
                          </td>
                          <td className="border border-slate-300 p-2 text-center">
                            <Select
                              value={action.priorite}
                              onValueChange={(value) => updateAction(action.id, 'priorite', value)}
                            >
                              <SelectTrigger className="w-full h-8 border border-slate-200 rounded text-xs focus:border-[#FFC000] bg-white">
                                <SelectValue placeholder="Priorité" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Critique" className="text-rose-600 hover:bg-rose-50">Critique</SelectItem>
                                <SelectItem value="Élevée" className="text-amber-600 hover:bg-amber-50">Élevée</SelectItem>
                                <SelectItem value="Moyenne" className="text-slate-600 hover:bg-slate-50">Moyenne</SelectItem>
                                <SelectItem value="Faible" className="text-emerald-600 hover:bg-emerald-50">Faible</SelectItem>
                              </SelectContent>
                            </Select>
                          </td>
                          <td className="border border-slate-300 p-2">
                            <Input
                              value={action.responsable}
                              onChange={(e) => updateAction(action.id, 'responsable', e.target.value)}
                              placeholder="Nom du responsable..."
                              className="w-full h-8 border border-slate-200 rounded p-2 text-xs focus:border-[#FFC000] bg-white"
                            />
                          </td>
                          <td className="border border-slate-300 p-2 text-center">
                            <Input
                              value={action.charge}
                              onChange={(e) => updateAction(action.id, 'charge', e.target.value)}
                              placeholder="Ex: 5H, 2J..."
                              className="w-full h-8 border border-slate-200 rounded p-2 text-xs focus:border-[#FFC000] bg-white text-center"
                            />
                          </td>
                          <td className="border border-slate-300 p-2">
                            <Input
                              value={action.planification}
                              onChange={(e) => updateAction(action.id, 'planification', e.target.value)}
                              placeholder="Dates, délais..."
                              className="w-full h-8 border border-slate-200 rounded p-2 text-xs focus:border-[#FFC000] bg-white"
                            />
                          </td>
                          <td className="border border-slate-300 p-2 text-center bg-white">
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeAction(action.id)}
                              className="h-8 w-8 p-0 text-rose-600 hover:text-rose-700 hover:bg-rose-50"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Statistiques du plan d'action */}
          {actionPlan.length > 0 && (
            <div className="mt-6 bg-slate-50 p-4 rounded-lg">
              <h4 className="font-semibold text-slate-800 mb-3">Résumé du Plan d'Action</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-white rounded border border-slate-200">
                  <div className="text-xl font-bold text-slate-600">
                    {actionPlan.length}
                  </div>
                  <div className="text-sm text-slate-600">Actions totales</div>
                </div>
                <div className="text-center p-3 bg-white rounded border border-slate-200">
                  <div className="text-xl font-bold text-rose-600">
                    {actionPlan.filter(item => item.priorite === 'Critique').length}
                  </div>
                  <div className="text-sm text-slate-600">Actions critiques</div>
                </div>
                <div className="text-center p-3 bg-white rounded border border-slate-200">
                  <div className="text-xl font-bold text-amber-600">
                    {actionPlan.filter(item => item.priorite === 'Élevée').length}
                  </div>
                  <div className="text-sm text-slate-600">Actions élevées</div>
                </div>
                <div className="text-center p-3 bg-white rounded border border-slate-200">
                  <div className="text-xl font-bold text-emerald-600">
                    {Object.keys(groupedActions).length}
                  </div>
                  <div className="text-sm text-slate-600">Projets</div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
