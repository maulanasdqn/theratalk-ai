"use client";
import type { FC, ReactElement } from "react";
import { Button } from "@/components/ui/button";
import { HeroIllustration } from "@/components/svg-tsx/hero-ill";
import { motion } from "framer-motion";

export const HeroModule: FC = (): ReactElement => {
  return (
    <section className="w-full flex flex-col items-center bg-green-50">
      <section className="flex flex-col lg:flex-row items-center h-full max-h-2xl w-full justify-between px-6 py-20 bg-green-50 max-w-7xl">
        <div className="max-w-xl gap-y-6 flex flex-col justify-center h-full mt-8">
          <motion.h1
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold text-green-700"
          >
            The Way Forward to a Happier Life
          </motion.h1>
          <motion.p
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:text-xl text-lg font-medium text-green-900 font-sans"
          >
            Get connected to the nearest health facilities and mental health professionals with{" "}
            <strong>TheraTalk AI.</strong>
          </motion.p>
          <div className="w-fit">
            <Button>Learn More</Button>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="md:hidden block"
        >
          <HeroIllustration width="240" height="320" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="lg:block hidden"
        >
          <HeroIllustration />
        </motion.div>
      </section>
    </section>
  );
};
