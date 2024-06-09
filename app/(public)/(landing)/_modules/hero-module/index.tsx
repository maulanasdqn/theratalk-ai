"use client";
import { FC, ReactElement } from "react";
import { Button } from "@/components/ui/button";
import { HeroIllustration } from "@/components/svg-tsx/hero-ill";
import Link from "next/link";
import { motion } from "framer-motion";

export const HeroModule: FC = (): ReactElement => {
  return (
    <section className="w-full flex flex-col items-center bg-green-50">
      <section className="flex flex-col lg:flex-row items-center h-full max-h-2xl w-full justify-between px-6 py-20 bg-green-50 max-w-7xl">
        <div className="max-w-xl gap-y-6 flex flex-col justify-center h-full mt-8">
          <motion.h1
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold text-gray-900"
          >
            The Way Forward to a Happier Life
          </motion.h1>
          <motion.p
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:text-xl text-lg font-medium text-gray-900 font-sans"
          >
            Get connected to the nearest health facilities and mental health professionals with{" "}
            <strong>TheraTalk AI.</strong>
          </motion.p>
          <Link href="/about" className="w-fit">
            <Button>Learn More</Button>
          </Link>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="md:hidden block">
          <HeroIllustration width="240" height="320" />
        </motion.div>
        <div className="lg:block hidden">
          <HeroIllustration />
        </div>
      </section>
    </section>
  );
};
