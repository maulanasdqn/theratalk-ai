import { authConfig } from "@/libs/auth/config";
import NextAuth from "next-auth";
export const { auth: middleware } = NextAuth(authConfig);
