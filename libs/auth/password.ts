"use server";
import "server-only";
import * as argon2 from "argon2";

export const hashPassword = async (password: string) => {
  const hashedPassword = await argon2.hash(password);
  return hashedPassword;
};

export const verifyPassword = async (password: string, hashedPassword: string) => {
  const isValid = await argon2.verify(hashedPassword, password);
  return isValid;
};
