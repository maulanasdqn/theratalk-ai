import { FC, ReactElement } from "react";
import { Button } from "@/components/ui/button";
import { HeroIllustration } from "@/components/svg-tsx/hero-ill";

export const HeroModule: FC = (): ReactElement => {
  return (
    <section className="w-full flex flex-col items-center bg-green-50">
      <section className="flex flex-col lg:flex-row items-center h-full max-h-2xl w-full justify-between px-6 py-20 bg-green-50 max-w-7xl">
        <div className="max-w-xl gap-y-6 flex flex-col justify-center h-full mt-8">
          <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold text-gray-900">
            The Way Forward to a Happier Life
          </h1>
          <p className="md:text-xl text-lg font-medium text-gray-900 font-sans">
            Get connected to the nearest health facilities and mental health
            professionals with <strong>TheraTalk AI.</strong>
          </p>
          <div className="w-fit">
            <Button>Learn More</Button>
          </div>
        </div>
        <div className="md:hidden block">
          <HeroIllustration width="240" height="320" />
        </div>
        <div className="lg:block hidden">
          <HeroIllustration />
        </div>
      </section>
    </section>
  );
};
