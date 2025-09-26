import { db, dbInitialized } from './database';
import * as schema from '../shared/schema';

export async function initializeDatabase() {
  if (!dbInitialized || !db) {
    console.log('Database not available, skipping initialization');
    return false;
  }

  try {
    console.log('Initializing database...');
    
    // Check if tables exist
    const tables = await db.select().from(schema.missions).limit(1).catch(() => []);
    
    if (tables.length === 0) {
      console.log('Tables do not exist, creating schema...');
      // The schema should be created by Drizzle migrations
      // For now, we'll just verify the connection
      await db.select().from(schema.missions).limit(1);
      console.log('Database schema verified');
    } else {
      console.log('Database tables already exist');
    }
    
    return true;
  } catch (error) {
    console.error('Error initializing database:', error);
    return false;
  }
}

// Run initialization if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  initializeDatabase().then(success => {
    if (success) {
      console.log('Database initialization completed successfully');
      process.exit(0);
    } else {
      console.error('Database initialization failed');
      process.exit(1);
    }
  });
} 