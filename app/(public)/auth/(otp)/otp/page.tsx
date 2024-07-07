"use server";
import { NextPage } from "next";
import { ReactElement } from "react";
import { OTPFormModule } from "../_modules";

const AuthOTPPage: NextPage = async (): Promise<ReactElement> => {
  return <OTPFormModule />;
};

export default AuthOTPPage;
