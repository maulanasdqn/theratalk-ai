"use server";

import { users } from "@/libs/db/schema";
import { TResetForm } from "../_entities/schema";
import { db } from "@/libs/db/connection";
import { hashPassword } from "@/libs/auth/password";
import { eq } from "drizzle-orm";

export const resetAction = async (payload: TResetForm) => {
  try {
    const password = await hashPassword(payload.password);
    await db.update(users).set({ password }).where(eq(users.email, payload.email));
    return {
      success: {
        message: "Kata sandi berhasil direset",
      },
    };
  } catch (error) {
    return {
      error: {
        message: error,
      },
    };
  }
};
