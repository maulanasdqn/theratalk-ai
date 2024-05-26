"use server";
import { signIn } from "@/libs/auth/auth";

export const loginByGoogle = async () => {
  try {
    const res = await signIn("google");
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
