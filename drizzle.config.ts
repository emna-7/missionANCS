import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

config();

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: process.env.DATABASE_URL || "data/database.sqlite",
  },
  verbose: true,
  strict: true,
});