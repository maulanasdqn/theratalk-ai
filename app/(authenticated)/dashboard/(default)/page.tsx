"use server";
import { auth } from "@/libs/auth/auth";
import type { NextPage } from "next";
import type { ReactElement } from "react";

const DashboardPage: NextPage = async (): Promise<ReactElement> => {
  const session = await auth();
  return (
    <div>
      <h1>Dashboard {session?.user?.email}</h1>
    </div>
  );
};

export default DashboardPage;
