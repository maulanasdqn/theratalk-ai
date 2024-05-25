export type TOtpInput = {
  name?: string;
  setOtpValues: (value: string[]) => void;
  otpValues: string[];
};
