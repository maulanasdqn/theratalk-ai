import NextAuth from "next-auth";
import { authConfig } from "./config";
import { TUser } from "@/types/user";
import { checkEmail, getUser } from "./login";
import { db } from "../db/connection";
import { users } from "../db/schema";
import { redirect, useRouter } from "next/navigation";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  session: { strategy: "jwt" },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        const isUserExist = await checkEmail(user?.email as string);
        if (!isUserExist) {
          await db.insert(users).values({
            fullname: user?.name as string,
            email: user?.email as string,
            image: user?.image as string,
            address: undefined,
            otp: undefined,
            password: undefined,
          });
        }
        if (isUserExist) {
          const getUserData = await getUser(user?.email as string);
          const userData = getUserData as unknown as TUser;
          const isEmailVerified = userData.emailVerified;
          if (!isEmailVerified) {
            return `/auth/register?email=${user?.email}&fullname=${user?.name}&from=google`;
          }
          return true;
        }
      }
      if (!user) return false;
      return true;
    },

    async jwt({ token, user, account }) {
      if (account?.provider === "login") {
        const userData = user as TUser;
        token.user = {
          id: userData.id,
          fullname: userData.fullname,
          image: userData.image,
          email: userData.email,
          emailVerified: userData.emailVerified,
          address: userData.address,
          createdAt: userData.createdAt,
          updatedAt: userData.updatedAt,
        };
      }
      if (account?.provider === "google") {
        const isUserExist = await checkEmail(user?.email as string);
        if (!isUserExist) {
          const res = await db
            .insert(users)
            .values({
              fullname: user?.name as string,
              email: user?.email as string,
              image: user?.image as string,
              address: undefined,
              otp: undefined,
              password: undefined,
            })
            .returning();
          const userData = res[0] as unknown as TUser;
          token.user = {
            id: userData.id,
            fullname: userData.fullname,
            image: userData.image,
            email: userData.email,
            emailVerified: userData.emailVerified,
            address: userData.address,
            createdAt: userData.createdAt,
            updatedAt: userData.updatedAt,
          };
        }
        if (isUserExist) {
          const getUserData = await getUser(user?.email as string);
          const userData = getUserData as unknown as TUser;

          token.user = {
            id: userData.id,
            fullname: userData.fullname,
            image: userData.image,
            email: userData.email,
            emailVerified: userData.emailVerified,
            address: userData.address,
            createdAt: userData.createdAt,
            updatedAt: userData.updatedAt,
          };
        }
      }
      return token;
    },

    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
});
