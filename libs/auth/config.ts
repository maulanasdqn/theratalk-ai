import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { checkEmail, checkPassword, getUser } from "./login";

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
        if (!credentials?.email || !credentials.password) {
          throw "Email dan Password wajib diisi";
        }

        const isUserExist = await checkEmail(String(credentials.email));

        if (!isUserExist) {
          throw "Akun tidak terdaftar";
        }

        const isPasswordCorrect = await checkPassword(
          String(credentials.password),
          String(credentials.email),
        );

        if (!isPasswordCorrect) {
          throw "Email atau Kata sandi tidak valid";
        }

        const user = await getUser(String(credentials.email));

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
