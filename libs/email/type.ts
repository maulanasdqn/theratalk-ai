export type TSendOtp = {
  email: string;
  otp: string;
};

export type TSendLinkReset = {
  email: string;
  token: string;
};
