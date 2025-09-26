import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from '../shared/schema';

// Create SQLite database with better error handling
let sqlite: Database.Database | undefined;
let db: ReturnType<typeof drizzle> | undefined;
let dbInitialized = false;

try {
  sqlite = new Database(process.env.DATABASE_URL || './data/database.sqlite');
  
  // Test the database connection and create tables if needed
  sqlite.prepare('SELECT 1').get();
  
  // Initialize database with schema if needed
  const tableExists = sqlite.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='missions'").get();
  if (!tableExists) {
    console.log('Creating database tables...');
    // You can run migrations here if needed
  }
  
  db = drizzle(sqlite, { schema });
  dbInitialized = true;
  console.log('SQLite database connected successfully');
} catch (error) {
  console.error('Database connection error:', error);
  console.log('Database not available');
  dbInitialized = false;
}

export { db, dbInitialized, sqlite }; 