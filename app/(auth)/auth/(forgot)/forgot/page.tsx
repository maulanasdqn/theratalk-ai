"use server";
import { NextPage } from "next";
import { ReactElement } from "react";
import { ForgotFormModule } from "../_modules/form-module";

const AuthForgotPage: NextPage = (): ReactElement => {
  return <ForgotFormModule />;
};

export default AuthForgotPage;
