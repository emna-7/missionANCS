import { promises as fs } from 'fs';
import path from 'path';
import { Mission, Contact, Risk, Recommendation } from '../../shared/schema';

/**
 * Système de persistance pour les données mock
 * Sauvegarde les données dans des fichiers JSON
 */

const DATA_DIR = path.join(process.cwd(), 'data');
const MISSIONS_FILE = path.join(DATA_DIR, 'missions.json');
const CONTACTS_FILE = path.join(DATA_DIR, 'contacts.json');
const RISKS_FILE = path.join(DATA_DIR, 'risks.json');
const RECOMMENDATIONS_FILE = path.join(DATA_DIR, 'recommendations.json');

// Données par défaut
const defaultMissions: Mission[] = [
  {
    id: 1,
    title: "Audit de sécurité ANCS - Entreprise Demo",
    companyName: "Entreprise Demo SA",
    companyType: "SARL",
    registrationNumber: "RCS123456",
    creationDate: "2023-01-15",
    address: "123 Rue de la Sécurité, Tunis",
    activitySector: "Technologies",
    status: "in_progress",
    progress: 65,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  }
];

const defaultContacts: Contact[] = [
  {
    id: 1,
    missionId: 1,
    name: "Ahmed Ben Ali",
    function: "Directeur IT",
    email: "ahmed.benali@demo.tn",
    phone: "+216 XX XXX XXX",
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  }
];

const defaultRisks: Risk[] = [
  {
    id: 1,
    missionId: 1,
    name: "Accès non autorisé",
    description: "Risque d'accès non autorisé aux systèmes critiques",
    impact: 4,
    probability: 3,
    mitigation: "Mise en place d'une authentification forte",
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  }
];

const defaultRecommendations: Recommendation[] = [
  {
    id: 1,
    missionId: 1,
    description: "Implémenter une politique de mots de passe robuste",
    priority: "Haute",
    responsible: "DSI",
    timeline: "Q1 2024",
    status: "Planifié",
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  }
];

export class PersistentMockData {
  private static instance: PersistentMockData;
  private missions: Mission[] = [];
  private contacts: Contact[] = [];
  private risks: Risk[] = [];
  private recommendations: Recommendation[] = [];
  private initialized = false;

  private constructor() {}

  static getInstance(): PersistentMockData {
    if (!PersistentMockData.instance) {
      PersistentMockData.instance = new PersistentMockData();
    }
    return PersistentMockData.instance;
  }

  async initialize() {
    if (this.initialized) return;

    try {
      // Créer le dossier data s'il n'existe pas
      await fs.mkdir(DATA_DIR, { recursive: true });

      // Charger les données depuis les fichiers
      await this.loadData();
      
      this.initialized = true;
      console.log('✅ Système de persistance mock initialisé');
    } catch (error) {
      console.error('❌ Erreur lors de l\'initialisation du système de persistance:', error);
      // Utiliser les données par défaut
      this.missions = [...defaultMissions];
      this.contacts = [...defaultContacts];
      this.risks = [...defaultRisks];
      this.recommendations = [...defaultRecommendations];
      this.initialized = true;
    }
  }

  private async loadData() {
    try {
      // Charger les missions
      try {
        const missionsData = await fs.readFile(MISSIONS_FILE, 'utf-8');
        this.missions = JSON.parse(missionsData).map((m: any) => ({
          ...m,
          createdAt: new Date(m.createdAt),
          updatedAt: new Date(m.updatedAt)
        }));
      } catch {
        this.missions = [...defaultMissions];
        await this.saveMissions();
      }

      // Charger les contacts
      try {
        const contactsData = await fs.readFile(CONTACTS_FILE, 'utf-8');
        this.contacts = JSON.parse(contactsData).map((c: any) => ({
          ...c,
          createdAt: new Date(c.createdAt),
          updatedAt: new Date(c.updatedAt)
        }));
      } catch {
        this.contacts = [...defaultContacts];
        await this.saveContacts();
      }

      // Charger les risques
      try {
        const risksData = await fs.readFile(RISKS_FILE, 'utf-8');
        this.risks = JSON.parse(risksData).map((r: any) => ({
          ...r,
          createdAt: new Date(r.createdAt),
          updatedAt: new Date(r.updatedAt)
        }));
      } catch {
        this.risks = [...defaultRisks];
        await this.saveRisks();
      }

      // Charger les recommandations
      try {
        const recommendationsData = await fs.readFile(RECOMMENDATIONS_FILE, 'utf-8');
        this.recommendations = JSON.parse(recommendationsData).map((r: any) => ({
          ...r,
          createdAt: new Date(r.createdAt),
          updatedAt: new Date(r.updatedAt)
        }));
      } catch {
        this.recommendations = [...defaultRecommendations];
        await this.saveRecommendations();
      }

    } catch (error) {
      console.error('Erreur lors du chargement des données:', error);
      throw error;
    }
  }

  private async saveMissions() {
    await fs.writeFile(MISSIONS_FILE, JSON.stringify(this.missions, null, 2));
  }

  private async saveContacts() {
    await fs.writeFile(CONTACTS_FILE, JSON.stringify(this.contacts, null, 2));
  }

  private async saveRisks() {
    await fs.writeFile(RISKS_FILE, JSON.stringify(this.risks, null, 2));
  }

  private async saveRecommendations() {
    await fs.writeFile(RECOMMENDATIONS_FILE, JSON.stringify(this.recommendations, null, 2));
  }

  // Méthodes pour les missions
  getMissions(): Mission[] {
    return [...this.missions];
  }

  getMission(id: number): Mission | undefined {
    return this.missions.find(m => m.id === id);
  }

  async createMission(mission: Omit<Mission, 'id' | 'createdAt' | 'updatedAt'>): Promise<Mission> {
    const newId = this.missions.length > 0 ? Math.max(...this.missions.map(m => m.id)) + 1 : 1;
    const newMission: Mission = {
      ...mission,
      id: newId,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    this.missions.push(newMission);
    await this.saveMissions();
    return newMission;
  }

  async updateMission(id: number, updates: Partial<Mission>): Promise<Mission | null> {
    const index = this.missions.findIndex(m => m.id === id);
    if (index === -1) return null;

    this.missions[index] = {
      ...this.missions[index],
      ...updates,
      updatedAt: new Date()
    };

    await this.saveMissions();
    return this.missions[index];
  }

  async deleteMission(id: number): Promise<boolean> {
    const index = this.missions.findIndex(m => m.id === id);
    if (index === -1) return false;

    this.missions.splice(index, 1);
    
    // Supprimer aussi les données liées
    this.contacts = this.contacts.filter(c => c.missionId !== id);
    this.risks = this.risks.filter(r => r.missionId !== id);
    this.recommendations = this.recommendations.filter(r => r.missionId !== id);

    await this.saveMissions();
    await this.saveContacts();
    await this.saveRisks();
    await this.saveRecommendations();

    return true;
  }

  // Méthodes pour les contacts
  getContactsByMissionId(missionId: number): Contact[] {
    return this.contacts.filter(c => c.missionId === missionId);
  }

  async createContact(contact: Omit<Contact, 'id' | 'createdAt' | 'updatedAt'>): Promise<Contact> {
    const newId = this.contacts.length > 0 ? Math.max(...this.contacts.map(c => c.id)) + 1 : 1;
    const newContact: Contact = {
      ...contact,
      id: newId,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    this.contacts.push(newContact);
    await this.saveContacts();
    return newContact;
  }

  // Méthodes pour les risques
  getRisksByMissionId(missionId: number): Risk[] {
    return this.risks.filter(r => r.missionId === missionId);
  }

  async createRisk(risk: Omit<Risk, 'id' | 'createdAt' | 'updatedAt'>): Promise<Risk> {
    const newId = this.risks.length > 0 ? Math.max(...this.risks.map(r => r.id)) + 1 : 1;
    const newRisk: Risk = {
      ...risk,
      id: newId,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    this.risks.push(newRisk);
    await this.saveRisks();
    return newRisk;
  }

  // Méthodes pour les recommandations
  getRecommendationsByMissionId(missionId: number): Recommendation[] {
    return this.recommendations.filter(r => r.missionId === missionId);
  }

  async createRecommendation(recommendation: Omit<Recommendation, 'id' | 'createdAt' | 'updatedAt'>): Promise<Recommendation> {
    const newId = this.recommendations.length > 0 ? Math.max(...this.recommendations.map(r => r.id)) + 1 : 1;
    const newRecommendation: Recommendation = {
      ...recommendation,
      id: newId,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    this.recommendations.push(newRecommendation);
    await this.saveRecommendations();
    return newRecommendation;
  }

  // Méthode pour vider toutes les données (utile pour les tests)
  async clearAllData(): Promise<void> {
    this.missions = [];
    this.contacts = [];
    this.risks = [];
    this.recommendations = [];

    await this.saveMissions();
    await this.saveContacts();
    await this.saveRisks();
    await this.saveRecommendations();
  }
}

export const persistentMockData = PersistentMockData.getInstance();
