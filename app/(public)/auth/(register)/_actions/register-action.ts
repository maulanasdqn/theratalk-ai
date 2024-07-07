"use server";
import { db } from "@/libs/drizzle/connection";
import { users } from "@/libs/drizzle/schema";
import { TRegisterForm } from "../_entities/schema";
import { sendOtpVerficationEmail } from "@/libs/resend/send-otp";
import { generateOtp } from "@/libs/auth/otp";
import { hashPassword } from "@/libs/auth/password";
import { eq } from "drizzle-orm";

export const registerAction = async (value: TRegisterForm, from?: string | null) => {
  const password = await hashPassword(value.password);
  const { otp, otpHash } = await generateOtp();
  try {
    if (!from) {
      await db.insert(users).values({
        ...value,
        otp: otpHash,
        password,
      });
      await sendOtpVerficationEmail({ email: value.email, otp });
      return {
        success: {
          message: "Pendaftaran berhasil, silahkan cek email anda",
        },
      };
    }

    if (from === "google") {
      await db
        .update(users)
        .set({
          ...value,
          otp: otpHash,
          password,
        })
        .where(eq(users.email, value.email));
      await sendOtpVerficationEmail({ email: value.email, otp });
      return {
        success: {
          message: "Pendaftaran berhasil, silahkan cek email anda",
        },
      };
    }
  } catch (error) {
    const err = error as { code: string };
    if (err?.code === "23505") {
      return {
        error: {
          message: "Email sudah digunakan",
        },
      };
    } else {
      return {
        error: {
          message: "Terjadi kesalahan",
        },
      };
    }
  }
};
