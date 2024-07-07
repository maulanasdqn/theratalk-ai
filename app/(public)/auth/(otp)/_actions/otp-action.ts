"use server";

import { db } from "@/libs/drizzle/connection";
import { TOTPForm } from "../_entities/schema";
import { users } from "@/libs/drizzle/schema";
import { eq } from "drizzle-orm";
import * as argon2 from "argon2-wasm-edge";

export const otpVerification = async (value: TOTPForm) => {
  try {
    const otp =
      (await db
        .select({
          otp: users.otp,
        })
        .from(users)
        .where(eq(users.email, value.email))
        .then((res) => {
          return res?.at(0)?.otp;
        })) || "";
    const otpHash = await argon2.argon2Verify({
      hash: otp,
      password: value.otp,
    });
    if (otpHash) {
      await db.update(users).set({ otp: null }).where(eq(users.email, value.email));
      await db.update(users).set({ emailVerified: new Date() }).where(eq(users.email, value.email));
      return {
        success: {
          message: "Berhasil memverifikasi akun",
        },
      };
    }

    if (!otpHash) {
      return {
        error: {
          message: "Gagal memverifikasi akun",
        },
      };
    }
  } catch (error) {
    return {
      error: {
        message: "Gagal memverifikasi akun",
      },
    };
  }
};
