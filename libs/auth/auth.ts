import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { authConfig } from "./config";
import { db } from "@/libs/db/connection";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  adapter: DrizzleAdapter(db),
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account?.provider === "google") {
        token.user = {
          id: user.id as string,
          fullname: user.name as string,
          image: user.image as string,
          email: user.email as string,
          emailVerified: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
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
