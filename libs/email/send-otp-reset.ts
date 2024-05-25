"use server";
import { Resend } from "resend";
import { TSendEmail } from "./type";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendOtpResetEmail = async ({ email, otp }: TSendEmail) =>
  await resend.emails.send({
    from: "noreply <verfication@noreply.msdqn.dev>",
    to: [email],
    subject: "OTP Verification for Reset Password",
    text: `Your OTP is ${otp}`,
    tags: [
      {
        name: "category",
        value: "confirm_email",
      },
    ],
  });
