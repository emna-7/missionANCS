import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, '../data/database.sqlite');
const db = new Database(dbPath);

console.log('🔧 Initialisation de la base de données SQLite...');

// Créer les tables
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    full_name TEXT,
    email TEXT,
    role TEXT DEFAULT 'user'
  );

  CREATE TABLE IF NOT EXISTS missions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    company_name TEXT NOT NULL,
    company_type TEXT,
    registration_number TEXT,
    creation_date TEXT,
    address TEXT,
    activity_sector TEXT,
    confidentiality_options TEXT,
    version_history TEXT,
    auditor_contacts TEXT,
    audited_org_contacts TEXT,
    legal_framework_text TEXT,
    legal_framework_reference TEXT,
    audit_type TEXT,
    mission_objective TEXT,
    iso_prep_certification TEXT,
    iso_standards TEXT,
    audit_limitations TEXT,
    org_name TEXT,
    org_logo TEXT,
    org_business_activity TEXT,
    org_creation_date TEXT,
    org_contact_info TEXT,
    org_website TEXT,
    business_processes TEXT,
    security_requirements TEXT,
    cia_matrix TEXT,
    geographic_perimeter TEXT,
    operations_impact TEXT,
    sensitive_data TEXT,
    infrastructure_complexity TEXT,
    sampling_criteria TEXT,
    systems_description TEXT,
    site_sampling_evaluations TEXT,
    applications TEXT,
    network_infrastructure TEXT,
    workstations TEXT,
    servers TEXT,
    security_domains TEXT,
    security_measures_maturity TEXT,
    audit_tools TEXT,
    audit_checklists TEXT,
    audit_team TEXT,
    organization_team TEXT,
    mission_planning TEXT,
    annual_revenue REAL,
    profit_margin REAL,
    total_assets REAL,
    total_debts REAL,
    financial_ratios TEXT,
    financial_comments TEXT,
    compliance_status TEXT,
    governance_structure TEXT,
    observations TEXT,
    follow_up_date TEXT,
    follow_up_responsible TEXT,
    follow_up_details TEXT,
    auditee_logo TEXT,
    auditor_logo TEXT,
    auditor_signature TEXT,
    auditor_name TEXT,
    document_version TEXT,
    document_date TEXT,
    document_diffusion TEXT,
    terms_definitions TEXT,
    refs TEXT,
    status TEXT DEFAULT 'draft',
    progress INTEGER DEFAULT 0,
    created_at INTEGER DEFAULT 0,
    updated_at INTEGER DEFAULT 0,
    created_by INTEGER
  );

  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    mission_id INTEGER NOT NULL,
    name TEXT NOT NULL,
    position TEXT,
    email TEXT
  );

  CREATE TABLE IF NOT EXISTS risks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    mission_id INTEGER NOT NULL,
    risk_type TEXT NOT NULL,
    probability TEXT NOT NULL,
    impact TEXT NOT NULL,
    description TEXT,
    mitigation TEXT
  );

  CREATE TABLE IF NOT EXISTS recommendations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    mission_id INTEGER NOT NULL,
    description TEXT NOT NULL,
    priority TEXT NOT NULL,
    responsible TEXT,
    deadline TEXT
  );
`);

// Insérer des données de test
const testMission = db.prepare(`
  INSERT OR IGNORE INTO missions (id, title, company_name, status, progress, audit_type, activity_sector)
  VALUES (1, 'Audit de sécurité ANCS - Entreprise ABC', 'Entreprise ABC', 'En cours', 75, 'Sécurité informatique', 'Technologie')
`);

testMission.run();

console.log('✅ Base de données initialisée avec succès !');
console.log('📊 Tables créées : users, missions, contacts, risks, recommendations');
console.log('🧪 Données de test insérées');

db.close(); 