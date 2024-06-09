import { z } from "zod";

export const schema = z.object({
  email: z
    .string({ required_error: "Email wajib diisi" })
    .min(1, { message: "Email wajib diisi" })
    .email({ message: "Email tidak valid" }),
});

export type TForgotForm = z.infer<typeof schema>;
