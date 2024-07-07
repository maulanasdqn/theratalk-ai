"use server";
import type { FC, PropsWithChildren, ReactElement } from "react";

const LandingTemplate: FC<Readonly<PropsWithChildren>> = ({ children }): ReactElement => {
  return (
    <main className="w-full flex flex-col items-center bg-green-50 font-sans">{children}</main>
  );
};

export default LandingTemplate;
