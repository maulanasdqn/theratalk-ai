import { TheraIcon } from "@/components/svg-tsx/thera-icon";
import { Button } from "@/components/ui/button";
import { FC, ReactElement } from "react";
import Link from "next/link";

export const Navbar: FC = (): ReactElement => {
  return (
    <header className="w-full items-center justify-center max-w-7xl">
      <nav className="flex items-center justify-between flex-wrap bg-green-50 px-3 py-6 md:p-6 w-full">
        <div className="flex items-center flex-shrink-0 text-white md:mr-6">
          <div className="flex gap-x-4 items-center">
            <TheraIcon />
            <span className="text-2xl font-semibold text-green-800">
              TheraTalk AI
            </span>
          </div>
        </div>

        <div className="md:flex hidden items-center flex-shrink-0 text-white md:mr-6 gap-x-10">
          <ul className="flex gap-x-6 md:gap-x-10">
            <li className="text-sm md:text-lg font-semibold text-green-700">
              Home
            </li>
            <li className="text-sm md:text-lg font-semibold text-green-700">
              News
            </li>
            <li className="text-sm md:text-lg font-semibold text-green-700">
              Article
            </li>
          </ul>
          <Link href="/auth/login">
            <Button>Masuk</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};
