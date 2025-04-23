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
