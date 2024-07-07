import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./libs/drizzle/schema.ts",
  out: "./libs/drizzle/migrations",
  dbCredentials: {
    url: process.env.AUTH_DRIZZLE_URL || "",
  },
});
