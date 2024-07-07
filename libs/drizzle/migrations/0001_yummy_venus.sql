ALTER TABLE "app_user" ADD COLUMN "createdAt" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "app_user" ADD COLUMN "updatedAt" timestamp DEFAULT now();