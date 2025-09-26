import { eq } from 'drizzle-orm';
import * as schema from '../shared/schema';
import { mockMissions, mockContacts, mockRisks, mockRecommendations } from './utils/mockData';
import { persistentMockData } from './utils/persistentMockData';
import { db, dbInitialized } from './database';

// Flag to use mock data if database connection fails
let useMockData = !dbInitialized;

export class Storage {
  // User methods
  async getUser(id: number) {
    if (!dbInitialized || !db) {
      throw new Error('Database not initialized');
    }
    try {
      return await (db as any).query.users.findFirst({
        where: (users: any, { eq }: any) => eq(users.id, id)
      });
    } catch (error) {
      console.error('Error getting user:', error);
      throw new Error('Failed to get user');
    }
  }

  async getUserByUsername(username: string) {
    if (!dbInitialized || !db) {
      throw new Error('Database not initialized');
    }
    try {
      return await (db as any).query.users.findFirst({
        where: (users: any, { eq }: any) => eq(users.username, username)
      });
    } catch (error) {
      console.error('Error getting user by username:', error);
      throw new Error('Failed to get user by username');
    }
  }

  async createUser(user: schema.InsertUser) {
    if (!dbInitialized || !db) {
      throw new Error('Database not initialized');
    }
    try {
      const [newUser] = await (db as any).insert(schema.users).values(user).returning();
      return newUser;
    } catch (error) {
      console.error('Error creating user:', error);
      throw new Error('Failed to create user');
    }
  }

  // Mission methods
  async getMissions() {
    try {
      if (!dbInitialized || !db || useMockData) {
        await persistentMockData.initialize();
        return persistentMockData.getMissions();
      }
      
      const missions = await (db as any).query.missions.findMany();
      
      // If no missions in database, try to migrate from mock data
      if (missions.length === 0) {
        console.log('No missions in database, migrating from mock data...');
        const mockMissions = await persistentMockData.getMissions();
        for (const mission of mockMissions) {
          try {
            await this.createMission(mission);
          } catch (error) {
            console.error('Error migrating mission:', error);
          }
        }
        return await (db as any).query.missions.findMany();
      }
      
      return missions;
    } catch (error) {
      console.error('Error in getMissions:', error);
      // Fallback to persistent mock data if database query fails
      console.log('Falling back to persistent mock data');
      await persistentMockData.initialize();
      return persistentMockData.getMissions();
    }
  }

  async getMission(id: number) {
    try {
      if (!dbInitialized || !db || useMockData) {
        await persistentMockData.initialize();
        return persistentMockData.getMission(id);
      }
      
      const mission = await (db as any).query.missions.findFirst({
        where: (missions: any, { eq }: any) => eq(missions.id, id)
      });
      
      if (!mission) {
        // Try to get from mock data as fallback
        await persistentMockData.initialize();
        return persistentMockData.getMission(id);
      }
      
      return mission;
    } catch (error) {
      console.error('Error in getMission:', error);
      await persistentMockData.initialize();
      return persistentMockData.getMission(id);
    }
  }

  async createMission(mission: any) {
    try {
      // Always try to save to database first if available
      if (dbInitialized && db && !useMockData) {
        // Add timestamp fields
        const missionWithTimestamps = {
          ...mission,
          createdAt: Date.now(),
          updatedAt: Date.now(),
          status: mission.status || 'draft',
          progress: mission.progress || 0
        };

        // Filtrer les champs non supportés pour éviter les erreurs SQL
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
          'followUpDetails', 'status', 'progress', 'auditeeLogo', 'auditorLogo',
          'auditorSignature', 'auditorName', 'documentVersion', 'documentDate',
          'documentDiffusion', 'termsDefinitions', 'references', 'createdBy',
          'createdAt', 'updatedAt'
        ];

        const filteredMission: Record<string, any> = {};
        Object.keys(missionWithTimestamps).forEach(key => {
          if (supportedFields.includes(key)) {
            const value = (missionWithTimestamps as any)[key];
            
            // Convertir les objets en JSON pour SQLite
            if (value !== null && value !== undefined) {
              if (typeof value === 'object' && !Array.isArray(value)) {
                // Objet JavaScript -> JSON string
                filteredMission[key] = JSON.stringify(value);
              } else if (Array.isArray(value)) {
                // Array -> JSON string
                filteredMission[key] = JSON.stringify(value);
              } else {
                // Valeur primitive (string, number, boolean) -> garder tel quel
                filteredMission[key] = value;
              }
            } else {
              // null ou undefined -> null pour SQLite
              filteredMission[key] = null;
            }
          }
        });

        console.log('Champs filtrés pour création:', Object.keys(filteredMission));
        console.log('Types des valeurs:', Object.keys(filteredMission).map(key => `${key}: ${typeof filteredMission[key]}`));

        const [newMission] = await (db as any).insert(schema.missions).values(filteredMission as any).returning();
        
        // Also save to mock data as backup
        try {
          await persistentMockData.initialize();
          await persistentMockData.createMission(mission);
        } catch (mockError) {
          console.error('Error saving to mock data backup:', mockError);
        }
        
        return newMission;
      } else {
        // Fallback to mock data
        await persistentMockData.initialize();
        return await persistentMockData.createMission(mission);
      }
    } catch (error) {
      console.error('Error in createMission:', error);
      
      // Try to save to mock data as last resort
      try {
        await persistentMockData.initialize();
        return await persistentMockData.createMission(mission);
      } catch (mockError) {
        console.error('Error saving to mock data:', mockError);
        throw new Error(`Failed to create mission: ${error instanceof Error ? error.message : String(error)}`);
      }
    }
  }

  async updateMission(id: number, mission: Partial<schema.InsertMission>) {
    try {
      // Always try to update database first if available
      if (dbInitialized && db && !useMockData) {
        // Add timestamp fields
        const missionWithTimestamps = {
          ...mission,
          updatedAt: Date.now()
        };

        // Filtrer les champs non supportés pour éviter les erreurs SQL
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
          'followUpDetails', 'status', 'progress', 'auditeeLogo', 'auditorLogo',
          'auditorSignature', 'auditorName', 'documentVersion', 'documentDate',
          'documentDiffusion', 'termsDefinitions', 'references', 'createdBy',
          'updatedAt'
        ];

        const filteredMission: Record<string, any> = {};
        Object.keys(missionWithTimestamps).forEach(key => {
          if (supportedFields.includes(key)) {
            filteredMission[key] = (missionWithTimestamps as any)[key];
          }
        });

        console.log('Champs filtrés pour mise à jour:', Object.keys(filteredMission));

        const [updatedMission] = await (db as any)
          .update(schema.missions)
          .set(filteredMission)
          .where(eq(schema.missions.id, id))
          .returning();
        
        // Also update mock data as backup
        try {
          await persistentMockData.initialize();
          await persistentMockData.updateMission(id, mission);
        } catch (mockError) {
          console.error('Error updating mock data backup:', mockError);
        }
        
        return updatedMission;
      } else {
        // Fallback to mock data
        await persistentMockData.initialize();
        return await persistentMockData.updateMission(id, mission);
      }
    } catch (error) {
      console.error('Error in updateMission:', error);
      
      // Try to update mock data as last resort
      try {
        await persistentMockData.initialize();
        return await persistentMockData.updateMission(id, mission);
      } catch (mockError) {
        console.error('Error updating mock data:', mockError);
        throw new Error(`Failed to update mission: ${error instanceof Error ? error.message : String(error)}`);
      }
    }
  }

  async deleteMission(id: number) {
    try {
      if (useMockData) {
        await persistentMockData.initialize();
        return await persistentMockData.deleteMission(id);
      }
      if (!dbInitialized || !db) {
        throw new Error('Database not initialized');
      }
      const [deletedMission] = await (db as any)
        .delete(schema.missions)
        .where(eq(schema.missions.id, id))
        .returning();
      return !!deletedMission;
    } catch (error) {
      console.error('Error in deleteMission:', error);
      throw error;
    }
  }

  async clearAllMissions() {
    try {
      if (useMockData) {
        await persistentMockData.initialize();
        return await persistentMockData.clearAllData();
      }
      if (!dbInitialized || !db) {
        throw new Error('Database not initialized');
      }
      // Pour une vraie base de données, on supprimerait toutes les missions
      await (db as any).delete(schema.missions);
      return true;
    } catch (error) {
      console.error('Error in clearAllMissions:', error);
      throw error;
    }
  }

  // Contact methods
  async getContactsByMissionId(missionId: number) {
    try {
      if (useMockData) {
        await persistentMockData.initialize();
        return persistentMockData.getContactsByMissionId(missionId);
      }
      if (!dbInitialized || !db) {
        throw new Error('Database not initialized');
      }
      return await (db as any).query.contacts.findMany({
        where: (contacts: any, { eq }: any) => eq(contacts.missionId, missionId)
      });
    } catch (error) {
      console.error('Error in getContactsByMissionId:', error);
      return mockContacts.filter(c => c.missionId === missionId);
    }
  }

  async createContact(contact: schema.InsertContact) {
    try {
      if (useMockData) {
        const newId = Math.max(...mockContacts.map(c => c.id), 0) + 1;
        const newContact = { 
          id: newId, 
          ...contact,
          position: contact.position || '',
          email: contact.email || ''
        };
        mockContacts.push(newContact);
        return newContact;
      }
      if (!dbInitialized || !db) {
        throw new Error('Database not initialized');
      }
      const [newContact] = await (db as any).insert(schema.contacts).values(contact).returning();
      return newContact;
    } catch (error) {
      console.error('Error in createContact:', error);
      throw error;
    }
  }

  async deleteContactsByMissionId(missionId: number) {
    try {
      if (useMockData) {
        const initialLength = mockContacts.length;
        const filteredContacts = mockContacts.filter(c => c.missionId !== missionId);
        mockContacts.length = 0;
        mockContacts.push(...filteredContacts);
        return initialLength > mockContacts.length;
      }
      if (!dbInitialized || !db) {
        throw new Error('Database not initialized');
      }
      const [deletedContact] = await (db as any)
        .delete(schema.contacts)
        .where(eq(schema.contacts.missionId, missionId))
        .returning();
      return !!deletedContact;
    } catch (error) {
      console.error('Error in deleteContactsByMissionId:', error);
      throw error;
    }
  }

  // Risk methods
  async getRisksByMissionId(missionId: number) {
    try {
      if (useMockData) {
        await persistentMockData.initialize();
        return persistentMockData.getRisksByMissionId(missionId);
      }
      if (!dbInitialized || !db) {
        throw new Error('Database not initialized');
      }
      return await (db as any).query.risks.findMany({
        where: (risks: any, { eq }: any) => eq(risks.missionId, missionId)
      });
    } catch (error) {
      console.error('Error in getRisksByMissionId:', error);
      return mockRisks.filter(r => r.missionId === missionId);
    }
  }

  async createRisk(risk: schema.InsertRisk) {
    try {
      if (useMockData) {
        const newId = Math.max(...mockRisks.map(r => r.id), 0) + 1;
        const newRisk = { 
          id: newId, 
          ...risk,
          description: risk.description || '',
          mitigation: risk.mitigation || ''
        };
        mockRisks.push(newRisk);
        return newRisk;
      }
      if (!dbInitialized || !db) {
        throw new Error('Database not initialized');
      }
      const [newRisk] = await (db as any).insert(schema.risks).values(risk).returning();
      return newRisk;
    } catch (error) {
      console.error('Error in createRisk:', error);
      throw error;
    }
  }

  async deleteRisksByMissionId(missionId: number) {
    try {
      if (useMockData) {
        const initialLength = mockRisks.length;
        const filteredRisks = mockRisks.filter(r => r.missionId !== missionId);
        mockRisks.length = 0;
        mockRisks.push(...filteredRisks);
        return initialLength > mockRisks.length;
      }
      if (!dbInitialized || !db) {
        throw new Error('Database not initialized');
      }
      const [deletedRisk] = await (db as any)
        .delete(schema.risks)
        .where(eq(schema.risks.missionId, missionId))
        .returning();
      return !!deletedRisk;
    } catch (error) {
      console.error('Error in deleteRisksByMissionId:', error);
      throw error;
    }
  }

  // Recommendation methods
  async getRecommendationsByMissionId(missionId: number) {
    try {
      if (useMockData) {
        await persistentMockData.initialize();
        return persistentMockData.getRecommendationsByMissionId(missionId);
      }
      if (!dbInitialized || !db) {
        throw new Error('Database not initialized');
      }
      return await (db as any).query.recommendations.findMany({
        where: (recommendations: any, { eq }: any) => eq(recommendations.missionId, missionId)
      });
    } catch (error) {
      console.error('Error in getRecommendationsByMissionId:', error);
      return mockRecommendations.filter(r => r.missionId === missionId);
    }
  }

  async createRecommendation(recommendation: schema.InsertRecommendation) {
    try {
      if (useMockData) {
        const newId = Math.max(...mockRecommendations.map(r => r.id), 0) + 1;
        const newRecommendation = { 
          id: newId, 
          ...recommendation,
          responsible: recommendation.responsible || '',
          deadline: recommendation.deadline || ''
        };
        mockRecommendations.push(newRecommendation);
        return newRecommendation;
      }
      if (!dbInitialized || !db) {
        throw new Error('Database not initialized');
      }
      const [newRecommendation] = await (db as any).insert(schema.recommendations).values(recommendation).returning();
      return newRecommendation;
    } catch (error) {
      console.error('Error in createRecommendation:', error);
      throw error;
    }
  }

  async deleteRecommendationsByMissionId(missionId: number) {
    try {
      if (useMockData) {
        const initialLength = mockRecommendations.length;
        const filteredRecommendations = mockRecommendations.filter(r => r.missionId !== missionId);
        mockRecommendations.length = 0;
        mockRecommendations.push(...filteredRecommendations);
        return initialLength > mockRecommendations.length;
      }
      if (!dbInitialized || !db) {
        throw new Error('Database not initialized');
      }
      const [deletedRecommendation] = await (db as any)
        .delete(schema.recommendations)
        .where(eq(schema.recommendations.missionId, missionId))
        .returning();
      return !!deletedRecommendation;
    } catch (error) {
      console.error('Error in deleteRecommendationsByMissionId:', error);
      throw error;
    }
  }

  // Calculate mission progress
  async calculateMissionProgress(id: number) {
    try {
      const mission = await this.getMission(id);
      if (!mission) return 0;

      const risks = await this.getRisksByMissionId(id);
      const recommendations = await this.getRecommendationsByMissionId(id);

      let completedSections = 0;
      const totalSections = 5;

      if (mission.companyName && mission.companyType && mission.registrationNumber) completedSections++;
      if (mission.annualRevenue && mission.profitMargin && mission.financialRatios) completedSections++;
      if (risks.length > 0) completedSections++;
      if (mission.complianceStatus && mission.governanceStructure) completedSections++;
      if (recommendations.length > 0) completedSections++;

      return Math.round((completedSections / totalSections) * 100);
    } catch (error) {
      console.error('Error in calculateMissionProgress:', error);
      return 0;
    }
  }
}

export const storage = new Storage();