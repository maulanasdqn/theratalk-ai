"use server";
import { db } from "@/libs/db/connection";
import { users } from "@/libs/db/schema";
import { sendOtpResetEmail } from "@/libs/email/send-otp-reset";
import { generateOtp } from "@/libs/otp/generate";
import { eq } from "drizzle-orm";

export const forgotAction = async (value: string) => {
  const { otp, otpHash } = await generateOtp();
  try {
    await db.update(users).set({ otp: otpHash }).where(eq(users.email, value));
    await sendOtpResetEmail({ email: value, otp });
    return {
      success: {
        message: "OTP terkirim",
      },
    };
  } catch (error) {
    return {
      error: {
        message: `Terjadi kesalahan ${error}`,
      },
    };
  }
};
