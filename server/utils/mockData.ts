// Mock data for testing purposes
export const mockMissions = [
  {
    id: 1,
    title: "Audit de sécurité interne",
    companyName: "Tech Solutions SA",
    companyType: "SARL",
    registrationNumber: "RCS123456",
    creationDate: "2023-01-15",
    address: "10 rue de l'Innovation, Paris",
    activitySector: "Technologies",
    status: "completed",
    progress: 100,
    createdAt: new Date("2023-01-10T09:00:00Z"),
    updatedAt: new Date("2023-05-20T16:30:00Z")
  },
  {
    id: 2,
    title: "Audit financier annuel",
    companyName: "Finance Plus",
    companyType: "SA",
    registrationNumber: "RCS789012",
    creationDate: "2022-06-10",
    address: "25 avenue des Finances, Lyon",
    activitySector: "Services financiers",
    status: "in_progress",
    progress: 65,
    createdAt: new Date("2023-03-15T14:00:00Z"),
    updatedAt: new Date("2023-06-01T11:45:00Z")
  },
  {
    id: 3,
    title: "Audit de conformité RGPD",
    companyName: "Data Services",
    companyType: "SAS",
    registrationNumber: "RCS345678",
    creationDate: "2021-11-05",
    address: "5 rue des Données, Bordeaux",
    activitySector: "Services informatiques",
    status: "draft",
    progress: 25,
    createdAt: new Date("2023-05-05T10:30:00Z"),
    updatedAt: new Date("2023-05-25T15:15:00Z")
  }
];

export const mockContacts = [
  {
    id: 1,
    missionId: 1,
    name: "Jean Dupont",
    position: "Directeur technique",
    email: "jean.dupont@techsolutions.fr"
  },
  {
    id: 2,
    missionId: 1,
    name: "Sophie Martin",
    position: "Responsable sécurité",
    email: "sophie.martin@techsolutions.fr"
  },
  {
    id: 3,
    missionId: 2,
    name: "Pierre Lefebvre",
    position: "Directeur financier",
    email: "pierre.lefebvre@financeplus.fr"
  }
];

export const mockRisks = [
  {
    id: 1,
    missionId: 1,
    riskType: "Sécurité",
    probability: "High",
    impact: "High",
    description: "Accès non autorisé aux données sensibles",
    mitigation: "Mise en place d'une authentification à deux facteurs"
  },
  {
    id: 2,
    missionId: 1,
    riskType: "Conformité",
    probability: "Medium",
    impact: "High",
    description: "Non-conformité avec les réglementations RGPD",
    mitigation: "Audit de conformité et mise à jour des politiques"
  },
  {
    id: 3,
    missionId: 2,
    riskType: "Finance",
    probability: "Low",
    impact: "Medium",
    description: "Écarts budgétaires importants",
    mitigation: "Révision trimestrielle des budgets"
  }
];

export const mockRecommendations = [
  {
    id: 1,
    missionId: 1,
    description: "Mettre à jour les politiques de sécurité",
    priority: "High",
    responsible: "Équipe sécurité",
    deadline: "2023-07-15"
  },
  {
    id: 2,
    missionId: 1,
    description: "Former le personnel aux bonnes pratiques",
    priority: "Medium",
    responsible: "Ressources humaines",
    deadline: "2023-08-30"
  },
  {
    id: 3,
    missionId: 2,
    description: "Optimiser les processus de reporting financier",
    priority: "Medium",
    responsible: "Équipe finance",
    deadline: "2023-09-15"
  }
];