import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./libs/db/schema.ts",
  out: "./libs/db/migrations",
  dbCredentials: {
    url: process.env.AUTH_DRIZZLE_URL || "",
  },
});
