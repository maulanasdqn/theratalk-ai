"use server";
import { Resend } from "resend";
import { TSendLinkReset } from "./type";

const resend = new Resend(process.env.RESEND_API_KEY);
const appUrl = process.env.NEXT_PUBLIC_APP_URL;

export const sendLinkResetEmail = async (payload: TSendLinkReset) =>
  await resend.emails.send({
    from: "noreply <verfication@noreply.msdqn.dev>",
    to: [payload.email],
    subject: "Link Reset Password",
    text: `Your password reset link is ${appUrl}/auth/${payload.token}/reset?email=${payload.email}`,
    tags: [
      {
        name: "category",
        value: "reset_password",
      },
    ],
  });
