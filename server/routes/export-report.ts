import { Router } from "express";
import ExcelJS from "exceljs";
import { storage } from "../storage";

const router = Router();

router.get("/:id", async (req, res) => {
  try {
    const missionId = parseInt(req.params.id);
    if (isNaN(missionId)) {
      return res.status(400).json({ message: "Invalid mission ID" });
    }

    // Récupérer la mission et ses données liées
    const mission = await storage.getMission(missionId);
    if (!mission) {
      return res.status(404).json({ message: "Mission not found" });
    }

    const contacts = await storage.getContactsByMissionId(missionId);
    const risks = await storage.getRisksByMissionId(missionId);
    const recommendations = await storage.getRecommendationsByMissionId(missionId);

    // Créer un nouveau workbook Excel
    const workbook = new ExcelJS.Workbook();
    
    // Feuille 0: Page de couverture
    const coverSheet = workbook.addWorksheet("Page de couverture");
    
    // Configuration de la page de couverture
    coverSheet.columns = [
      { header: "Élément", key: "element", width: 40 },
      { header: "Valeur", key: "value", width: 60 }
    ];
    
    // Titre principal
    coverSheet.addRow({ element: "TITRE DU RAPPORT", value: "Rapport d'Audit de la Sécurité du Système d'Information" });
    coverSheet.addRow({ element: "", value: "" }); // Ligne vide
    
    // Informations de l'organisme audité
    coverSheet.addRow({ element: "ORGANISME AUDITÉ", value: mission.companyName || "Non spécifié" });
    coverSheet.addRow({ element: "Type d'entreprise", value: mission.companyType || "Non spécifié" });
    coverSheet.addRow({ element: "Numéro d'enregistrement", value: mission.registrationNumber || "Non spécifié" });
    coverSheet.addRow({ element: "Adresse", value: mission.address || "Non spécifié" });
    coverSheet.addRow({ element: "Secteur d'activité", value: mission.activitySector || "Non spécifié" });
    coverSheet.addRow({ element: "", value: "" }); // Ligne vide
    
    // Informations de l'auditeur
    coverSheet.addRow({ element: "EXPERT AUDITEUR", value: mission.auditorName || "Non spécifié" });
    coverSheet.addRow({ element: "", value: "" }); // Ligne vide
    
    // Informations du document
    coverSheet.addRow({ element: "INFORMATIONS DU DOCUMENT", value: "" });
    coverSheet.addRow({ element: "Version du document", value: mission.documentVersion || "v1.0" });
    coverSheet.addRow({ element: "Date du document", value: mission.documentDate ? new Date(mission.documentDate).toLocaleDateString('fr-FR') : new Date().toLocaleDateString('fr-FR') });
    coverSheet.addRow({ element: "Diffusion", value: mission.documentDiffusion || "Document Confidentiel" });
    coverSheet.addRow({ element: "", value: "" }); // Ligne vide
    
    // Statut de la mission
    coverSheet.addRow({ element: "STATUT DE LA MISSION", value: "" });
    coverSheet.addRow({ element: "ID Mission", value: mission.id });
    coverSheet.addRow({ element: "Titre de la mission", value: mission.title });
    coverSheet.addRow({ element: "Statut", value: mission.status || "Brouillon" });
    coverSheet.addRow({ element: "Progression", value: `${mission.progress || 0}%` });
    coverSheet.addRow({ element: "Type d'audit", value: mission.auditType || "Non spécifié" });
    coverSheet.addRow({ element: "Objectif de la mission", value: mission.missionObjective || "Non spécifié" });
    
    // Styliser la page de couverture
    coverSheet.getRow(1).font = { bold: true, size: 16 };
    coverSheet.getRow(1).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FF4CAF50' } // Vert
    };
    coverSheet.getRow(1).font = { bold: true, size: 16, color: { argb: 'FFFFFFFF' } };
    
    // Styliser les sous-titres
    [3, 9, 11, 17].forEach(rowIndex => {
      if (coverSheet.getRow(rowIndex)) {
        coverSheet.getRow(rowIndex).font = { bold: true, size: 14 };
        coverSheet.getRow(rowIndex).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FFE8F5E8' } // Vert clair
        };
      }
    });

    // Feuille 1: Avant propos
    const avantProposSheet = workbook.addWorksheet("Avant propos");
    avantProposSheet.addRow({ element: "AVANT PROPOS", value: "Section à compléter" });
    
    // Feuille 2: Cadre de la mission
    const cadreSheet = workbook.addWorksheet("Cadre de la mission");
    cadreSheet.addRow({ element: "CADRE DE LA MISSION", value: "Section à compléter" });
    
    // Feuille 3: Termes et définitions
    const termesSheet = workbook.addWorksheet("Termes et définitions");
    termesSheet.addRow({ element: "TERMES ET DÉFINITIONS", value: "Section à compléter" });
    
    // Feuille 4: Références
    const referencesSheet = workbook.addWorksheet("Références");
    referencesSheet.addRow({ element: "RÉFÉRENCES", value: "Section à compléter" });
    
    // Feuille 5: Présentation organisation
    const organisationSheet = workbook.addWorksheet("Présentation organisation");
    organisationSheet.addRow({ element: "PRÉSENTATION DE L'ORGANISATION", value: "Section à compléter" });
    
    // Feuille 6: Champ d'audit
    const champSheet = workbook.addWorksheet("Champ d'audit");
    champSheet.addRow({ element: "CHAMP D'AUDIT", value: "Section à compléter" });
    
    // Feuille 7: Méthodologie d'audit
    const methodologieSheet = workbook.addWorksheet("Méthodologie d'audit");
    methodologieSheet.addRow({ element: "MÉTHODOLOGIE D'AUDIT", value: "Section à compléter" });
    
    // Feuille 8: Synthèse des résultats
    const syntheseSheet = workbook.addWorksheet("Synthèse des résultats");
    syntheseSheet.addRow({ element: "SYNTHÈSE DES RÉSULTATS DE L'AUDIT", value: "Section à compléter" });
    
    // Feuille 9: Présentation détaillée
    const detailSheet = workbook.addWorksheet("Présentation détaillée");
    detailSheet.addRow({ element: "PRÉSENTATION DÉTAILLÉE DES RÉSULTATS", value: "Section à compléter" });
    
    // Feuille 10: Appréciation des risques
    const risquesSheet = workbook.addWorksheet("Appréciation des risques");
    risquesSheet.columns = [
      { header: "Type de risque", key: "riskType", width: 20 },
      { header: "Probabilité", key: "probability", width: 15 },
      { header: "Impact", key: "impact", width: 15 },
      { header: "Description", key: "description", width: 40 },
      { header: "Atténuation", key: "mitigation", width: 40 }
    ];
    
    risks.forEach(risk => {
      risquesSheet.addRow({
        riskType: risk.riskType,
        probability: risk.probability,
        impact: risk.impact,
        description: risk.description,
        mitigation: risk.mitigation
      });
    });
    
    // Feuille 11: Plan d'action
    const planSheet = workbook.addWorksheet("Plan d'action");
    planSheet.columns = [
      { header: "Description", key: "description", width: 50 },
      { header: "Priorité", key: "priority", width: 15 },
      { header: "Responsable", key: "responsible", width: 20 },
      { header: "Échéance", key: "deadline", width: 15 }
    ];
    
    recommendations.forEach(rec => {
      planSheet.addRow({
        description: rec.description,
        priority: rec.priority,
        responsible: rec.responsible,
        deadline: rec.deadline
      });
    });

    // Styliser toutes les feuilles
    [avantProposSheet, cadreSheet, termesSheet, referencesSheet, organisationSheet, 
     champSheet, methodologieSheet, syntheseSheet, detailSheet, risquesSheet, planSheet].forEach(sheet => {
      if (sheet.rowCount > 0) {
        sheet.getRow(1).font = { bold: true };
        sheet.getRow(1).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FFE8F5E8' }
        };
      }
    });

    // Définir les headers de réponse
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `attachment; filename=rapport.xlsx`);
    
    // Envoyer le fichier
    await workbook.xlsx.write(res);
    res.end();
    
  } catch (error) {
    console.error('Erreur lors de la génération du rapport Excel:', error);
    res.status(500).json({ 
      message: "Erreur lors de la génération du rapport Excel",
      error: error instanceof Error ? error.message : String(error)
    });
  }
});

export default router; 