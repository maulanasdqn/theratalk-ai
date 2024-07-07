import { DefaultSession } from "next-auth";
import { TUser } from "./user";
import { TToken } from "./token";
import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
import { AdapterUser } from "next-auth/adapters";

declare module "next-auth/jwt" {
  interface JWT {
    user: Omit<TUser, "password">;
    token: TToken;
  }
}

declare module "next-auth" {
  interface Session {
    user: Omit<TUser, "password">;
  }
}
