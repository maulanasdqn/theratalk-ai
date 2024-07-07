"use server";
import { NextPage } from "next";
import { ReactElement } from "react";
import { RegisterFormModule } from "../_modules";

const AuthRegisterPage: NextPage = async (): Promise<ReactElement> => {
  return <RegisterFormModule />;
};

export default AuthRegisterPage;
