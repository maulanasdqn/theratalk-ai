"use server";
import { NextPage } from "next";
import { ReactElement } from "react";
import { LoginFormModule } from "../_modules";

const AuthLoginPage: NextPage = (): ReactElement => {
  return <LoginFormModule />;
};

export default AuthLoginPage;
