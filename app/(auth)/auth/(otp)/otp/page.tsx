"use server";
import { NextPage } from "next";
import { ReactElement } from "react";
import { OTPFormModule } from "../_modules";

const AuthOTPPage: NextPage = (): ReactElement => {
  return <OTPFormModule />;
};

export default AuthOTPPage;
