"use server";
import { db } from "@/libs/db/connection";
import { TRegisterForm } from "../_entities/schema";
import { users } from "@/libs/db/schema";
import * as argon2 from "argon2";
import { sendOtpVerficationEmail } from "@/libs/email/send-otp";
import { generateOtp } from "@/libs/otp/generate";

export const registerAction = async (value: TRegisterForm) => {
  const password = await argon2.hash(value.password);
  const { otp, otpHash } = await generateOtp();
  try {
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
