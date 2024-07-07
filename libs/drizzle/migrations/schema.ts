import { pgTable, unique, uuid, text, timestamp } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"



export const app_user = pgTable("app_user", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	otp: text("otp"),
	fullname: text("fullname"),
	address: text("address"),
	password: text("password"),
	email: text("email").notNull(),
	emailVerified: timestamp("emailVerified", { mode: 'string' }),
	image: text("image").default('https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png'),
	createdAt: timestamp("createdAt", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updatedAt", { mode: 'string' }).defaultNow(),
},
(table) => {
	return {
		app_user_email_unique: unique("app_user_email_unique").on(table.email),
	}
});