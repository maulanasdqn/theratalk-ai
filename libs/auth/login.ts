"use server";
import "server-only";
import { eq } from "drizzle-orm";
import { db } from "../db/connection";
import { users } from "../db/schema";
import { verifyPassword } from "./password";
import { signOut } from "./auth";

export const checkEmail = async (email: string) => {
  try {
    const res = await db
      .select({ email: users.email })
      .from(users)
      .where(eq(users.email, email))
      .then((res) => res.length > 0);
    return res;
  } catch (err) {
    throw err;
  }
};

export const checkPassword = async (password: string, email: string) => {
  try {
    const hashedPassword = await db
      .select({ password: users.password })
      .from(users)
      .where(eq(users.email, email))
      .then((res) => res.at(0)?.password);

    if (hashedPassword) {
      const comparePassword = await verifyPassword(password, String(hashedPassword));
      return comparePassword;
    }
  } catch (err) {
    throw err;
  }
};

export const getUser = async (email: string) => {
  try {
    const res = (await db.select().from(users).where(eq(users.email, email))).at(0);
    return res;
  } catch (err) {
    throw err;
  }
};

export const logout = async () => {
  return await signOut({
    redirect: true,
    redirectTo: "/auth/login",
  });
};
