"use server";

import { users } from "@/libs/drizzle/schema";
import { db } from "@/libs/drizzle/connection";
import { TResetForm } from "../_entities/schema";
import { hashPassword } from "@/libs/auth/password";
import { eq } from "drizzle-orm";
import { verifyToken } from "@/libs/auth/token";

export const resetAction = async (payload: TResetForm) => {
  try {
    const password = await hashPassword(payload.password);
    const verify = await verifyToken(payload.token);

    if (verify.email === payload.email) {
      await db.update(users).set({ password }).where(eq(users.email, payload.email));
      return {
        success: {
          message: "Kata sandi berhasil direset",
        },
      };
    }

    return {
      error: {
        message: "Kata sandi gagal direset",
      },
    };
  } catch (error) {
    const err = error as Error;
    return {
      error: {
        message: err?.message,
      },
    };
  }
};
