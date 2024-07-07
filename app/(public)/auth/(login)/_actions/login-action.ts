"use server";

import { signIn } from "@/libs/auth/auth";
import { TLoginForm } from "../_entities/schema";

export const loginByCredentials = async (payload: TLoginForm) => {
  try {
    await signIn("login", {
      redirect: false,
      email: payload.email,
      password: payload.password,
    });
    return {
      success: {
        message: "Login successfully",
      },
    };
  } catch (err) {
    const error = err as Error;
    return {
      error: {
        message: error.message.split(".").at(0),
      },
    };
  }
};

export const loginByGoogle = async () => {
  return await signIn("google", {
    redirect: true,
  });
};
