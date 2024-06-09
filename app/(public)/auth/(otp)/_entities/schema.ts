import { z } from "zod";

export const schema = z.object({
  otp: z.string().min(4).max(4),
});

export type TOTPForm = z.infer<typeof schema> & { email: string; type: string };
