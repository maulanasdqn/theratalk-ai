"use server";
import { NextPage } from "next";
import { ReactElement } from "react";
import { ResetFormModule } from "../../_modules";

const AuthResetPage: NextPage = async (): Promise<ReactElement> => {
  return <ResetFormModule />;
};

export default AuthResetPage;
