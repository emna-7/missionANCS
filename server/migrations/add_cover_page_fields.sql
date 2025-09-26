-- Migration pour ajouter les champs de la page de couverture
-- Date: 2024-01-15

-- Ajouter les nouveaux champs à la table missions
ALTER TABLE missions 
ADD COLUMN IF NOT EXISTS auditee_logo TEXT,
ADD COLUMN IF NOT EXISTS auditor_logo TEXT,
ADD COLUMN IF NOT EXISTS auditor_signature TEXT,
ADD COLUMN IF NOT EXISTS auditor_name TEXT,
ADD COLUMN IF NOT EXISTS document_version TEXT,
ADD COLUMN IF NOT EXISTS document_date TEXT,
ADD COLUMN IF NOT EXISTS document_diffusion TEXT DEFAULT 'Document Confidentiel',
ADD COLUMN IF NOT EXISTS terms_definitions JSONB,
ADD COLUMN IF NOT EXISTS references JSONB;

-- Mettre à jour les missions existantes avec des valeurs par défaut
UPDATE missions 
SET document_diffusion = 'Document Confidentiel' 
WHERE document_diffusion IS NULL;
