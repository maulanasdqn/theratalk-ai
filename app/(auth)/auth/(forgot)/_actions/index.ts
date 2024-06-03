"use server";
import { db } from "@/libs/db/connection";
import { users } from "@/libs/db/schema";
import * as argon2 from "argon2";
import { sendOtpResetEmail } from "@/libs/email/send-otp-reset";
import { eq } from "drizzle-orm";

export const forgotAction = async (value: string) => {
  const otp = String(Math.floor(1000 + Math.random() * 9000));
  const otpHash = await argon2.hash(otp);
  try {
    await db.update(users).set({ otp: otpHash }).where(eq(users.email, value));
    await sendOtpResetEmail({ email: value, otp });
  } catch (error) {
    return {
      error: {
        code: 500,
        message: "Terjadi kesalahan" + error,
        type: "server",
      },
    };
  }
};
