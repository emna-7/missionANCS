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

// Form sections definition
export const formSections: FormSection[] = [
  {
    id: 0,
    name: "Avant propos",
    description: "Informations sur la confidentialité et la diffusion du document",
    isCompleted: avantProposCompleted
  },
  {
    id: 1,
    name: "Cadre de la mission",
    description: "Contexte légal et réglementaire, objectifs et limites",
    isCompleted: missionFrameworkCompleted
  },
  {
    id: 2,
    name: "Présentation de l'organisme",
    description: "Présentation générale et cartographie des processus",
    isCompleted: orgPresentationCompleted
  },
  {
    id: 3,
    name: "Informations générales",
    description: "Informations de base sur l'entité auditée",
    isCompleted: generalInfoCompleted
  },
  {
    id: 4,
    name: "Analyse financière",
    description: "Analyse des données financières et des ratios",
    isCompleted: financialAnalysisCompleted
  },
  {
    id: 5,
    name: "Évaluation des risques",
    description: "Identification et évaluation des risques",
    isCompleted: riskAssessmentCompleted
  },
  {
    id: 6,
    name: "Conformité et gouvernance",
    description: "Évaluation de la conformité réglementaire et de la structure de gouvernance",
    isCompleted: complianceCompleted
  },
  {
    id: 7,
    name: "Recommandations",
    description: "Plan d'action et recommandations",
    isCompleted: recommendationsCompleted
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
