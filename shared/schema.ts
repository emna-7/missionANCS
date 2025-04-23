import { pgTable, text, serial, integer, boolean, jsonb, timestamp, varchar, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
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

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  fullName: true,
  email: true,
  role: true,
});

// Contact schema for mission contacts
export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  missionId: integer("mission_id").notNull(),
  name: text("name").notNull(),
  position: text("position"),
  email: text("email"),
});

export const insertContactSchema = createInsertSchema(contacts).pick({
  missionId: true,
  name: true,
  position: true,
  email: true,
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

export const insertRiskSchema = createInsertSchema(risks).pick({
  missionId: true,
  riskType: true,
  probability: true,
  impact: true,
  description: true,
  mitigation: true,
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

export const insertRecommendationSchema = createInsertSchema(recommendations).pick({
  missionId: true,
  description: true,
  priority: true,
  responsible: true,
  deadline: true,
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
  
  // Champ d'audit - Applications
  applications: jsonb("applications"),
  
  // Champ d'audit - Infrastructure réseau et sécurité
  networkInfrastructure: jsonb("network_infrastructure"),
  
  // Champ d'audit - Postes de travail
  workstations: jsonb("workstations"),
  
  // Champ d'audit - Serveurs
  servers: jsonb("servers"),
  
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
  
  // Status and metadata
  status: text("status").default("draft"),
  progress: integer("progress").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  createdBy: integer("created_by"),
});

export const insertMissionSchema = createInsertSchema(missions).omit({ 
  id: true,
  createdAt: true,
  updatedAt: true 
});

// Define types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type Contact = typeof contacts.$inferSelect;
export type InsertContact = z.infer<typeof insertContactSchema>;

export type Risk = typeof risks.$inferSelect;
export type InsertRisk = z.infer<typeof insertRiskSchema>;

export type Recommendation = typeof recommendations.$inferSelect;
export type InsertRecommendation = z.infer<typeof insertRecommendationSchema>;

export type Mission = typeof missions.$inferSelect;
export type InsertMission = z.infer<typeof insertMissionSchema>;

// Form data validation schema for frontend (extends the insert schema)
export const missionFormSchema = insertMissionSchema.extend({
  // Avant propos - Confidentiality options
  confidentialityOptions: z.object({
    noDisclosure: z.boolean().default(false),
    noReproduction: z.boolean().default(false),
    noPersonalUse: z.boolean().default(false),
    noCommercialUse: z.boolean().default(false),
  }).optional(),
  
  // Avant propos - Version history
  versionHistory: z.array(
    z.object({
      version: z.string(),
      date: z.string(),
      author: z.string(),
      changes: z.string(),
    })
  ).optional().default([
    { version: "1.0", date: new Date().toLocaleDateString('fr-FR'), author: "", changes: "Création du rapport" }
  ]),
  
  // Avant propos - Auditor contacts
  auditorContacts: z.array(
    z.object({
      name: z.string(),
      firstName: z.string(),
      title: z.string(),
      phone: z.string(),
      email: z.string().email("Email invalide").optional().or(z.literal("")),
    })
  ).optional().default([]),
  
  // Avant propos - Audited organization contacts
  auditedOrgContacts: z.array(
    z.object({
      name: z.string(),
      firstName: z.string(),
      title: z.string(),
      phone: z.string(),
      email: z.string().email("Email invalide").optional().or(z.literal("")),
    })
  ).optional().default([]),
  
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
  businessProcesses: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      description: z.string().optional(),
      dataType: z.string().optional(),
    })
  ).optional().default([]),
  
  // Exigences de sécurité
  securityRequirements: z.array(
    z.object({
      processId: z.number(),
      processName: z.string(),
      confidentiality: z.number().min(1).max(3),
      integrity: z.number().min(1).max(3),
      availability: z.number().min(1).max(3),
      comments: z.string().optional(),
    })
  ).optional().default([]),
  
  // CIA Matrix
  ciaMatrix: z.object({
    confidentiality: z.array(
      z.object({
        level: z.number(),
        name: z.string(),
        description: z.string(),
      })
    ).optional().default([
      { level: 1, name: "Faible", description: "Information publique, diffusion sans restriction." },
      { level: 2, name: "Moyen", description: "Restreint au personnel interne et partenaires autorisés." },
      { level: 3, name: "Élevé", description: "Très restreint, accès limité aux personnes expressément autorisées." }
    ]),
    integrity: z.array(
      z.object({
        level: z.number(),
        name: z.string(),
        description: z.string(),
      })
    ).optional().default([
      { level: 1, name: "Faible", description: "Modifications mineures acceptables, impact limité." },
      { level: 2, name: "Moyen", description: "Les erreurs tolérables si détectées, données vérifiées par processus." },
      { level: 3, name: "Élevé", description: "Aucune erreur tolérée, vérification avancée requise." }
    ]),
    availability: z.array(
      z.object({
        level: z.number(),
        name: z.string(),
        description: z.string(),
      })
    ).optional().default([
      { level: 1, name: "Faible", description: "Indisponibilité tolérable, peu d'impact opérationnel." },
      { level: 2, name: "Moyen", description: "Disponible aux heures ouvrées avec interruptions planifiées." },
      { level: 3, name: "Élevé", description: "Haute disponibilité requise 24/7, temps d'arrêt minimal." }
    ])
  }).optional().default({}),
  
  // Champ d'audit - Périmètre géographique
  geographicPerimeter: z.array(
    z.object({
      id: z.number(),
      site: z.string(),
      structure: z.string(),
      location: z.string()
    })
  ).optional().default([]),
  
  // Champ d'audit - Impacts et complexité
  operationsImpact: z.string().optional(),
  sensitiveData: z.string().optional(),
  infrastructureComplexity: z.string().optional(),
  samplingCriteria: z.string().optional(),
  systemsDescription: z.string().optional(),
  
  // Champ d'audit - Applications
  applications: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      modules: z.string(),
      description: z.string().optional(),
      environment: z.string().optional(),
      developedBy: z.string().optional(),
      ipAddresses: z.string().optional(),
      userCount: z.number().optional()
    })
  ).optional().default([]),
  
  // Champ d'audit - Infrastructure réseau et sécurité
  networkInfrastructure: z.array(
    z.object({
      id: z.number(),
      type: z.string(),
      brand: z.string(),
      model: z.string(),
      quantity: z.number(),
      managedBy: z.string(),
      observations: z.string().optional(),
      inAuditPerimeter: z.boolean(),
      exclusionJustification: z.string().optional()
    })
  ).optional().default([]),
  
  // Champ d'audit - Postes de travail
  workstations: z.array(
    z.object({
      id: z.number(),
      system: z.string(),
      count: z.number(),
      inAuditPerimeter: z.boolean(),
      exclusionJustification: z.string().optional()
    })
  ).optional().default([]),
  
  // Champ d'audit - Serveurs
  servers: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      ipAddress: z.string(),
      type: z.string(),
      system: z.string(),
      role: z.string(),
      inAuditPerimeter: z.boolean(),
      exclusionJustification: z.string().optional()
    })
  ).optional().default([]),

  // Original fields
  contacts: z.array(
    z.object({
      name: z.string().min(1, "Le nom est requis"),
      position: z.string().optional(),
      email: z.string().email("Email invalide").optional().or(z.literal("")),
    })
  ).optional(),
  risks: z.array(
    z.object({
      riskType: z.string().min(1, "Le type de risque est requis"),
      probability: z.string().min(1, "La probabilité est requise"),
      impact: z.string().min(1, "L'impact est requis"),
      description: z.string().optional(),
      mitigation: z.string().optional(),
    })
  ).optional(),
  recommendations: z.array(
    z.object({
      description: z.string().min(1, "La description est requise"),
      priority: z.string().min(1, "La priorité est requise"),
      responsible: z.string().optional(),
      deadline: z.string().optional(),
    })
  ).optional(),
});

export type MissionFormData = z.infer<typeof missionFormSchema>;
