import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { checkEmail, checkPassword, getUserData } from "./login";
import type { NextAuthConfig } from "next-auth";
import { schema } from "@/app/(public)/auth/(login)/_entities/schema";

export const authConfig = {
  providers: [
    Google,
    CredentialsProvider({
      id: "login",
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Masukkan email" },
        password: { label: "Password", type: "password", placeholder: "*********" },
      },
      async authorize(credentials) {
        const { data } = schema.safeParse(credentials);

        if (!data?.email || !data?.password) {
          throw "Email dan Password wajib diisi";
        }

        const isUserExist = await checkEmail(data?.email);

        if (!isUserExist) {
          throw "Akun tidak terdaftar";
        }

        const isPasswordCorrect = await checkPassword(data?.password, data?.email);

        if (!isPasswordCorrect) {
          throw "Email atau Kata sandi tidak valid";
        }

        const user = await getUserData(data?.email);

        const isEmailVerified = user?.emailVerified;

        if (!isEmailVerified) {
          throw "Email belum terverifikasi";
        }

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
} satisfies NextAuthConfig;
