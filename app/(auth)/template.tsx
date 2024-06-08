import { OrnamenBottomIllustration } from "@/components/svg-tsx/ornamen-bottom-ill";
import { OrnamenTopIllustration } from "@/components/svg-tsx/ornamen-top-ill";
import { TheraIcon } from "@/components/svg-tsx/thera-icon";
import Link from "next/link";
import { FC, PropsWithChildren, ReactElement } from "react";

const AuthTemplate: FC<Readonly<PropsWithChildren>> = (props): ReactElement => {
  return (
    <section className="flex items-center h-screen w-full justify-between">
      <Link
        href="/"
        className="lg:w-1/2 items-center relative justify-center shadow-md bg-green-50 min-h-screen h-full lg:flex hidden flex-col gap-y-8"
      >
        <OrnamenTopIllustration className="absolute top-0 right-0" />
        <TheraIcon width="178" height="169" />
        <h1 className="text-4xl font-bold text-gray-700">TheraTalk AI</h1>
        <OrnamenBottomIllustration className="absolute bottom-0 left-0" />
      </Link>
      <div className="w-full lg:w-1/2 sm:px-12 px-6 h-full flex lg:flex-row flex-col justify-center items-center bg-gray-50">
        <Link href="/" className="flex lg:hidden gap-x-4 mb-6">
          <TheraIcon width="40" height="40" />
          <h1 className="sm:text-4xl text-2xl font-bold text-gray-700">TheraTalk AI</h1>
        </Link>
        {props.children}
      </div>
    </section>
  );
};

export default AuthTemplate;
