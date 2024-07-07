"use server";
import { Resend } from "resend";
import { TSendOtp } from "./type";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendOtpVerficationEmail = async (payload: TSendOtp) =>
  await resend.emails.send({
    from: "noreply <verfication@noreply.msdqn.dev>",
    to: [payload.email],
    subject: "OTP Verification",
    text: `Your OTP is ${payload.otp}`,
    tags: [
      {
        name: "category",
        value: "confirm_email",
      },
    ],
  });
