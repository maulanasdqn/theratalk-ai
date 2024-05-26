import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { FC, PropsWithChildren, ReactElement } from "react";
import "./globals.css";

const monserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Theratalk AI",
  description: "Theratalk AI is app for check mental health with the power of GPT AI",
  icons: {
    icon: "/thera.svg",
  },
};

const RootLayout: FC<Readonly<PropsWithChildren>> = (props): ReactElement => {
  return (
    <html lang="en">
      <body className={monserrat.className}>
        {props.children}
        <div id="modal" />
      </body>
    </html>
  );
};

export default RootLayout;
