import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { FC, PropsWithChildren, ReactElement } from "react";
import "./globals.css";

const monserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Theratalk AI",
  description:
    "Theratalk AI is app for check mental health with the power of GPT AI",
};

const RootLayout: FC<Readonly<PropsWithChildren>> = (props): ReactElement => {
  return (
    <html lang="en">
      <body className={monserrat.className}>{props.children}</body>
    </html>
  );
};

export default RootLayout;
