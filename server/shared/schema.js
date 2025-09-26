import { pgTable, text, serial, integer, boolean, jsonb, timestamp, decimal } from "drizzle-orm/pg-core";
import { z } from "zod";
// User schema
export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    username: text("username").notNull().unique(),
    password: text("password").notNull(),
    fullName: text("full_name"),
    email: text("email"),
    role: text("role").default("user"),
});
// Créer un schéma d'insertion manuellement au lieu d'utiliser createInsertSchema
export const insertUserSchema = z.object({
    username: z.string().min(1),
    password: z.string().min(1),
    fullName: z.string().optional(),
    email: z.string().email().optional(),
    role: z.string().optional().default("user"),
});
// Contact schema for mission contacts
export const contacts = pgTable("contacts", {
    id: serial("id").primaryKey(),
    missionId: integer("mission_id").notNull(),
    name: text("name").notNull(),
    position: text("position"),
    email: text("email"),
});
export const insertContactSchema = z.object({
    missionId: z.number(),
    name: z.string().min(1),
    position: z.string().optional(),
    email: z.string().email().optional(),
});
// Risk schema for mission risks
export const risks = pgTable("risks", {
    id: serial("id").primaryKey(),
    missionId: integer("mission_id").notNull(),
    riskType: text("risk_type").notNull(),
    probability: text("probability").notNull(),
    impact: text("impact").notNull(),
    description: text("description"),
    mitigation: text("mitigation"),
});
export const insertRiskSchema = z.object({
    missionId: z.number(),
    riskType: z.string().min(1),
    probability: z.string().min(1),
    impact: z.string().min(1),
    description: z.string().optional(),
    mitigation: z.string().optional(),
});
// Recommendation schema for mission recommendations
export const recommendations = pgTable("recommendations", {
    id: serial("id").primaryKey(),
    missionId: integer("mission_id").notNull(),
    description: text("description").notNull(),
    priority: text("priority").notNull(),
    responsible: text("responsible"),
    deadline: text("deadline"),
});
export const insertRecommendationSchema = z.object({
    missionId: z.number(),
    description: z.string().min(1),
    priority: z.string().min(1),
    responsible: z.string().optional(),
    deadline: z.string().optional(),
});
// Main mission schema
export const missions = pgTable("missions", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    companyName: text("company_name").notNull(),
    companyType: text("company_type"),
    registrationNumber: text("registration_number"),
    creationDate: text("creation_date"),
    address: text("address"),
    activitySector: text("activity_sector"),
    // Avant propos - Document confidentiality
    confidentialityOptions: jsonb("confidentiality_options"),
    // Avant propos - Document version history
    versionHistory: jsonb("version_history"),
    // Avant propos - Auditor contacts and Audited organization contacts
    auditorContacts: jsonb("auditor_contacts"),
    auditedOrgContacts: jsonb("audited_org_contacts"),
    // Cadre de la mission - Informations légales et réglementaires
    legalFrameworkText: text("legal_framework_text"),
    legalFrameworkReference: text("legal_framework_reference"),
    auditType: text("audit_type"),
    missionObjective: text("mission_objective"),
    isoPrepCertification: boolean("iso_prep_certification"),
    isoStandards: jsonb("iso_standards"),
    auditLimitations: text("audit_limitations"),
    // Présentation de l'organisme audité - Informations générales
    orgName: text("org_name"),
    orgLogo: text("org_logo"),
    orgBusinessActivity: text("org_business_activity"),
    orgCreationDate: text("org_creation_date"),
    orgContactInfo: text("org_contact_info"),
    orgWebsite: text("org_website"),
    // Présentation de l'organisme audité - Cartographie des processus
    businessProcesses: jsonb("business_processes"),
    // Présentation de l'organisme audité - Exigences de sécurité
    securityRequirements: jsonb("security_requirements"),
    // Présentation de l'organisme audité - CIA (Confidentialité, Intégrité, Disponibilité)
    ciaMatrix: jsonb("cia_matrix"),
    // Champ d'audit - Périmètre géographique
    geographicPerimeter: jsonb("geographic_perimeter"),
    // Champ d'audit - Impacts et complexité
    operationsImpact: text("operations_impact"),
    sensitiveData: text("sensitive_data"),
    infrastructureComplexity: text("infrastructure_complexity"),
    samplingCriteria: text("sampling_criteria"),
    systemsDescription: text("systems_description"),
    // Champ d'audit - Évaluations pour l'échantillonnage
    siteSamplingEvaluations: jsonb("site_sampling_evaluations"),
    // Champ d'audit - Applications
    applications: jsonb("applications"),
    // Champ d'audit - Infrastructure réseau et sécurité
    networkInfrastructure: jsonb("network_infrastructure"),
    // Champ d'audit - Postes de travail
    workstations: jsonb("workstations"),
    // Champ d'audit - Serveurs
    servers: jsonb("servers"),
    // Méthodologie d'audit - Domaines de sécurité
    securityDomains: jsonb("security_domains"),
    // Méthodologie d'audit - Maturité des mesures
    securityMeasuresMaturity: jsonb("security_measures_maturity"),
    // Méthodologie d'audit - Outils d'audit
    auditTools: jsonb("audit_tools"),
    // Méthodologie d'audit - Checklists
    auditChecklists: jsonb("audit_checklists"),
    // Méthodologie d'audit - Équipe d'audit
    auditTeam: jsonb("audit_team"),
    // Méthodologie d'audit - Équipe côté organisme
    organizationTeam: jsonb("organization_team"),
    // Méthodologie d'audit - Planning d'exécution
    missionPlanning: jsonb("mission_planning"),
    // Financial analysis data
    annualRevenue: decimal("annual_revenue", { precision: 15, scale: 2 }),
    profitMargin: decimal("profit_margin", { precision: 5, scale: 2 }),
    totalAssets: decimal("total_assets", { precision: 15, scale: 2 }),
    totalDebts: decimal("total_debts", { precision: 15, scale: 2 }),
    financialRatios: jsonb("financial_ratios"),
    financialComments: text("financial_comments"),
    // Compliance and governance
    complianceStatus: jsonb("compliance_status"),
    governanceStructure: jsonb("governance_structure"),
    // Action plan
    observations: text("observations"),
    followUpDate: text("follow_up_date"),
    followUpResponsible: text("follow_up_responsible"),
    followUpDetails: text("follow_up_details"),
    // Page de couverture
    auditeeLogo: text("auditee_logo"),
    auditorLogo: text("auditor_logo"),
    auditorSignature: text("auditor_signature"),
    auditorName: text("auditor_name"),
    documentVersion: text("document_version"),
    documentDate: text("document_date"),
    documentDiffusion: text("document_diffusion"),
    // Propriétés pour les termes et définitions
    termsDefinitions: jsonb("terms_definitions"),
    // Propriétés pour les références
    references: jsonb("references"),
    // Status and metadata
    status: text("status").default("draft"),
    progress: integer("progress").default(0),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
    createdBy: integer("created_by"),
});
// Créer un schéma d'insertion manuellement au lieu d'utiliser createInsertSchema
export const insertMissionSchema = z.object({
    title: z.string().optional().default(""),
    companyName: z.string().optional().default(""),
    companyType: z.string().optional(),
    registrationNumber: z.string().optional(),
    creationDate: z.string().optional(),
    address: z.string().optional(),
    activitySector: z.string().optional(),
    confidentialityOptions: z.any().optional(),
    versionHistory: z.any().optional(),
    auditorContacts: z.any().optional(),
    auditedOrgContacts: z.any().optional(),
    legalFrameworkText: z.string().optional(),
    legalFrameworkReference: z.string().optional(),
    auditType: z.string().optional(),
    missionObjective: z.string().optional(),
    isoPrepCertification: z.boolean().optional(),
    isoStandards: z.any().optional(),
    auditLimitations: z.string().optional(),
    orgName: z.string().optional(),
    orgLogo: z.string().optional(),
    orgBusinessActivity: z.string().optional(),
    orgCreationDate: z.string().optional(),
    orgContactInfo: z.string().optional(),
    orgWebsite: z.string().optional(),
    businessProcesses: z.any().optional(),
    securityRequirements: z.any().optional(),
    ciaMatrix: z.any().optional(),
    geographicPerimeter: z.any().optional(),
    operationsImpact: z.string().optional(),
    sensitiveData: z.string().optional(),
    infrastructureComplexity: z.string().optional(),
    samplingCriteria: z.string().optional(),
    systemsDescription: z.string().optional(),
    applications: z.any().optional(),
    networkInfrastructure: z.any().optional(),
    workstations: z.any().optional(),
    servers: z.any().optional(),
    securityDomains: z.any().optional(),
    securityMeasuresMaturity: z.any().optional(),
    auditTools: z.any().optional(),
    auditChecklists: z.any().optional(),
    auditTeam: z.any().optional(),
    organizationTeam: z.any().optional(),
    missionPlanning: z.any().optional(),
    annualRevenue: z.number().optional(),
    profitMargin: z.number().optional(),
    totalAssets: z.number().optional(),
    totalDebts: z.number().optional(),
    financialRatios: z.any().optional(),
    financialComments: z.string().optional(),
    complianceStatus: z.any().optional(),
    governanceStructure: z.any().optional(),
    observations: z.string().optional(),
    followUpDate: z.string().optional(),
    followUpResponsible: z.string().optional(),
    followUpDetails: z.string().optional(),
    // Page de couverture
    auditeeLogo: z.string().optional(),
    auditorLogo: z.string().optional(),
    auditorSignature: z.string().optional(),
    auditorName: z.string().optional(),
    documentVersion: z.string().optional(),
    documentDate: z.string().optional(),
    documentDiffusion: z.string().optional(),
    // Termes et définitions
    termsDefinitions: z.any().optional(),
    // Références
    references: z.any().optional(),
    status: z.string().optional().default("draft"),
    progress: z.number().optional().default(0),
    createdBy: z.number().optional(),
});
// Form data validation schema for frontend (extends the insert schema)
export const missionFormSchema = insertMissionSchema.extend({
    // Avant propos - Confidentiality options
    confidentialityOptions: z.object({
        noDisclosure: z.boolean().default(false),
        noReproduction: z.boolean().default(false),
        noPersonalUse: z.boolean().default(false),
        noCommercialUse: z.boolean().default(false),
    }).optional().default({
        noDisclosure: false,
        noReproduction: false,
        noPersonalUse: false,
        noCommercialUse: false,
    }),
    // Avant propos - Version history
    versionHistory: z.array(z.object({
        version: z.string(),
        date: z.string(),
        author: z.string(),
        changes: z.string(),
    })).optional().default([
        { version: "1.0", date: new Date().toLocaleDateString('fr-FR'), author: "", changes: "Création du rapport" }
    ]),
    // Avant propos - Auditor contacts
    auditorContacts: z.array(z.object({
        name: z.string(),
        firstName: z.string(),
        title: z.string(),
        phone: z.string(),
        email: z.string().email("Email invalide").optional().or(z.literal("")),
    })).optional().default([]),
    // Avant propos - Audited organization contacts
    auditedOrgContacts: z.array(z.object({
        name: z.string(),
        firstName: z.string(),
        title: z.string(),
        phone: z.string(),
        email: z.string().email("Email invalide").optional().or(z.literal("")),
    })).optional().default([]),
    // Cadre de la mission
    legalFrameworkText: z.string().optional(),
    legalFrameworkReference: z.string().optional(),
    auditType: z.string().optional(),
    missionObjective: z.string().optional(),
    isoPrepCertification: z.boolean().optional().default(false),
    isoStandards: z.object({
        name: z.string().optional(),
        securityStandards: z.boolean().optional().default(false),
        specificStandards: z.boolean().optional().default(false),
    }).optional(),
    auditLimitations: z.string().optional(),
    // Présentation de l'organisme audité
    orgName: z.string().optional(),
    orgLogo: z.string().optional(),
    orgBusinessActivity: z.string().optional(),
    orgCreationDate: z.string().optional(),
    orgContactInfo: z.string().optional(),
    orgWebsite: z.string().optional(),
    // Cartographie des processus
    businessProcesses: z.array(z.object({
        id: z.number(),
        name: z.string(),
        description: z.string().optional(),
        dataType: z.string().optional(),
    })).optional().default([]),
    // Exigences de sécurité
    securityRequirements: z.array(z.object({
        processId: z.number(),
        processName: z.string(),
        confidentiality: z.number().min(1).max(4),
        integrity: z.number().min(1).max(4),
        availability: z.number().min(1).max(4)
    })).optional().default([]),
    // CIA Matrix
    ciaMatrix: z.object({
        confidentiality: z.array(z.object({
            level: z.number(),
            name: z.string(),
            description: z.string(),
        })).optional().default([
            { level: 1, name: "Faible", description: "Information publique, diffusion sans restriction." },
            { level: 2, name: "Moyen", description: "Restreint au personnel interne et partenaires autorisés." },
            { level: 3, name: "Élevé", description: "Très restreint, accès limité aux personnes expressément autorisées." },
            { level: 4, name: "Critique", description: "Strictement confidentiel, accès extrêmement limité et contrôlé." }
        ]),
        integrity: z.array(z.object({
            level: z.number(),
            name: z.string(),
            description: z.string(),
        })).optional().default([
            { level: 1, name: "Faible", description: "Modifications mineures acceptables, impact limité." },
            { level: 2, name: "Moyen", description: "Les erreurs tolérables si détectées, données vérifiées par processus." },
            { level: 3, name: "Élevé", description: "Aucune erreur tolérée, vérification avancée requise." },
            { level: 4, name: "Critique", description: "Intégrité absolue requise, toute altération pourrait être catastrophique." }
        ]),
        availability: z.array(z.object({
            level: z.number(),
            name: z.string(),
            description: z.string(),
        })).optional().default([
            { level: 1, name: "Faible", description: "Indisponibilité tolérable, peu d'impact opérationnel." },
            { level: 2, name: "Moyen", description: "Disponible aux heures ouvrées avec interruptions planifiées." },
            { level: 3, name: "Élevé", description: "Haute disponibilité requise 24/7, temps d'arrêt minimal." },
            { level: 4, name: "Critique", description: "Disponibilité permanente critique, aucune interruption tolérée." }
        ])
    }).optional().default({}),
    // Champ d'audit - Périmètre géographique
    geographicPerimeter: z.array(z.object({
        id: z.number(),
        site: z.string(),
        structure: z.string(),
        location: z.string()
    })).optional().default([]),
    // Champ d'audit - Impacts et complexité
    operationsImpact: z.string().optional(),
    sensitiveData: z.string().optional(),
    infrastructureComplexity: z.string().optional(),
    samplingCriteria: z.string().optional(),
    systemsDescription: z.string().optional(),
    // Champ d'audit - Applications
    applications: z.array(z.object({
        id: z.number(),
        name: z.string(),
        modules: z.string(),
        description: z.string().optional(),
        environment: z.string().optional(),
        developedBy: z.string().optional(),
        ipAddresses: z.string().optional(),
        userCount: z.number().optional()
    })).optional().default([]),
    // Champ d'audit - Infrastructure réseau et sécurité
    networkInfrastructure: z.array(z.object({
        id: z.number(),
        type: z.string(),
        brand: z.string(),
        model: z.string(),
        quantity: z.number(),
        managedBy: z.string(),
        observations: z.string().optional(),
        inAuditPerimeter: z.boolean(),
        exclusionJustification: z.string().optional()
    })).optional().default([]),
    // Champ d'audit - Postes de travail
    workstations: z.array(z.object({
        id: z.number(),
        system: z.string(),
        count: z.number(),
        inAuditPerimeter: z.boolean(),
        exclusionJustification: z.string().optional()
    })).optional().default([]),
    // Champ d'audit - Serveurs
    servers: z.array(z.object({
        id: z.number(),
        name: z.string(),
        ipAddress: z.string(),
        type: z.string(),
        system: z.string(),
        role: z.string(),
        inAuditPerimeter: z.boolean(),
        exclusionJustification: z.string().optional()
    })).optional().default([]),
    // Méthodologie d'audit - Domaines de sécurité
    securityDomains: z.array(z.object({
        id: z.number(),
        domainName: z.string(),
        referential: z.string(),
        actions: z.string()
    })).optional().default([]),
    // Méthodologie d'audit - Maturité des mesures
    securityMeasuresMaturity: z.array(z.object({
        id: z.number(),
        domainName: z.string(),
        maturityLevel: z.string(),
        comments: z.string()
    })).optional().default([]),
    // Méthodologie d'audit - Outils d'audit
    auditTools: z.array(z.object({
        id: z.number(),
        toolName: z.string(),
        version: z.string(),
        license: z.string(),
        features: z.string(),
        components: z.string()
    })).optional().default([]),
    // Méthodologie d'audit - Checklists
    auditChecklists: z.array(z.object({
        id: z.number(),
        checklistName: z.string(),
        version: z.string(),
        source: z.string(),
        description: z.string(),
        components: z.string()
    })).optional().default([]),
    // Méthodologie d'audit - Équipe d'audit
    auditTeam: z.array(z.object({
        id: z.number(),
        lastName: z.string(),
        firstName: z.string(),
        role: z.string(),
        qualification: z.string(),
        certifiedBy: z.string(),
        interventionFields: z.string()
    })).optional().default([]),
    // Méthodologie d'audit - Équipe côté organisme
    organizationTeam: z.array(z.object({
        id: z.number(),
        lastName: z.string(),
        firstName: z.string(),
        position: z.string(),
        function: z.string()
    })).optional().default([]),
    // Méthodologie d'audit - Planning d'exécution
    missionPlanning: z.array(z.object({
        id: z.number(),
        phase: z.string(),
        taskDescription: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        period: z.number(),
        onSite: z.string(),
        manDays: z.number()
    })).optional().default([]),
    // Contacts
    contacts: z.array(z.object({
        name: z.string(),
        position: z.string(),
        email: z.string().email("Email invalide").optional().or(z.literal("")),
    })).optional().default([]),
    // Risques
    risks: z.array(z.object({
        riskType: z.string(),
        probability: z.string(),
        impact: z.string(),
        description: z.string(),
        mitigation: z.string(),
    })).optional().default([]),
    // Recommandations
    recommendations: z.array(z.object({
        description: z.string(),
        priority: z.string(),
        responsible: z.string(),
        deadline: z.string(),
    })).optional().default([]),
    // Propriétés pour la page de couverture
    companyLogo: z.string().optional(),
    // Informations du document - avec valeur par défaut
    documentDiffusion: z.string().optional().default("Document Confidentiel"),
    // Propriétés pour les termes et définitions
    termsDefinitions: z.array(z.object({
        id: z.number(),
        term: z.string(),
        definition: z.string()
    })).optional().default([]),
    // Propriétés pour les références
    references: z.array(z.object({
        id: z.number(),
        title: z.string().optional(),
        author: z.string().optional(),
        year: z.string().optional(),
        description: z.string().optional(),
        url: z.string().optional(),
        fileUrl: z.string().optional()
    })).default([]),
    // Évaluations pour l'échantillonnage
    siteSamplingEvaluations: z.array(z.object({
        siteId: z.number(),
        operationsScore: z.number().min(1).max(3),
        sensitiveDataScore: z.number().min(1).max(3),
        complexityScore: z.number().min(1).max(3)
    })).optional().default([]),
});
