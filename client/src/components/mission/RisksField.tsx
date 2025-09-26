import React, { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MissionFormData } from "../../../../shared/schema";
import { Plus, Download, Zap, Trash2, AlertTriangle, Target, Settings, FileText, BarChart, TrendingUp } from "lucide-react";

interface RisksFieldProps {
  form: UseFormReturn<MissionFormData>;
}

export function RisksField({ form }: RisksFieldProps) {
  // Récupérer les vrais processus métier depuis le formulaire
  const businessProcesses = form.watch("businessProcesses") || [];
  const securityRequirements = form.watch("securityRequirements") || [];

  // Fonction pour déterminer la criticité d'un processus basée sur ses exigences de sécurité
  const getProcessCriticality = (processId: number) => {
    const securityReq = securityRequirements.find((req: any) => req.processId === processId);
    if (!securityReq) return 1;

    // Criticité = MAX(confidentialité, intégrité, disponibilité)
    return Math.max(securityReq.confidentiality, securityReq.integrity, securityReq.availability);
  };

  // Créer la liste des processus avec leur criticité
  const processesWithCriticality = businessProcesses.map((process: any) => ({
    ...process,
    criticality: getProcessCriticality(process.id)
  }));

  const [riskAssessments, setRiskAssessments] = useState([
    {
      id: 1,
      processus: "Gestion des comptes clients",
      actifNom: "Base de données clients",
      actifType: "Données",
      scenario: "Accès non autorisé aux données clients",
      vulnerabilityRef: "V001",
      impactedComponent: "Serveur de base de données",
      impactFinancier: 3,
      impactOperationnel: 4,
      impactReputation: 4,
      impactEnvironnement: 2,
      probabilite: 3,
      recommendation: "Mise en place d'authentification multi-facteurs",
      complexite: "Moyenne"
    },
    {
      id: 2,
      processus: "Gestion des comptes clients",
      actifNom: "Application CRM",
      actifType: "Application",
      scenario: "Vulnérabilité dans l'application",
      vulnerabilityRef: "V002",
      impactedComponent: "Interface utilisateur CRM",
      impactFinancier: 2,
      impactOperationnel: 3,
      impactReputation: 3,
      impactEnvironnement: 1,
      probabilite: 2,
      recommendation: "Mise à jour de sécurité et tests de pénétration",
      complexite: "Moyenne"
    },
    {
      id: 3,
      processus: "Traitement des paiements",
      actifNom: "Passerelle de paiement",
      actifType: "Infrastructure",
      scenario: "Interception des transactions",
      vulnerabilityRef: "V003",
      impactedComponent: "Module de chiffrement",
      impactFinancier: 4,
      impactOperationnel: 3,
      impactReputation: 4,
      impactEnvironnement: 1,
      probabilite: 2,
      recommendation: "Chiffrement renforcé des communications",
      complexite: "Forte"
    }
  ]);

  // Fonction pour générer le tableau des risques à partir des processus critiques
  const generateRiskTable = () => {
    // Vérifier qu'il y a des processus métier définis
    if (processesWithCriticality.length === 0) {
      alert("Aucun processus métier trouvé. Veuillez d'abord définir des processus dans la section 'Présentation de l'organisme audité'.");
      return;
    }

    // Filtrer les processus avec criticité = 4 (comme dans le code VBA)
    const criticalProcesses = processesWithCriticality.filter(process => process.criticality === 4);

    if (criticalProcesses.length === 0) {
      alert("Aucun processus critique trouvé. Veuillez d'abord définir des exigences de sécurité de niveau 4 dans la section 'Présentation de l'organisme audité'.");
      return;
    }

    // Créer de nouvelles évaluations de risques pour chaque processus critique
    const newRiskAssessments = criticalProcesses.map((process, index) => ({
      id: riskAssessments.length + index + 1,
      processus: process.name,
      actifNom: "",
      actifType: "",
      scenario: "",
      vulnerabilityRef: "",
      impactedComponent: "",
      impactFinancier: 1,
      impactOperationnel: 1,
      impactReputation: 1,
      impactEnvironnement: 1,
      probabilite: 1,
      recommendation: "",
      complexite: "Faible"
    }));

    setRiskAssessments(newRiskAssessments);
    console.log(`Tableau généré avec ${criticalProcesses.length} processus critiques:`, criticalProcesses.map(p => p.name));
  };

  // Fonction pour calculer la valeur finale d'impact (MAX des impacts)
  const calculateFinalImpact = (assessment: any) => {
    return Math.max(
      assessment.impactFinancier,
      assessment.impactOperationnel,
      assessment.impactReputation,
      assessment.impactEnvironnement
    );
  };

  // Fonction pour calculer le niveau de risque (Impact final × Probabilité)
  const calculateRiskLevel = (assessment: any) => {
    return calculateFinalImpact(assessment) * assessment.probabilite;
  };

  // Fonction pour ajouter un nouvel actif à un processus existant
  const addAssetToProcess = (processName: string) => {
    const newId = Math.max(...riskAssessments.map(r => r.id)) + 1;
    const newAsset = {
      id: newId,
      processus: processName,
      actifNom: "",
      actifType: "",
      scenario: "",
      vulnerabilityRef: "",
      impactedComponent: "",
      impactFinancier: 1,
      impactOperationnel: 1,
      impactReputation: 1,
      impactEnvironnement: 1,
      probabilite: 1,
      recommendation: "",
      complexite: "Faible"
    };

    setRiskAssessments([...riskAssessments, newAsset]);
  };

  // Fonction pour supprimer un actif
  const removeAsset = (id: number) => {
    setRiskAssessments(riskAssessments.filter(assessment => assessment.id !== id));
  };

  return (
    <div className="space-y-8">
      {/* En-tête */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Appréciation des Risques</h2>
          <p className="text-gray-600 mt-1">Analyse des risques sur les processus métier critiques</p>
        </div>
        <Button
          type="button"
          onClick={generateRiskTable}
          className="flex items-center gap-2"
        >
          <Zap className="h-4 w-4" />
          Générer le tableau
        </Button>
      </div>



      {/* Message d'information */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <p className="text-amber-800 text-sm">
          <strong>Note:</strong> Cette section extrait automatiquement les processus métier avec un niveau de criticité 4
          depuis les données de présentation de l'organisation et permet d'évaluer les risques associés.
        </p>
      </div>

      {/* Tableau principal d'appréciation des risques */}
      {riskAssessments.length > 0 && (
        <Card className="shadow-lg border-0 bg-white">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <CardTitle className="flex items-center gap-3 text-gray-800">
                <div>
                  <h2 className="text-xl font-bold">Tableau d'Appréciation des Risques</h2>
                  <p className="text-sm text-gray-600 font-normal">Évaluation détaillée des risques par processus et actifs</p>
                </div>
              </CardTitle>
              <div className="flex items-center gap-6">
                <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
                  <div className="text-sm text-gray-600 text-center">
                    <div className="font-bold text-lg text-gray-800">
                      {Object.keys(riskAssessments.reduce((acc, r) => ({ ...acc, [r.processus]: true }), {})).length}
                    </div>
                    <div className="text-xs">Processus</div>
                  </div>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
                  <div className="text-sm text-gray-600 text-center">
                    <div className="font-bold text-lg text-[#FFC000]">
                      {riskAssessments.length}
                    </div>
                    <div className="text-xs">Actif(s)</div>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto overflow-y-auto max-h-[500px] border-t border-gray-200">
              <Table className="min-w-[1400px]">
                <thead style={{ position: 'sticky', top: 0, zIndex: 100 }}>
                  <tr style={{ backgroundColor: '#e5e7eb', borderBottom: '2px solid #d1d5db' }}>
                    <th style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#e5e7eb', borderRight: '1px solid #d1d5db', padding: '6px', fontSize: '11px', fontWeight: 'bold', textAlign: 'left', width: '10%' }}>
                      Processus
                    </th>
                    <th style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#e5e7eb', borderRight: '1px solid #d1d5db', padding: '6px', fontSize: '11px', fontWeight: 'bold', textAlign: 'left', width: '12%' }}>
                      Actif
                    </th>
                    <th style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#e5e7eb', borderRight: '1px solid #d1d5db', padding: '6px', fontSize: '11px', fontWeight: 'bold', textAlign: 'center', width: '7%' }}>
                      Type
                    </th>
                    <th style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#e5e7eb', borderRight: '1px solid #d1d5db', padding: '6px', fontSize: '11px', fontWeight: 'bold', textAlign: 'left', width: '15%' }}>
                      Scénario
                    </th>
                    <th style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#e5e7eb', borderRight: '1px solid #d1d5db', padding: '6px', fontSize: '11px', fontWeight: 'bold', textAlign: 'center', width: '7%' }}>
                      Vulnérabilité
                    </th>
                    <th style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#e5e7eb', borderRight: '1px solid #d1d5db', padding: '6px', fontSize: '11px', fontWeight: 'bold', textAlign: 'left', width: '10%' }}>
                      Composant
                    </th>
                    <th style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#e5e7eb', borderRight: '1px solid #d1d5db', padding: '6px', fontSize: '11px', fontWeight: 'bold', textAlign: 'center', width: '6%' }}>
                      Impact Financier
                    </th>
                    <th style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#e5e7eb', borderRight: '1px solid #d1d5db', padding: '6px', fontSize: '11px', fontWeight: 'bold', textAlign: 'center', width: '6%' }}>
                      Impact Opérationnel
                    </th>
                    <th style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#e5e7eb', borderRight: '1px solid #d1d5db', padding: '6px', fontSize: '11px', fontWeight: 'bold', textAlign: 'center', width: '6%' }}>
                      Impact Réputation
                    </th>
                    <th style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#e5e7eb', borderRight: '1px solid #d1d5db', padding: '6px', fontSize: '11px', fontWeight: 'bold', textAlign: 'center', width: '6%' }}>
                      Impact Environnement
                    </th>
                    <th style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#e5e7eb', borderRight: '1px solid #d1d5db', padding: '6px', fontSize: '11px', fontWeight: 'bold', textAlign: 'center', width: '5%' }}>
                      Impact Final
                    </th>
                    <th style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#e5e7eb', borderRight: '1px solid #d1d5db', padding: '6px', fontSize: '11px', fontWeight: 'bold', textAlign: 'center', width: '6%' }}>
                      Probabilité
                    </th>
                    <th style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#e5e7eb', borderRight: '1px solid #d1d5db', padding: '6px', fontSize: '11px', fontWeight: 'bold', textAlign: 'center', width: '6%' }}>
                      Niveau Risque
                    </th>
                    <th style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#e5e7eb', borderRight: '1px solid #d1d5db', padding: '6px', fontSize: '11px', fontWeight: 'bold', textAlign: 'left', width: '12%' }}>
                      Recommandation
                    </th>
                    <th style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#e5e7eb', padding: '6px', fontSize: '11px', fontWeight: 'bold', textAlign: 'center', width: '5%' }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {(() => {
                    // Grouper les évaluations par processus
                    const groupedByProcess = riskAssessments.reduce((acc, assessment) => {
                      if (!acc[assessment.processus]) {
                        acc[assessment.processus] = [];
                      }
                      acc[assessment.processus].push(assessment);
                      return acc;
                    }, {} as Record<string, typeof riskAssessments>);

                    return Object.entries(groupedByProcess).map(([processName, assessments]) => (
                      <React.Fragment key={processName}>
                        {/* En-tête du processus */}
                        <tr className="bg-gray-100 border-b border-gray-200">
                          <td className="p-2 bg-gray-100 border-r border-gray-200">
                            <h3 className="font-bold text-xs text-gray-700">{processName}</h3>
                            <p className="text-xs text-gray-500">{assessments.length} actif(s)</p>
                          </td>
                          <td className="p-1 bg-gray-100 border-r border-gray-200"></td>
                          <td className="p-1 bg-gray-100 border-r border-gray-200"></td>
                          <td className="p-1 bg-gray-100 border-r border-gray-200"></td>
                          <td className="p-1 bg-gray-100 border-r border-gray-200"></td>
                          <td className="p-1 bg-gray-100 border-r border-gray-200"></td>
                          <td className="p-1 bg-gray-100 border-r border-gray-200"></td>
                          <td className="p-1 bg-gray-100 border-r border-gray-200"></td>
                          <td className="p-1 bg-gray-100 border-r border-gray-200"></td>
                          <td className="p-1 bg-gray-100 border-r border-gray-200"></td>
                          <td className="p-1 bg-gray-100 border-r border-gray-200"></td>
                          <td className="p-1 bg-gray-100 border-r border-gray-200"></td>
                          <td className="p-1 bg-gray-100 border-r border-gray-200"></td>
                          <td className="p-1 bg-gray-100 border-r border-gray-200"></td>
                          <td className="p-1 bg-gray-100 text-center">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => addAssetToProcess(processName)}
                              className="h-5 px-2 text-xs bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
                            >
                              <Plus className="h-3 w-3 mr-1" />
                              + Actif
                            </Button>
                          </td>
                        </tr>

                        {/* Actifs du processus */}
                        {assessments.map((assessment, assetIndex) => {
                          const finalImpact = calculateFinalImpact(assessment);
                          const riskLevel = calculateRiskLevel(assessment);

                          return (
                            <tr key={assessment.id} className="hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100">
                              <td className="border-r border-gray-200 p-1 bg-gray-50" style={{ fontSize: '12px' }}>
                                {assetIndex === 0 ? (
                                  <span className="font-semibold text-gray-800">{processName}</span>
                                ) : (
                                  <span className="text-gray-600 ml-2">Actif {assetIndex + 1}</span>
                                )}
                              </td>
                              <td className="border-r border-gray-200 p-1">
                                <Input
                                  value={assessment.actifNom}
                                  onChange={(e) => {
                                    const updated = riskAssessments.map(r =>
                                      r.id === assessment.id ? { ...r, actifNom: e.target.value } : r
                                    );
                                    setRiskAssessments(updated);
                                  }}
                                  placeholder="Nom..."
                                  className="w-full h-6 border border-gray-200 rounded p-1 text-xs focus:border-[#FFC000] bg-white"
                                />
                              </td>
                              <td className="border-r border-gray-200 p-1">
                                <Select
                                  value={assessment.actifType}
                                  onValueChange={(value) => {
                                    const updated = riskAssessments.map(r =>
                                      r.id === assessment.id ? { ...r, actifType: value } : r
                                    );
                                    setRiskAssessments(updated);
                                  }}
                                >
                                  <SelectTrigger className="w-full h-6 border border-gray-200 rounded text-xs focus:border-[#FFC000] bg-white">
                                    <SelectValue placeholder="Type" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="software">software</SelectItem>
                                    <SelectItem value="hardware">hardware</SelectItem>
                                    <SelectItem value="personne">personne</SelectItem>
                                    <SelectItem value="service">service</SelectItem>
                                    <SelectItem value="papier">papier</SelectItem>
                                  </SelectContent>
                                </Select>
                              </td>
                              <td className="border-r border-gray-200 p-1">
                                <Textarea
                                  value={assessment.scenario}
                                  onChange={(e) => {
                                    const updated = riskAssessments.map(r =>
                                      r.id === assessment.id ? { ...r, scenario: e.target.value } : r
                                    );
                                    setRiskAssessments(updated);
                                  }}
                                  placeholder="Scénario..."
                                  className="h-8 w-full resize-none border border-gray-200 rounded p-1 text-xs focus:border-[#FFC000] bg-white"
                                />
                              </td>
                              <td className="border-r border-gray-200 p-1">
                                <Input
                                  value={assessment.vulnerabilityRef}
                                  onChange={(e) => {
                                    const updated = riskAssessments.map(r =>
                                      r.id === assessment.id ? { ...r, vulnerabilityRef: e.target.value } : r
                                    );
                                    setRiskAssessments(updated);
                                  }}
                                  placeholder="V001"
                                  className="w-full h-6 border border-gray-200 rounded p-1 text-xs focus:border-[#FFC000] bg-white"
                                />
                              </td>
                              <td className="border-r border-gray-200 p-1">
                                <Input
                                  value={assessment.impactedComponent}
                                  onChange={(e) => {
                                    const updated = riskAssessments.map(r =>
                                      r.id === assessment.id ? { ...r, impactedComponent: e.target.value } : r
                                    );
                                    setRiskAssessments(updated);
                                  }}
                                  placeholder="Composant"
                                  className="w-full h-6 border border-gray-200 rounded p-1 text-xs focus:border-[#FFC000] bg-white"
                                />
                              </td>
                              <td className="border-r border-gray-200 p-1 text-center">
                                <Select
                                  value={assessment.impactFinancier.toString()}
                                  onValueChange={(value) => {
                                    const updated = riskAssessments.map(r =>
                                      r.id === assessment.id ? { ...r, impactFinancier: parseInt(value) } : r
                                    );
                                    setRiskAssessments(updated);
                                  }}
                                >
                                  <SelectTrigger className={`w-full h-6 border border-gray-200 rounded text-xs focus:border-[#FFC000] ${
                                    assessment.impactFinancier >= 5 ? 'bg-rose-50 text-rose-700' :
                                    assessment.impactFinancier >= 4 ? 'bg-amber-50 text-amber-700' :
                                    assessment.impactFinancier >= 3 ? 'bg-gray-50 text-gray-700' :
                                    assessment.impactFinancier >= 2 ? 'bg-emerald-50 text-emerald-700' :
                                    'bg-emerald-25 text-emerald-600'
                                  }`}>
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="1" className="text-emerald-600 hover:bg-emerald-50">1 - Très Faible</SelectItem>
                                    <SelectItem value="2" className="text-emerald-600 hover:bg-emerald-50">2 - Faible</SelectItem>
                                    <SelectItem value="3" className="text-gray-600 hover:bg-gray-50">3 - Modéré</SelectItem>
                                    <SelectItem value="4" className="text-amber-600 hover:bg-amber-50">4 - Élevé</SelectItem>
                                    <SelectItem value="5" className="text-rose-600 hover:bg-rose-50">5 - Très Élevé</SelectItem>
                                  </SelectContent>
                                </Select>
                              </td>
                              <td className="border-r border-gray-200 p-1 text-center">
                                <Select
                                  value={assessment.impactOperationnel.toString()}
                                  onValueChange={(value) => {
                                    const updated = riskAssessments.map(r =>
                                      r.id === assessment.id ? { ...r, impactOperationnel: parseInt(value) } : r
                                    );
                                    setRiskAssessments(updated);
                                  }}
                                >
                                  <SelectTrigger className={`w-full h-6 border border-gray-200 rounded text-xs focus:border-[#FFC000] ${
                                    assessment.impactOperationnel >= 5 ? 'bg-rose-50 text-rose-700' :
                                    assessment.impactOperationnel >= 4 ? 'bg-amber-50 text-amber-700' :
                                    assessment.impactOperationnel >= 3 ? 'bg-gray-50 text-gray-700' :
                                    assessment.impactOperationnel >= 2 ? 'bg-emerald-50 text-emerald-700' :
                                    'bg-emerald-25 text-emerald-600'
                                  }`}>
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="1" className="text-emerald-600 hover:bg-emerald-50">1 - Très Faible</SelectItem>
                                    <SelectItem value="2" className="text-emerald-600 hover:bg-emerald-50">2 - Faible</SelectItem>
                                    <SelectItem value="3" className="text-gray-600 hover:bg-gray-50">3 - Modéré</SelectItem>
                                    <SelectItem value="4" className="text-amber-600 hover:bg-amber-50">4 - Élevé</SelectItem>
                                    <SelectItem value="5" className="text-rose-600 hover:bg-rose-50">5 - Très Élevé</SelectItem>
                                  </SelectContent>
                                </Select>
                              </td>
                              <td className="border-r border-gray-200 p-1 text-center">
                                <Select
                                  value={assessment.impactReputation.toString()}
                                  onValueChange={(value) => {
                                    const updated = riskAssessments.map(r =>
                                      r.id === assessment.id ? { ...r, impactReputation: parseInt(value) } : r
                                    );
                                    setRiskAssessments(updated);
                                  }}
                                >
                                  <SelectTrigger className={`w-full h-6 border border-gray-200 rounded text-xs focus:border-[#FFC000] ${
                                    assessment.impactReputation >= 5 ? 'bg-rose-50 text-rose-700' :
                                    assessment.impactReputation >= 4 ? 'bg-amber-50 text-amber-700' :
                                    assessment.impactReputation >= 3 ? 'bg-gray-50 text-gray-700' :
                                    assessment.impactReputation >= 2 ? 'bg-emerald-50 text-emerald-700' :
                                    'bg-emerald-25 text-emerald-600'
                                  }`}>
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="1" className="text-emerald-600 hover:bg-emerald-50">1 - Très Faible</SelectItem>
                                    <SelectItem value="2" className="text-emerald-600 hover:bg-emerald-50">2 - Faible</SelectItem>
                                    <SelectItem value="3" className="text-gray-600 hover:bg-gray-50">3 - Modéré</SelectItem>
                                    <SelectItem value="4" className="text-amber-600 hover:bg-amber-50">4 - Élevé</SelectItem>
                                    <SelectItem value="5" className="text-rose-600 hover:bg-rose-50">5 - Très Élevé</SelectItem>
                                  </SelectContent>
                                </Select>
                              </td>
                              <td className="border-r border-gray-200 p-1 text-center">
                                <Select
                                  value={assessment.impactEnvironnement.toString()}
                                  onValueChange={(value) => {
                                    const updated = riskAssessments.map(r =>
                                      r.id === assessment.id ? { ...r, impactEnvironnement: parseInt(value) } : r
                                    );
                                    setRiskAssessments(updated);
                                  }}
                                >
                                  <SelectTrigger className={`w-full h-6 border border-gray-200 rounded text-xs focus:border-[#FFC000] ${
                                    assessment.impactEnvironnement >= 5 ? 'bg-rose-50 text-rose-700' :
                                    assessment.impactEnvironnement >= 4 ? 'bg-amber-50 text-amber-700' :
                                    assessment.impactEnvironnement >= 3 ? 'bg-gray-50 text-gray-700' :
                                    assessment.impactEnvironnement >= 2 ? 'bg-emerald-50 text-emerald-700' :
                                    'bg-emerald-25 text-emerald-600'
                                  }`}>
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="1" className="text-emerald-600 hover:bg-emerald-50">1 - Très Faible</SelectItem>
                                    <SelectItem value="2" className="text-emerald-600 hover:bg-emerald-50">2 - Faible</SelectItem>
                                    <SelectItem value="3" className="text-gray-600 hover:bg-gray-50">3 - Modéré</SelectItem>
                                    <SelectItem value="4" className="text-amber-600 hover:bg-amber-50">4 - Élevé</SelectItem>
                                    <SelectItem value="5" className="text-rose-600 hover:bg-rose-50">5 - Très Élevé</SelectItem>
                                  </SelectContent>
                                </Select>
                              </td>
                              <td className="border-r border-gray-200 p-1 text-center bg-white">
                                <Badge
                                  variant={
                                    finalImpact >= 5 ? "destructive" :
                                    finalImpact >= 4 ? "default" :
                                    finalImpact >= 3 ? "secondary" : "outline"
                                  }
                                  className="text-xs px-1 py-0"
                                >
                                  {finalImpact}
                                </Badge>
                              </td>
                              <td className="border-r border-gray-200 p-1 text-center">
                                <Select
                                  value={assessment.probabilite.toString()}
                                  onValueChange={(value) => {
                                    const updated = riskAssessments.map(r =>
                                      r.id === assessment.id ? { ...r, probabilite: parseInt(value) } : r
                                    );
                                    setRiskAssessments(updated);
                                  }}
                                >
                                  <SelectTrigger className={`w-full h-6 border border-gray-200 rounded text-xs focus:border-[#FFC000] ${
                                    assessment.probabilite >= 5 ? 'bg-rose-50 text-rose-700' :
                                    assessment.probabilite >= 4 ? 'bg-amber-50 text-amber-700' :
                                    assessment.probabilite >= 3 ? 'bg-gray-50 text-gray-700' :
                                    assessment.probabilite >= 2 ? 'bg-emerald-50 text-emerald-700' :
                                    'bg-emerald-25 text-emerald-600'
                                  }`}>
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="1" className="text-emerald-600 hover:bg-emerald-50">1 - Très Rare</SelectItem>
                                    <SelectItem value="2" className="text-emerald-600 hover:bg-emerald-50">2 - Rare</SelectItem>
                                    <SelectItem value="3" className="text-gray-600 hover:bg-gray-50">3 - Possible</SelectItem>
                                    <SelectItem value="4" className="text-amber-600 hover:bg-amber-50">4 - Probable</SelectItem>
                                    <SelectItem value="5" className="text-rose-600 hover:bg-rose-50">5 - Très Probable</SelectItem>
                                  </SelectContent>
                                </Select>
                              </td>
                              <td className="border-r border-gray-200 p-1 text-center bg-white">
                                <Badge
                                  variant={
                                    riskLevel >= 20 ? "destructive" :
                                    riskLevel >= 15 ? "default" :
                                    riskLevel >= 10 ? "secondary" :
                                    riskLevel >= 5 ? "outline" : "outline"
                                  }
                                  className="text-xs px-1 py-0"
                                >
                                  {riskLevel}
                                </Badge>
                              </td>
                              <td className="border-r border-gray-200 p-1">
                                <Textarea
                                  value={assessment.recommendation}
                                  onChange={(e) => {
                                    const updated = riskAssessments.map(r =>
                                      r.id === assessment.id ? { ...r, recommendation: e.target.value } : r
                                    );
                                    setRiskAssessments(updated);
                                  }}
                                  placeholder="Recommandation"
                                  className="h-8 w-full resize-none border border-gray-200 rounded p-1 text-xs focus:border-[#FFC000] bg-white"
                                />
                              </td>
                              <td className="p-1 text-center bg-white">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeAsset(assessment.id)}
                                  className="h-6 w-6 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                                >
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              </td>
                            </tr>
                          );
                        })}
                      </React.Fragment>
                    ));
                  })()}
                </tbody>
              </Table>
            </div>

            {/* Matrice de Risque */}
            {riskAssessments.length > 0 && (
              <div className="mt-8 space-y-6">
                {/* Risk Score Matrix */}
                <Card className="border border-gray-200 shadow-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-bold text-center bg-gray-200 text-gray-700 py-3 rounded-lg">
                      Risk Score
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr>
                            <th className="border border-gray-300 bg-gray-100 p-3 text-sm font-bold text-gray-700">Impact/Probabilité</th>
                            <th className="border border-gray-300 bg-gray-100 p-3 text-sm font-bold text-gray-700">1</th>
                            <th className="border border-gray-300 bg-gray-100 p-3 text-sm font-bold text-gray-700">2</th>
                            <th className="border border-gray-300 bg-gray-100 p-3 text-sm font-bold text-gray-700">3</th>
                            <th className="border border-gray-300 bg-gray-100 p-3 text-sm font-bold text-gray-700">4</th>
                            <th className="border border-gray-300 bg-gray-100 p-3 text-sm font-bold text-gray-700">5</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 bg-gray-200 p-2 text-sm font-bold text-center">5</td>
                            <td className="border border-gray-300 bg-emerald-200 p-2 text-center text-sm font-bold">5</td>
                            <td className="border border-gray-300 bg-gray-200 p-2 text-center text-sm font-bold">10</td>
                            <td className="border border-gray-300 bg-amber-200 p-2 text-center text-sm font-bold">15</td>
                            <td className="border border-gray-300 bg-rose-200 p-2 text-center text-sm font-bold">20</td>
                            <td className="border border-gray-300 bg-rose-300 p-2 text-center text-sm font-bold text-white">25</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 bg-gray-200 p-2 text-sm font-bold text-center">4</td>
                            <td className="border border-gray-300 bg-emerald-200 p-2 text-center text-sm font-bold">4</td>
                            <td className="border border-gray-300 bg-gray-200 p-2 text-center text-sm font-bold">8</td>
                            <td className="border border-gray-300 bg-amber-200 p-2 text-center text-sm font-bold">12</td>
                            <td className="border border-gray-300 bg-rose-200 p-2 text-center text-sm font-bold">16</td>
                            <td className="border border-gray-300 bg-rose-300 p-2 text-center text-sm font-bold text-white">20</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 bg-gray-200 p-2 text-sm font-bold text-center">3</td>
                            <td className="border border-gray-300 bg-emerald-200 p-2 text-center text-sm font-bold">3</td>
                            <td className="border border-gray-300 bg-gray-200 p-2 text-center text-sm font-bold">6</td>
                            <td className="border border-gray-300 bg-gray-300 p-2 text-center text-sm font-bold">9</td>
                            <td className="border border-gray-300 bg-amber-200 p-2 text-center text-sm font-bold">12</td>
                            <td className="border border-gray-300 bg-rose-200 p-2 text-center text-sm font-bold">15</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 bg-gray-200 p-2 text-sm font-bold text-center">2</td>
                            <td className="border border-gray-300 bg-emerald-200 p-2 text-center text-sm font-bold">2</td>
                            <td className="border border-gray-300 bg-emerald-200 p-2 text-center text-sm font-bold">4</td>
                            <td className="border border-gray-300 bg-gray-200 p-2 text-center text-sm font-bold">6</td>
                            <td className="border border-gray-300 bg-gray-300 p-2 text-center text-sm font-bold">8</td>
                            <td className="border border-gray-300 bg-amber-200 p-2 text-center text-sm font-bold">10</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 bg-gray-200 p-2 text-sm font-bold text-center">1</td>
                            <td className="border border-gray-300 bg-emerald-200 p-2 text-center text-sm font-bold">1</td>
                            <td className="border border-gray-300 bg-emerald-200 p-2 text-center text-sm font-bold">2</td>
                            <td className="border border-gray-300 bg-emerald-200 p-2 text-center text-sm font-bold">3</td>
                            <td className="border border-gray-300 bg-gray-200 p-2 text-center text-sm font-bold">4</td>
                            <td className="border border-gray-300 bg-gray-300 p-2 text-center text-sm font-bold">5</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-sm bg-gray-100 text-gray-700 p-3 rounded-lg font-medium border border-gray-200">
                        Risque Résiduel Général = (Impact x Probabilité) = (Évaluation du degré de contrôle/25)) x (5 x 2 = (Impact x Probabilité)))
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Niveaux de risque */}
                <Card className="border border-gray-200 shadow-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-bold text-center bg-gray-200 text-gray-700 py-3 rounded-lg">
                      Niveaux de risque
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-sm mb-3 bg-gray-100 text-gray-700 p-3 text-center rounded-lg border border-gray-200">Niveaux de risque</h4>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-emerald-200 border border-gray-300"></div>
                            <span className="text-xs">Risque Négligeable</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-gray-200 border border-gray-300"></div>
                            <span className="text-xs">Risque Mineur</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-amber-200 border border-gray-300"></div>
                            <span className="text-xs">Risque Majeur</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-rose-200 border border-gray-300"></div>
                            <span className="text-xs">Risque Élevé</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-rose-300 border border-gray-300"></div>
                            <span className="text-xs">Risque Critique</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm mb-3 bg-gray-100 text-gray-700 p-3 text-center rounded-lg border border-gray-200">Décisions</h4>
                        <div className="space-y-3 text-sm">
                          <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                            <p className="font-semibold text-gray-700">Acceptable Risque</p>
                            <p className="text-gray-600 text-xs mt-1">Risque négligeable et mineur</p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                            <p className="font-semibold text-gray-700">Tolérable</p>
                            <p className="text-gray-600 text-xs mt-1">Risque majeur à surveiller</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Évaluation du design du contrôle */}
                <Card className="border border-gray-200 shadow-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-bold text-center bg-gray-200 text-gray-700 py-3 rounded-lg">
                      Évaluation du design du contrôle
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr>
                            <th className="border border-gray-300 bg-gray-100 p-3 text-sm font-bold text-gray-700">Score</th>
                            <th className="border border-gray-300 bg-gray-100 p-3 text-sm font-bold text-gray-700">Rating</th>
                            <th className="border border-gray-300 bg-gray-100 p-3 text-sm font-bold text-gray-700">Action</th>
                            <th className="border border-gray-300 bg-gray-100 p-3 text-sm font-bold text-gray-700">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="hover:bg-gray-50">
                            <td className="border border-gray-300 p-3 text-center text-sm font-bold bg-gray-50">5</td>
                            <td className="border border-gray-300 p-3 text-center text-sm text-gray-700">Très élevé</td>
                            <td className="border border-gray-300 p-3 text-center text-sm text-gray-700">Effectif</td>
                            <td className="border border-gray-300 p-3 text-xs text-gray-600">Le dispositif actuel qui lui contrôle et/ou lui activité de gestion sont en place et fonctionnent correctement.</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="border border-gray-300 p-3 text-center text-sm font-bold bg-gray-50">4</td>
                            <td className="border border-gray-300 p-3 text-center text-sm text-gray-700">Élevé</td>
                            <td className="border border-gray-300 p-3 text-center text-sm text-gray-700">Opérationnel, fonctionnement limité</td>
                            <td className="border border-gray-300 p-3 text-xs text-gray-600">Le dispositif est d'une que lui contrôle et/ou lui activité de gestion sont en place et fonctionnent correctement, avec des responsabilités d'amélioration identifiées.</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="border border-gray-300 p-3 text-center text-sm font-bold bg-gray-50">3</td>
                            <td className="border border-gray-300 p-3 text-center text-sm text-gray-700">Modéré</td>
                            <td className="border border-gray-300 p-3 text-center text-sm text-gray-700">Opérationnel, fonctionnement modéré</td>
                            <td className="border border-gray-300 p-3 text-xs text-gray-600">Le dispositif est d'une que lui contrôle lui et/ou lui activité de gestion sont en place et fonctionnent correctement, avec des responsabilités d'amélioration identifiées.</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="border border-gray-300 p-3 text-center text-sm font-bold bg-gray-50">2</td>
                            <td className="border border-gray-300 p-3 text-center text-sm text-gray-700">Faible</td>
                            <td className="border border-gray-300 p-3 text-center text-sm text-gray-700">Opérationnel, fonctionnement insuffisant</td>
                            <td className="border border-gray-300 p-3 text-xs text-gray-600">Le dispositif actuel qui lui contrôle lui et/ou lui activité de gestion sont en place mais fonctionnent de façon insuffisante.</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="border border-gray-300 p-3 text-center text-sm font-bold bg-gray-50">1</td>
                            <td className="border border-gray-300 p-3 text-center text-sm text-gray-700">Très faible</td>
                            <td className="border border-gray-300 p-3 text-center text-sm text-gray-700">Opérationnel, fonctionnement critique</td>
                            <td className="border border-gray-300 p-3 text-xs text-gray-600">Le dispositif est d'une que lui contrôle et/ou lui activité de gestion sont inexistants ou ne fonctionnent pas de façon adéquate ou fonctionnement critique.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>


              </div>
            )}

          </CardContent>
        </Card>
      )}
    </div>
  );
}
