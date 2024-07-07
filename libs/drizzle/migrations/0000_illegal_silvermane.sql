CREATE TABLE IF NOT EXISTS "app_user" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"otp" text,
	"fullname" text,
	"address" text,
	"password" text,
	"email" text NOT NULL,
	"emailVerified" timestamp,
	"image" text DEFAULT 'https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png',
	CONSTRAINT "app_user_email_unique" UNIQUE("email")
);
