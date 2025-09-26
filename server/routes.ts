import { Router, json, urlencoded, type Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMissionSchema, insertContactSchema, insertRiskSchema, insertRecommendationSchema } from "@shared/schema";
import { ExcelApplicationReplica } from "./utils/excel-app-replica";
import { generatePDF } from "./utils/pdf";
import chatbotRoutes from "./routes/chatbot";
import exportRoutes from "./routes/export";
import reportRoutes from "./routes/export-report";

export async function registerRoutes(app: Express): Promise<Server> {
  const router = Router();
  app.use("/api", router);

  // Middleware for parsing JSON bodies
  router.use(json());
  router.use(urlencoded({ extended: true }));

  // Register chatbot routes
  router.use("/chatbot", chatbotRoutes);
  
  // Register export routes
  router.use("/export", exportRoutes);
  
  // Register report routes
  router.use("/report", reportRoutes);
  
  // Missions endpoints
  router.get("/missions", async (_req, res) => {
    try {
      const missions = await storage.getMissions();
      res.json(missions);
    } catch (error) {
      console.error('Detailed error in GET /missions:', error);
      res.status(500).json({
        message: "Failed to fetch missions",
        error: error instanceof Error ? error.message : String(error)
      });
    }
  });
  
  router.get("/missions/:id", async (req, res) => {
    try {
      const missionId = parseInt(req.params.id);
      if (isNaN(missionId)) {
        return res.status(400).json({ message: "Invalid mission ID" });
      }
      
      const mission = await storage.getMission(missionId);
      if (!mission) {
        return res.status(404).json({ message: "Mission not found" });
      }
      
      // Get related data
      const contacts = await storage.getContactsByMissionId(missionId);
      const risks = await storage.getRisksByMissionId(missionId);
      const recommendations = await storage.getRecommendationsByMissionId(missionId);
      
      res.json({
        ...mission,
        contacts,
        risks,
        recommendations
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch mission", error });
    }
  });
  
  router.post("/missions", async (req, res) => {
    try {
      // Préparer les données avec des valeurs par défaut
      const dataToValidate = { ...req.body };
      if (!dataToValidate.title || dataToValidate.title.trim() === '') {
        dataToValidate.title = 'Mission sans titre';
      }
      if (!dataToValidate.companyName || dataToValidate.companyName.trim() === '') {
        dataToValidate.companyName = 'Entreprise non spécifiée';
      }

      // Filtrer les champs non supportés par la base de données
      const supportedFields = [
        'title', 'companyName', 'companyType', 'registrationNumber', 'creationDate',
        'address', 'activitySector', 'confidentialityOptions', 'versionHistory',
        'auditorContacts', 'auditedOrgContacts', 'legalFrameworkText',
        'legalFrameworkReference', 'auditType', 'missionObjective',
        'isoPrepCertification', 'isoStandards', 'auditLimitations', 'orgName',
        'orgLogo', 'orgBusinessActivity', 'orgCreationDate', 'orgContactInfo',
        'orgWebsite', 'businessProcesses', 'securityRequirements', 'ciaMatrix',
        'geographicPerimeter', 'operationsImpact', 'sensitiveData',
        'infrastructureComplexity', 'samplingCriteria', 'systemsDescription',
        'siteSamplingEvaluations', 'applications', 'networkInfrastructure',
        'workstations', 'servers', 'securityDomains', 'securityMeasuresMaturity',
        'auditTools', 'auditChecklists', 'auditTeam', 'organizationTeam',
        'missionPlanning', 'annualRevenue', 'profitMargin', 'totalAssets',
        'totalDebts', 'financialRatios', 'financialComments', 'complianceStatus',
        'governanceStructure', 'observations', 'followUpDate', 'followUpResponsible',
        'followUpDetails', 'status', 'progress'
      ];

      const filteredDataToValidate: any = {};
      supportedFields.forEach(field => {
        if (dataToValidate.hasOwnProperty(field)) {
          filteredDataToValidate[field] = (dataToValidate as any)[field];
        }
      });

      console.log('Données filtrées pour création:', Object.keys(filteredDataToValidate));

      const validationResult = insertMissionSchema.safeParse(filteredDataToValidate);
      if (!validationResult.success) {
        console.log('Erreurs de validation:', validationResult.error.issues);
        return res.status(400).json({ message: "Invalid mission data", errors: validationResult.error.issues });
      }

      const mission = await storage.createMission(validationResult.data);
      
      // Handle contacts if provided
      if (req.body.contacts && Array.isArray(req.body.contacts)) {
        for (const contact of req.body.contacts) {
          const contactData = {
            ...contact,
            missionId: mission.id
          };
          const validContactData = insertContactSchema.safeParse(contactData);
          if (validContactData.success) {
            await storage.createContact(validContactData.data);
          }
        }
      }
      
      // Handle risks if provided
      if (req.body.risks && Array.isArray(req.body.risks)) {
        for (const risk of req.body.risks) {
          const riskData = {
            ...risk,
            missionId: mission.id
          };
          const validRiskData = insertRiskSchema.safeParse(riskData);
          if (validRiskData.success) {
            await storage.createRisk(validRiskData.data);
          }
        }
      }
      
      // Handle recommendations if provided
      if (req.body.recommendations && Array.isArray(req.body.recommendations)) {
        for (const recommendation of req.body.recommendations) {
          const recommendationData = {
            ...recommendation,
            missionId: mission.id
          };
          const validRecommendationData = insertRecommendationSchema.safeParse(recommendationData);
          if (validRecommendationData.success) {
            await storage.createRecommendation(validRecommendationData.data);
          }
        }
      }
      
      // Calculate and update mission progress
      const progress = await storage.calculateMissionProgress(mission.id);
      await storage.updateMission(mission.id, { progress });
      
      res.status(201).json(mission);
    } catch (error) {
      console.error('Erreur détaillée lors de la création:', error);
      res.status(500).json({
        message: "Failed to create mission",
        error: error instanceof Error ? error.message : String(error),
        details: error instanceof Error ? error.stack : undefined
      });
    }
  });
  
  router.put("/missions/:id", async (req, res) => {
    try {
      const missionId = parseInt(req.params.id);
      if (isNaN(missionId)) {
        return res.status(400).json({ message: "Invalid mission ID" });
      }

      const mission = await storage.getMission(missionId);
      if (!mission) {
        return res.status(404).json({ message: "Mission not found" });
      }

      // Préparer les données avec des valeurs par défaut si nécessaire
      const dataToUpdate = { ...req.body };
      if (!dataToUpdate.title || dataToUpdate.title.trim() === '') {
        dataToUpdate.title = mission.title || 'Mission sans titre';
      }
      if (!dataToUpdate.companyName || dataToUpdate.companyName.trim() === '') {
        dataToUpdate.companyName = mission.companyName || 'Entreprise non spécifiée';
      }

      // Filtrer les champs non supportés par la base de données
      const supportedFields = [
        'title', 'companyName', 'companyType', 'registrationNumber', 'creationDate',
        'address', 'activitySector', 'confidentialityOptions', 'versionHistory',
        'auditorContacts', 'auditedOrgContacts', 'legalFrameworkText',
        'legalFrameworkReference', 'auditType', 'missionObjective',
        'isoPrepCertification', 'isoStandards', 'auditLimitations', 'orgName',
        'orgLogo', 'orgBusinessActivity', 'orgCreationDate', 'orgContactInfo',
        'orgWebsite', 'businessProcesses', 'securityRequirements', 'ciaMatrix',
        'geographicPerimeter', 'operationsImpact', 'sensitiveData',
        'infrastructureComplexity', 'samplingCriteria', 'systemsDescription',
        'siteSamplingEvaluations', 'applications', 'networkInfrastructure',
        'workstations', 'servers', 'securityDomains', 'securityMeasuresMaturity',
        'auditTools', 'auditChecklists', 'auditTeam', 'organizationTeam',
        'missionPlanning', 'annualRevenue', 'profitMargin', 'totalAssets',
        'totalDebts', 'financialRatios', 'financialComments', 'complianceStatus',
        'governanceStructure', 'observations', 'followUpDate', 'followUpResponsible',
        'followUpDetails', 'status', 'progress'
      ];

      const filteredData: any = {};
      supportedFields.forEach(field => {
        if (dataToUpdate.hasOwnProperty(field)) {
          filteredData[field] = (dataToUpdate as any)[field];
        }
      });

      console.log('Données filtrées côté serveur:', Object.keys(filteredData));

      // Update mission data
      const updatedMission = await storage.updateMission(missionId, filteredData);
      
      // Handle contacts if provided
      if (req.body.contacts && Array.isArray(req.body.contacts)) {
        // Remove existing contacts
        await storage.deleteContactsByMissionId(missionId);
        
        // Add new contacts
        for (const contact of req.body.contacts) {
          const contactData = {
            ...contact,
            missionId
          };
          const validContactData = insertContactSchema.safeParse(contactData);
          if (validContactData.success) {
            await storage.createContact(validContactData.data);
          }
        }
      }
      
      // Handle risks if provided
      if (req.body.risks && Array.isArray(req.body.risks)) {
        // Remove existing risks
        await storage.deleteRisksByMissionId(missionId);
        
        // Add new risks
        for (const risk of req.body.risks) {
          const riskData = {
            ...risk,
            missionId
          };
          const validRiskData = insertRiskSchema.safeParse(riskData);
          if (validRiskData.success) {
            await storage.createRisk(validRiskData.data);
          }
        }
      }
      
      // Handle recommendations if provided
      if (req.body.recommendations && Array.isArray(req.body.recommendations)) {
        // Remove existing recommendations
        await storage.deleteRecommendationsByMissionId(missionId);
        
        // Add new recommendations
        for (const recommendation of req.body.recommendations) {
          const recommendationData = {
            ...recommendation,
            missionId
          };
          const validRecommendationData = insertRecommendationSchema.safeParse(recommendationData);
          if (validRecommendationData.success) {
            await storage.createRecommendation(validRecommendationData.data);
          }
        }
      }
      
      // Calculate and update mission progress
      const progress = await storage.calculateMissionProgress(missionId);
      await storage.updateMission(missionId, { progress });
      
      res.json(updatedMission);
    } catch (error) {
      console.error('Erreur détaillée lors de la mise à jour:', error);
      res.status(500).json({
        message: "Failed to update mission",
        error: error instanceof Error ? error.message : String(error),
        details: error instanceof Error ? error.stack : undefined
      });
    }
  });
  
  router.delete("/missions/:id", async (req, res) => {
    try {
      const missionId = parseInt(req.params.id);
      if (isNaN(missionId)) {
        return res.status(400).json({ message: "Invalid mission ID" });
      }
      
      const mission = await storage.getMission(missionId);
      if (!mission) {
        return res.status(404).json({ message: "Mission not found" });
      }
      
      const deleted = await storage.deleteMission(missionId);
      if (deleted) {
        res.status(204).end();
      } else {
        res.status(500).json({ message: "Failed to delete mission" });
      }
    } catch (error) {
      res.status(500).json({ message: "Failed to delete mission", error });
    }
  });

  // Delete all missions (pour les tests)
  router.delete("/missions/all", async (_req, res) => {
    try {
      await storage.clearAllMissions();
      res.json({ message: "All missions deleted successfully" });
    } catch (error) {
      console.error("Delete all missions error:", error);
      res.status(500).json({ message: "Failed to delete all missions", error });
    }
  });

  // Export to Excel
  router.get("/missions/:id/export/excel", async (req, res) => {
    try {
      console.log('📥 Demande d\'export Excel reçue');

      const missionId = parseInt(req.params.id);
      if (isNaN(missionId)) {
        console.log('❌ ID de mission invalide:', req.params.id);
        return res.status(400).json({ message: "Invalid mission ID" });
      }

      console.log('🔍 Recherche de la mission ID:', missionId);
      const mission = await storage.getMission(missionId);
      if (!mission) {
        console.log('❌ Mission non trouvée:', missionId);
        return res.status(404).json({ message: "Mission not found" });
      }

      console.log('✅ Mission trouvée:', mission.title);
      
      // Get related data
      console.log('📊 Récupération des données liées...');
      const contacts = await storage.getContactsByMissionId(missionId);
      const risks = await storage.getRisksByMissionId(missionId);
      const recommendations = await storage.getRecommendationsByMissionId(missionId);

      console.log('📈 Données récupérées:', {
        contacts: contacts.length,
        risks: risks.length,
        recommendations: recommendations.length
      });
      
      // Utiliser la nouvelle version complète avec toutes les sections
      const enrichedData = {
        ...mission,
        contacts,
        risks,
        recommendations,
        // Forcer l'export avancé
        exportType: 'advanced',
        sections: [
          'Page de couverture',
          'Avant propos',
          'Cadre de la mission',
          'Termes et définitions',
          'Références',
          'Présentation de l\'organisme audité',
          'Champ d\'audit',
          'Méthodologie d\'audit',
          'Synthèse des résultats de l\'audit',
          'Appréciation des risques',
          'Plan d\'action',
          'Dashboard'
        ],
        generatedAt: new Date().toISOString(),
        version: '2.0-Complete'
      };

      // Generate Excel file with APPLICATION REPLICA
      console.log('🔄 Génération du fichier Excel (RÉPLIQUE COMPLÈTE DE L\'APPLICATION)...');
      const excelGenerator = new ExcelApplicationReplica(enrichedData);
      const workbook = await excelGenerator.generateCompleteApplication();
      const excelBuffer = await workbook.xlsx.writeBuffer();
      
      
      // Set response headers with new filename (XLSM for macros support)
      const timestamp = new Date().toISOString().split('T')[0];
      const fileName = `Audit_Complet_${mission.title?.replace(/[^a-zA-Z0-9]/g, '_')}_${mission.id}_${timestamp}.xlsm`;

      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
      
      // Send the buffer
      console.log('📤 Envoi du fichier Excel au client...');
      res.send(excelBuffer);
      console.log('🎉 Export Excel terminé avec succès !');

    } catch (error) {
      console.error("❌ Erreur lors de l'export Excel:", error);

      // Log détaillé de l'erreur
      if (error instanceof Error) {
        console.error("Message d'erreur:", error.message);
        console.error("Stack trace:", error.stack);
      }

      res.status(500).json({
        message: "Failed to generate Excel file",
        error: error instanceof Error ? error.message : String(error),
        details: "Consultez les logs du serveur pour plus de détails"
      });
    }
  });

  // Export to Excel Advanced (version améliorée du générateur existant)
  router.get("/missions/:id/export/excel-advanced", async (req, res) => {
    try {
      const missionId = parseInt(req.params.id);
      if (isNaN(missionId)) {
        return res.status(400).json({ message: "Invalid mission ID" });
      }

      const mission = await storage.getMission(missionId);
      if (!mission) {
        return res.status(404).json({ message: "Mission not found" });
      }

      // Get related data
      const contacts = await storage.getContactsByMissionId(missionId);
      const risks = await storage.getRisksByMissionId(missionId);
      const recommendations = await storage.getRecommendationsByMissionId(missionId);

      // Utiliser le générateur Excel existant avec données enrichies
      const enrichedData = {
        ...mission,
        contacts,
        risks,
        recommendations,
        // Ajouter des métadonnées pour l'export avancé
        exportType: 'advanced',
        sections: [
          'Page de couverture',
          'Avant propos',
          'Cadre de la mission',
          'Termes et définitions',
          'Références',
          'Présentation de l\'organisme audité',
          'Champ d\'audit',
          'Méthodologie d\'audit',
          'Synthèse des résultats de l\'audit',
          'Appréciation des risques',
          'Plan d\'action',
          'Dashboard'
        ],
        generatedAt: new Date().toISOString(),
        version: '2.0-Advanced'
      };

      // Generate Excel file with enhanced data using new structure
      const generator = new ExcelApplicationReplica(enrichedData);
      const workbook = await generator.generateCompleteApplication();
      const excelBuffer = await workbook.xlsx.writeBuffer();

      // Set response headers with advanced filename
      const timestamp = new Date().toISOString().split('T')[0];
      const fileName = `Audit_Complet_${mission.title?.replace(/[^a-zA-Z0-9]/g, '_')}_${missionId}_${timestamp}.xlsx`;

      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
      res.send(excelBuffer);

    } catch (error) {
      console.error('Erreur génération Excel avancé:', error);
      res.status(500).json({
        message: "Failed to generate advanced Excel file",
        error: error instanceof Error ? error.message : String(error)
      });
    }
  });
  
  // Generate PDF
  router.get("/missions/:id/export/pdf", async (req, res) => {
    try {
      const missionId = parseInt(req.params.id);
      if (isNaN(missionId)) {
        return res.status(400).json({ message: "Invalid mission ID" });
      }
      
      const mission = await storage.getMission(missionId);
      if (!mission) {
        return res.status(404).json({ message: "Mission not found" });
      }
      
      // Get related data
      const contacts = await storage.getContactsByMissionId(missionId);
      const risks = await storage.getRisksByMissionId(missionId);
      const recommendations = await storage.getRecommendationsByMissionId(missionId);
      
      // Generate PDF
      const pdfBuffer = await generatePDF({
        ...mission,
        contacts,
        risks,
        recommendations
      });
      
      // Set response headers
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename=Rapport_Audit_${mission.id}.pdf`);
      
      // Send the buffer
      res.send(pdfBuffer);
    } catch (error) {
      console.error("PDF generation error:", error);
      res.status(500).json({ message: "Failed to generate PDF file", error });
    }
  });

  // Generate Word document (using PDF for now)
  router.get("/missions/:id/export/word", async (req, res) => {
    try {
      const missionId = parseInt(req.params.id);
      if (isNaN(missionId)) {
        return res.status(400).json({ message: "Invalid mission ID" });
      }
      
      const mission = await storage.getMission(missionId);
      if (!mission) {
        return res.status(404).json({ message: "Mission not found" });
      }
      
      // Get related data
      const contacts = await storage.getContactsByMissionId(missionId);
      const risks = await storage.getRisksByMissionId(missionId);
      const recommendations = await storage.getRecommendationsByMissionId(missionId);
      
      // Generate PDF (used as Word for now)
      const pdfBuffer = await generatePDF({
        ...mission,
        contacts,
        risks,
        recommendations
      });
      
      // Set response headers for Word document download
      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
      res.setHeader('Content-Disposition', `attachment; filename=Rapport_Audit_${mission.id}.docx`);
      
      // Send the buffer
      res.send(pdfBuffer);
    } catch (error) {
      console.error("Word export error:", error);
      res.status(500).json({ message: "Failed to generate Word document", error });
    }
  });
  
  const server = createServer(app);
  return server;
}
