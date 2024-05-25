import { TheraWhiteIcon } from "@/components/svg-tsx/thera-white-icon";
import { FC, ReactElement } from "react";

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
            <h2 className="text-1xl font-medium text-white">Home</h2>
            <h2 className="text-1xl font-medium text-white">News</h2>
            <h2 className="text-1xl font-medium text-white">Article</h2>
          </div>

          <div className="flex flex-col gap-y-4">
            <div className="flex w-fit items-center gap-x-4">
              <h1 className="text-2xl font-semibold text-white">CONTACT US</h1>
            </div>
            <h2 className="text-1xl font-medium text-white">Instagram</h2>
            <h2 className="text-1xl font-medium text-white">Facebook</h2>
            <h2 className="text-1xl font-medium text-white">WhatsApp</h2>
          </div>
        </div>
      </div>
    </footer>
  );
};
