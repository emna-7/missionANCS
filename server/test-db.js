import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Testing SQLite database connection...');

try {
  // Try to connect to the database
  const dbPath = path.join(__dirname, '..', 'data', 'database.sqlite');
  console.log('Database path:', dbPath);
  
  const db = new Database(dbPath);
  
  // Test basic connection
  const result = db.prepare('SELECT 1 as test').get();
  console.log('✅ Database connection successful:', result);
  
  // Check if tables exist
  const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
  console.log('📋 Existing tables:', tables.map(t => t.name));
  
  // Check missions table structure if it exists
  if (tables.some(t => t.name === 'missions')) {
    const missionColumns = db.prepare("PRAGMA table_info(missions)").all();
    console.log('📊 Missions table columns:', missionColumns.map(c => `${c.name} (${c.type})`));
    
    // Check if there are any missions
    const missionCount = db.prepare('SELECT COUNT(*) as count FROM missions').get();
    console.log('🔢 Number of missions in database:', missionCount.count);
  }
  
  db.close();
  console.log('✅ Database test completed successfully');
  
} catch (error) {
  console.error('❌ Database test failed:', error.message);
  console.error('Full error:', error);
  process.exit(1);
} 