"use server";

import { db } from "@/libs/db/connection";
import { TOTPForm } from "../_entities/schema";
import { users } from "@/libs/db/schema";
import { eq } from "drizzle-orm";
import * as argon2 from "argon2";

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
    const otpHash = await argon2.verify(otp, value.otp);
    if (otpHash) {
      await db.update(users).set({ otp: null }).where(eq(users.email, value.email));
      await db.update(users).set({ emailVerified: new Date() }).where(eq(users.email, value.email));
      return {
        success: {
          message: "OTP verified successfully",
        },
      };
    }
  } catch (error) {
    return {
      error: {
        message: "OTP verification failed",
      },
    };
  }
};
