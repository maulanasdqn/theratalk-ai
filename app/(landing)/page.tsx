import { Fragment, type ReactElement } from "react";
import type { NextPage } from "next";
import { Navbar } from "@/components/ui/navbar";
import { HeroModule } from "./_modules/hero-module";
import { AboutModule } from "./_modules/about-module";
import { SellingPointModule } from "./_modules/selling-point-module";
import { UsageFlowModule } from "./_modules/usage-flow-module";
import { FooterModule } from "./_modules/footer-module";

const LandingPage: NextPage = (): ReactElement => {
  return (
    <Fragment>
      <Navbar />
      <HeroModule />
      <section className="w-full flex flex-col items-center bg-gray-50">
        <AboutModule />
        <SellingPointModule />
        <UsageFlowModule />
      </section>
      <FooterModule />
    </Fragment>
  );
};

export default LandingPage;
