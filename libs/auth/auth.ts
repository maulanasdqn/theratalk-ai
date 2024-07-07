import NextAuth from "next-auth";
import { authConfig } from "./config";
import { TUser } from "@/types/user";
import { checkEmail, getUserData } from "./login";
import { db } from "../drizzle/connection";
import { users } from "../drizzle/schema";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        const isUserExist = await checkEmail(user?.email);
        if (!isUserExist) {
          await db.insert(users).values({
            fullname: user?.name as string,
            email: user?.email as string,
            image: user?.image as string,
            address: undefined,
            otp: undefined,
            password: undefined,
          });
          return `/auth/register?email=${user?.email}&fullname=${user?.name}&from=google`;
        }
        if (isUserExist) {
          const getUser = await getUserData(user?.email);
          const isEmailVerified = getUser?.emailVerified;
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
        const userData = await getUserData(user?.email);
        token.user = {
          id: userData?.id as string,
          fullname: userData?.fullname,
          image: userData?.image,
          email: String(userData?.email),
          emailVerified: userData?.emailVerified as Date,
          address: userData?.address,
          createdAt: userData?.createdAt,
          updatedAt: userData?.updatedAt,
        };
      }
      return token;
    },

    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
});
