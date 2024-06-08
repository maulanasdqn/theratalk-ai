import * as argon2 from "argon2";

export const generateOtp = async () => {
  const otp = String(Math.floor(1000 + Math.random() * 9000));
  const otpHash = await argon2.hash(otp);
  return {
    otp,
    otpHash,
  };
};
