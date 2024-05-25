import { z } from "zod";

export const schema = z
  .object({
    email: z
      .string({ required_error: "Email wajib diisi" })
      .min(1, { message: "Email wajib diisi" })
      .email({ message: "Email tidak valid" }),
    fullname: z
      .string({ required_error: "Nama lengkap wajib diisi" })
      .min(1, { message: "Nama lengkap wajib diisi" }),
    address: z
      .string({ required_error: "Alamat lengkap wajib diisi" })
      .min(1, { message: "Alamat lengkap wajib diisi" }),
    password: z
      .string({ required_error: "Kata sandi wajib diisi" })
      .min(1, { message: "Kata sandi wajib diisi" })
      .min(6, { message: "Kata sandi minimal 6 karakter" }),
    confirmPassword: z
      .string({ required_error: "Konfirmasi Kata sandi wajib diisi" })
      .min(1, { message: "Konfirmasi Kata sandi wajib diisi" })
      .min(6, { message: "Konfirmasi Kata sandi minimal 6 karakter" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Kata sandi tidak sama",
    path: ["confirmPassword"],
  });

export type TRegisterForm = z.infer<typeof schema>;
