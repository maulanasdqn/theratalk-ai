import { timestamp, pgTable, text, uuid } from "drizzle-orm/pg-core";

const defaultImage =
  "https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png";

export const users = pgTable("app_user", {
  id: uuid("id").defaultRandom().primaryKey(),
  otp: text("otp"),
  fullname: text("fullname"),
  address: text("address"),
  password: text("password"),
  email: text("email").notNull().unique(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image").default(defaultImage),
  createdAt: timestamp("createdAt", { mode: "date" }).defaultNow(),
  updatedAt: timestamp("updatedAt", { mode: "date" }).defaultNow(),
});
