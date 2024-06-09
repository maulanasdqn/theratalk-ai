import { z } from "zod";

export const schema = z
  .object({
    password: z
      .string({ required_error: "Kata sandi wajib diisi" })
      .min(1, { message: "Kata sandi wajib diisi" })
      .min(8, { message: "Kata sandi minimal 8 karakter" })
      .max(255, { message: "Kata sandi maksimal 255 karakter" }),
    confirmPassword: z
      .string({ required_error: "Konfirmasi Kata sandi wajib diisi" })
      .min(1, { message: "Konfirmasi Kata sandi wajib diisi" })
      .min(8, { message: "Konfirmasi Kata sandi minimal 8 karakter" })
      .max(255, { message: "Konfirmasi Kata sandi maksimal 255 karakter" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Konfirmasi Kata sandi tidak sama dengan kata sandi",
    path: ["confirmPassword"],
  });

export type TResetForm = z.infer<typeof schema> & { email: string; token: string };
