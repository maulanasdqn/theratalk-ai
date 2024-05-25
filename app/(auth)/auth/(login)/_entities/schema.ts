import { z } from "zod";

export const schema = z.object({
  email: z
    .string({ required_error: "Email wajib diisi" })
    .min(1, { message: "Email wajib diisi" })
    .email({ message: "Email tidak valid" }),
  password: z.string({ required_error: "Kata sandi wajib diisi" }).min(1, {
    message: "Kata sandi wajib diisi",
  }),
});

export type TLoginForm = z.infer<typeof schema>;
