import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Starting data migration from JSON to SQLite...');

try {
  // Connect to database
  const dbPath = path.join(__dirname, '..', 'data', 'database.sqlite');
  const db = new Database(dbPath);
  
  // Check if missions table exists and has data
  const missionCount = db.prepare('SELECT COUNT(*) as count FROM missions').get();
  console.log(`Current missions in database: ${missionCount.count}`);
  
  if (missionCount.count === 0) {
    console.log('No missions in database, checking JSON files...');
    
    // Read missions from JSON file
    const missionsPath = path.join(__dirname, '..', 'data', 'missions.json');
    if (fs.existsSync(missionsPath)) {
      const missionsData = JSON.parse(fs.readFileSync(missionsPath, 'utf8'));
      console.log(`Found ${missionsData.length} missions in JSON file`);
      
      // Insert missions into database
      const insertMission = db.prepare(`
        INSERT INTO missions (
          title, company_name, company_type, registration_number, creation_date,
          address, activity_sector, status, progress, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `);
      
      let insertedCount = 0;
      for (const mission of missionsData) {
        try {
          const result = insertMission.run(
            mission.title || 'Mission sans titre',
            mission.companyName || 'Entreprise non spécifiée',
            mission.companyType || null,
            mission.registrationNumber || null,
            mission.creationDate || null,
            mission.address || null,
            mission.activitySector || null,
            mission.status || 'draft',
            mission.progress || 0,
            Date.now(),
            Date.now()
          );
          
          if (result.changes > 0) {
            insertedCount++;
            console.log(`✅ Inserted mission: ${mission.title || 'Mission sans titre'}`);
          }
        } catch (error) {
          console.error(`❌ Failed to insert mission:`, error.message);
        }
      }
      
      console.log(`🎉 Successfully migrated ${insertedCount} missions to database`);
    } else {
      console.log('No missions.json file found');
    }
  } else {
    console.log('Database already has missions, skipping migration');
  }
  
  // Check contacts
  const contactCount = db.prepare('SELECT COUNT(*) as count FROM contacts').get();
  console.log(`Current contacts in database: ${contactCount.count}`);
  
  if (contactCount.count === 0) {
    const contactsPath = path.join(__dirname, '..', 'data', 'contacts.json');
    if (fs.existsSync(contactsPath)) {
      const contactsData = JSON.parse(fs.readFileSync(contactsPath, 'utf8'));
      console.log(`Found ${contactsData.length} contacts in JSON file`);
      
      const insertContact = db.prepare(`
        INSERT INTO contacts (mission_id, name, position, email) VALUES (?, ?, ?, ?)
      `);
      
      let insertedCount = 0;
      for (const contact of contactsData) {
        try {
          const result = insertContact.run(
            contact.missionId || 1,
            contact.name || 'Contact sans nom',
            contact.position || null,
            contact.email || null
          );
          
          if (result.changes > 0) {
            insertedCount++;
          }
        } catch (error) {
          console.error(`❌ Failed to insert contact:`, error.message);
        }
      }
      
      console.log(`🎉 Successfully migrated ${insertedCount} contacts to database`);
    }
  }
  
  db.close();
  console.log('✅ Data migration completed successfully');
  
} catch (error) {
  console.error('❌ Data migration failed:', error.message);
  console.error('Full error:', error);
  process.exit(1);
} 