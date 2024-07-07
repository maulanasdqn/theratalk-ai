import * as argon2 from "argon2-wasm-edge";

export const generateOtp = async () => {
  const otp = String(Math.floor(1000 + Math.random() * 9000));
  const salt = new Uint8Array(16);
  const otpHash = await argon2.argon2id({
    parallelism: 1,
    iterations: 256,
    memorySize: 512,
    hashLength: 32,
    outputType: "encoded",
    password: otp,
    salt,
  });
  return {
    otp,
    otpHash,
  };
};
