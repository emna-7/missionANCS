import { MissionFormData } from "@shared/schema";

// Validator function type
type ValidatorFn = (data: MissionFormData) => boolean;

// Form section interface
export interface FormSection {
  id: number;
  name: string;
  description?: string;
  isCompleted: ValidatorFn;
}

// Page de couverture validation
const coverPageCompleted: ValidatorFn = (data) => {
  // La section est complétée si au moins le titre et le nom de l'entreprise sont remplis
  return Boolean(
    data.title &&
    data.companyName
    // Retiré companyLogo car il n'est probablement pas défini dans MissionFormData
  );
};

// Avant propos section validation
const avantProposCompleted: ValidatorFn = (data) => {
  // La section est complétée si au moins une option de confidentialité est sélectionnée,
  // il y a au moins un élément dans l'historique des versions,
  // et il y a au moins un contact dans la diffusion côté auditeur
  return Boolean(
    data.confidentialityOptions && 
    (data.confidentialityOptions.noDisclosure || 
     data.confidentialityOptions.noReproduction || 
     data.confidentialityOptions.noPersonalUse || 
     data.confidentialityOptions.noCommercialUse) &&
    data.versionHistory && 
    data.versionHistory.length > 0 &&
    data.auditorContacts && 
    data.auditorContacts.length > 0
  );
};

// Mission framework section validation
const missionFrameworkCompleted: ValidatorFn = (data) => {
  // La section est complétée si au moins le cadre légal, le type d'audit et l'objectif sont remplis
  return Boolean(
    data.legalFrameworkText &&
    data.auditType &&
    data.missionObjective
  );
};

// Organization presentation section validation
const orgPresentationCompleted: ValidatorFn = (data) => {
  // La section est complétée si les informations de base et au moins un processus sont remplis
  return Boolean(
    data.orgName &&
    data.orgBusinessActivity &&
    data.businessProcesses &&
    data.businessProcesses.length > 0 &&
    // Vérifier qu'au moins une exigence de sécurité est définie
    data.securityRequirements &&
    data.securityRequirements.length > 0
  );
};

// Audit scope section validation
const auditScopeCompleted: ValidatorFn = (data) => {
  // La section est complétée si au moins le périmètre géographique et les impacts sont remplis
  return Boolean(
    data.geographicPerimeter && 
    data.geographicPerimeter.length > 0 &&
    data.operationsImpact &&
    data.sensitiveData &&
    data.infrastructureComplexity &&
    // Vérifier qu'au moins une application est définie
    data.applications && 
    data.applications.length > 0 &&
    // Vérifier qu'au moins un élément d'infrastructure est défini
    data.networkInfrastructure && 
    data.networkInfrastructure.length > 0 &&
    // Vérifier qu'au moins un poste de travail est défini
    data.workstations && 
    data.workstations.length > 0 &&
    // Vérifier qu'au moins un serveur est défini
    data.servers && 
    data.servers.length > 0
  );
};

// Méthodologie d'audit validation
const auditMethodologyCompleted: ValidatorFn = (data) => {
  // La section est complétée si au moins les domaines de sécurité, la maturité et les outils sont remplis
  return Boolean(
    // Vérifier les domaines de sécurité
    data.securityDomains && 
    data.securityDomains.length > 0 &&
    // Vérifier la maturité des mesures
    data.securityMeasuresMaturity && 
    data.securityMeasuresMaturity.length > 0 &&
    // Vérifier les outils d'audit
    data.auditTools && 
    data.auditTools.length > 0 &&
    // Vérifier les checklists
    data.auditChecklists && 
    data.auditChecklists.length > 0 &&
    // Vérifier l'équipe d'audit
    data.auditTeam && 
    data.auditTeam.length > 0 &&
    // Vérifier l'équipe côté organisme
    data.organizationTeam && 
    data.organizationTeam.length > 0 &&
    // Vérifier le planning d'exécution
    data.missionPlanning && 
    data.missionPlanning.length > 0
  );
};

// General information section validation
const generalInfoCompleted: ValidatorFn = (data) => {
  return Boolean(
    data.title &&
    data.companyName &&
    data.companyType &&
    data.registrationNumber &&
    data.creationDate
  );
};

// Financial analysis section validation
const financialAnalysisCompleted: ValidatorFn = (data) => {
  return Boolean(
    data.annualRevenue &&
    data.profitMargin &&
    data.totalAssets &&
    data.totalDebts &&
    data.financialRatios &&
    data.financialComments
  );
};

// Risk assessment section validation
const riskAssessmentCompleted: ValidatorFn = (data) => {
  return Boolean(
    data.risks && 
    data.risks.length > 0 && 
    data.risks.every(risk => 
      Boolean(risk.riskType && risk.probability && risk.impact)
    )
  );
};

// Compliance section validation
const complianceCompleted: ValidatorFn = (data) => {
  return Boolean(
    data.complianceStatus &&
    data.governanceStructure
  );
};

// Recommendations section validation
const recommendationsCompleted: ValidatorFn = (data) => {
  return Boolean(
    data.observations &&
    data.followUpDate &&
    data.followUpResponsible &&
    data.recommendations && 
    data.recommendations.length > 0 && 
    data.recommendations.every(rec => 
      Boolean(rec.description && rec.priority)
    )
  );
};

// Termes et définitions validation
const termsDefinitionsCompleted: ValidatorFn = (data) => {
  // La section est complétée si au moins un terme est défini
  // Vérifier si la propriété existe avant de vérifier sa longueur
  return Boolean(
    data.termsDefinitions && 
    Array.isArray(data.termsDefinitions) &&
    data.termsDefinitions.length > 0
  );
};

// Références validation
const referencesCompleted: ValidatorFn = (data) => {
  // La section est complétée si au moins une référence est définie
  // Vérifier si la propriété existe avant de vérifier sa longueur
  return Boolean(
    data.references && 
    Array.isArray(data.references) &&
    data.references.length > 0
  );
};

// Form sections definition
export const formSections: FormSection[] = [
  {
    id: 0,
    name: "Page de couverture",
    description: "Page de présentation avec logo et informations principales",
    isCompleted: coverPageCompleted
  },
  {
    id: 1,
    name: "Avant propos",
    description: "Informations sur la confidentialité et la diffusion du document",
    isCompleted: avantProposCompleted
  },
  {
    id: 2,
    name: "Cadre de la mission",
    description: "Contexte légal et réglementaire, objectifs et limites",
    isCompleted: missionFrameworkCompleted
  },
  {
    id: 3,
    name: "Termes et définitions",
    description: "Définition des termes techniques utilisés dans le rapport",
    isCompleted: termsDefinitionsCompleted
  },
  {
    id: 4,
    name: "Références",
    description: "Documents et standards de référence utilisés",
    isCompleted: referencesCompleted
  },
  {
    id: 5,
    name: "Présentation de l'organisme audité",
    description: "Présentation générale et cartographie des processus",
    isCompleted: orgPresentationCompleted
  },
  {
    id: 6,
    name: "Champ d'audit",
    description: "Périmètre, applications et infrastructure auditée",
    isCompleted: auditScopeCompleted
  },
  {
    id: 7,
    name: "Méthodologie d'audit",
    description: "Référentiels, outils, équipes et planning d'exécution",
    isCompleted: auditMethodologyCompleted
  },
  {
    id: 8,
    name: "Synthèse des résultats de l'audit",
    description: "Informations de base sur l'entité auditée",
    isCompleted: generalInfoCompleted
  },
  {
    id: 9,
    name: "Appréciation des risques",
    description: "Identification et évaluation des risques",
    isCompleted: riskAssessmentCompleted
  },

  {
    id: 10,
    name: "Plan d'action",
    description: "Organisation par projets des actions et recommandations",
    isCompleted: () => true // Toujours considéré comme complété pour l'instant
  }
];

// Risk types options
export const riskTypes = [
  "Risque opérationnel",
  "Risque financier",
  "Risque juridique",
  "Risque informatique",
  "Risque stratégique",
  "Risque de conformité",
  "Risque de réputation",
  "Risque de marché",
  "Risque environnemental",
  "Autre"
];

// Probability options
export const probabilityOptions = [
  "Faible",
  "Moyenne",
  "Élevée",
  "Très élevée"
];

// Impact options
export const impactOptions = [
  "Faible",
  "Moyen",
  "Élevé",
  "Très élevé"
];

// Priority options
export const priorityOptions = [
  { value: "high", label: "Haute" },
  { value: "medium", label: "Moyenne" },
  { value: "low", label: "Basse" }
];

// Compliance status options
export const complianceStatusOptions = [
  "Conforme",
  "Partiellement conforme",
  "Non conforme",
  "Non applicable"
];

// Company types
export const companyTypes = [
  "SARL",
  "SA",
  "SAS",
  "EURL",
  "SCI",
  "SASU",
  "Autre"
];

// Activity sectors
export const activitySectors = [
  "Technologie",
  "Finance",
  "Santé",
  "Commerce",
  "Industrie",
  "Services",
  "Éducation",
  "Transport",
  "Agriculture",
  "Énergie",
  "Autre"
];

// Shareholder structure options
export const shareholderStructureOptions = [
  "Actionnariat unique",
  "Actionnariat multiple",
  "Société cotée",
  "Filiale d'un groupe"
];

// Board meeting frequency options
export const boardMeetingOptions = [
  "Mensuelle",
  "Trimestrielle",
  "Semestrielle",
  "Annuelle"
];

// Committee options
export const committeeOptions = [
  "Comité d'audit",
  "Comité des risques",
  "Comité des rémunérations",
  "Comité des nominations",
  "Comité stratégique",
  "Comité éthique"
];

// Security domains options
export const securityDomainOptions = [
  "Mesures organisationnelles",
  "Mesures liées aux personnes",
  "Mesures d'ordre physique",
  "Mesures technologiques"
];

// Security measures maturity options
export const maturityOptions = [
  { value: "high", label: "Élevé", color: "bg-green-100 text-green-800 border-green-200" },
  { value: "medium", label: "Moyen", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
  { value: "low", label: "Faible", color: "bg-red-100 text-red-800 border-red-200" }
];

// Audit tool types
export const auditToolTypes = [
  { value: "vuln_scan", label: "Scanner de vulnérabilités" },
  { value: "net_sniffer", label: "Analyseur réseau" },
  { value: "pentest", label: "Outil de pentest" },
  { value: "compliance", label: "Verification compliance" },
  { value: "other", label: "Autre" }
];

// Audit phases
export const auditPhases = [
  { value: "phase0", label: "Phase 0 : Déclenchement de l'Audit" },
  { value: "phase1", label: "Phase 1 : Audit Organisationnel et Physique" },
  { value: "phase2", label: "Phase 2 : Appréciation des Risques" },
  { value: "phase3", label: "Phase 3 : Audit Technique" },
  { value: "phase4", label: "Phase 4 : Sensibilisation Post-Audit" },
  { value: "phase5", label: "Phase 5 : Préparation du Rapport d'Audit" }
];

// Task status options
export const taskStatusOptions = [
  { value: "not_started", label: "Non commencé" },
  { value: "in_progress", label: "En cours" },
  { value: "delayed", label: "Retardé" },
  { value: "completed", label: "Terminé" },
  { value: "canceled", label: "Annulé" }
];








