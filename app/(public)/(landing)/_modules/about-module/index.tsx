"use client";
import { AboutIllustration } from "@/components/svg-tsx/about-ill";
import { motion } from "framer-motion";
import type { FC, ReactElement } from "react";

export const AboutModule: FC = (): ReactElement => {
  return (
    <section className="flex lg:flex-row flex-col items-center h-full bg-gray-50 max-h-2xl w-full justify-between px-6 py-20 max-w-7xl">
      <div className="max-w-xl gap-y-6 flex flex-col justify-center h-full mt-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="lg:text-5xl text-3xl font-bold text-green-700"
        >
          TheraTalk AI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="lg:text-xl text-lg text-gray-800"
        >
          Solusi inovatif dengan Artificial Intelligence untuk membantu dan mendukung Anda mengatasi
          masalah kesehatan mental.{" "}
        </motion.p>
      </div>
      <div className="md:hidden block">
        <AboutIllustration width="240" height="320" />
      </div>
      <div className="lg:block hidden">
        <AboutIllustration />
      </div>
    </section>
  );
};
