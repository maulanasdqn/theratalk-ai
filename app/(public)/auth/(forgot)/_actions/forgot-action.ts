"use server";
import { db } from "@/libs/db/connection";
import { users } from "@/libs/db/schema";
import { sendLinkResetEmail } from "@/libs/email/send-link-reset";
import { generateOtp } from "@/libs/otp/generate";
import { eq } from "drizzle-orm";

export const forgotAction = async (value: string) => {
  const { otp, otpHash } = await generateOtp();
  try {
    await db.update(users).set({ otp: otpHash }).where(eq(users.email, value));
    await sendLinkResetEmail({ email: value, token: otp });
    return {
      success: {
        message: "Link reset password sudah kirim",
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
