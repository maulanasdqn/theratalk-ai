"use server";
import { generateToken } from "@/libs/auth/token";
import { sendLinkResetEmail } from "@/libs/resend/send-link-reset";
import { db } from "@/libs/drizzle/connection";
import { users } from "@/libs/drizzle/schema";
import { eq } from "drizzle-orm";

export const forgotAction = async (value: string) => {
  if (!value) {
    return {
      error: {
        message: "Email harus diisi",
      },
    };
  }

  const isEmailExist = await db
    .select({ email: users.email })
    .from(users)
    .where(eq(users.email, value))
    .limit(1)
    .then((data) => {
      return data.length > 0;
    });

  const token = await generateToken({ email: value, id: value });

  try {
    if (isEmailExist) {
      await sendLinkResetEmail({ email: value, token });
      return {
        success: {
          message: "Link reset password sudah kirim",
        },
      };
    }

    return {
      error: {
        message: "Email tidak ditemukan",
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
