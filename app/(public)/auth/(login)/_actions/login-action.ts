"use server";

import { signIn, signOut } from "@/libs/auth/auth";
import { TLoginForm } from "../_entities/schema";

export const loginByCredentials = async (payload: TLoginForm) => {
  return await signIn("credentials", {
    redirect: false,
    email: payload.email,
    password: payload.password,
  });
};

export const loginByGoogle = async () => {
  return await signIn("google", {
    redirect: true,
  });
};

export const logout = async () => {
  return await signOut();
};
