import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString = process.env.AUTH_DRIZZLE_URL || "";
const pool = postgres(connectionString, { max: 1 });

export const db = drizzle(pool);
