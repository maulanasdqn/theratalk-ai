"use server";
import { db } from "@/libs/db/connection";
import { TRegisterForm } from "../_entities/schema";
import { users } from "@/libs/db/schema";
import * as argon2 from "argon2";
import { sendOtpVerficationEmail } from "@/libs/email/send-otp";

export const registerAction = async (value: TRegisterForm) => {
  const password = await argon2.hash(value.password);
  const otp = String(Math.floor(1000 + Math.random() * 9000));
  const otpHash = await argon2.hash(otp);
  try {
    await db.insert(users).values({
      ...value,
      otp: otpHash,
      password,
    });
    await sendOtpVerficationEmail({ email: value.email, otp });
  } catch (error) {
    const err = error as { code: string };
    if (err?.code === "23505") {
      return {
        error: {
          code: 409,
          message: "Email sudah digunakan",
          type: "email",
        },
      };
    } else {
      return {
        error: {
          code: 500,
          message: "Terjadi kesalahan",
          type: "server",
        },
      };
    }
  }
};
