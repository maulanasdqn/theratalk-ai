"use client";
import { TheraWhiteIcon } from "@/components/svg-tsx/thera-white-icon";
import Link from "next/link";
import { FC, ReactElement } from "react";
import { Icon } from "@iconify/react";

export const FooterModule: FC = (): ReactElement => {
  return (
    <footer className="w-full flex flex-col items-center bg-green-700 p-10">
      <div className="w-full flex flex-col gap-y-6 md:flex-row h-auto items-start justify-between max-w-7xl">
        <div className="flex flex-col gap-y-4">
          <div className="flex w-fit items-center gap-x-4">
            <TheraWhiteIcon />
            <h1 className="text-3xl font-semibold text-white">TheraTalk AI</h1>
          </div>
          <h2 className="lg:text-2xl text-xl font-medium text-white">
            Developed by HIMATIF UNINUS
          </h2>
        </div>

        <div className="flex gap-x-8">
          <div className="flex flex-col gap-y-4">
            <div className="flex w-fit items-center gap-x-4">
              <h1 className="text-2xl font-semibold text-white">SITEMAP</h1>
            </div>
            <Link href="/" className="text-1xl font-medium text-white hover:underline">
              Home
            </Link>
            <Link href="/news" className="text-1xl font-medium text-white hover:underline">
              News
            </Link>
            <Link href="/articles" className="text-1xl font-medium text-white hover:underline">
              Articles
            </Link>
          </div>

          <div className="flex flex-col gap-y-4">
            <div className="flex w-fit items-center gap-x-4">
              <h1 className="text-2xl font-semibold text-white">CONTACT US</h1>
            </div>
            <Link
              target="_blank"
              href="https://www.instagram.com/theratalk_ai"
              className="text-1xl font-medium flex items-center gap-x-3 text-white hover:underline"
            >
              <Icon icon="fa:instagram" /> Instagram
            </Link>
            <Link
              target="_blank"
              href="https://www.facebook.com/theratalkai"
              className="text-1xl font-medium flex items-center gap-x-5 text-white hover:underline"
            >
              <Icon icon="fa:facebook" /> Facebook
            </Link>
            <Link
              target="_blank"
              href="https://wa.me/6281234567890"
              className="text-1xl font-medium flex items-center gap-x-3 text-white hover:underline"
            >
              <Icon icon="fa:whatsapp" /> WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
