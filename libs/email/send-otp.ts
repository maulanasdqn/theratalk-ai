"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type TSendOtpEmail = {
  email: string;
  otp: string;
};

export const sendOtpVerficationEmail = async ({ email, otp }: TSendOtpEmail) =>
  await resend.emails.send({
    from: "noreply <verfication@noreply.msdqn.dev>",
    to: [email],
    subject: "OTP Verification",
    text: `Your OTP is ${otp}`,
    tags: [
      {
        name: "category",
        value: "confirm_email",
      },
    ],
  });
