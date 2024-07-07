"use client";
import { TheraIcon } from "@/components/svg-tsx/thera-icon";
import { Button } from "@/components/ui/button";
import { FC, ReactElement } from "react";
import Link from "next/link";
import { TUser } from "@/types/user";

type TNavbar = {
  user?: Omit<TUser, "password">;
};

export const Navbar: FC<TNavbar> = ({ user }): ReactElement => {
  return (
    <header className="w-full items-center justify-center max-w-7xl">
      <nav className="flex items-center justify-between flex-wrap bg-green-50 px-3 py-6 md:p-6 w-full sticky top-0">
        <div className="flex items-center flex-shrink-0 text-white md:mr-6">
          <Link href="/" className="flex gap-x-4 items-center">
            <TheraIcon />
            <span className="text-2xl font-semibold text-green-800">TheraTalk AI</span>
          </Link>
        </div>
        <div className="md:flex hidden items-center flex-shrink-0 text-white md:mr-6 gap-x-10">
          <div className="flex gap-x-6 md:gap-x-10">
            <Link
              href={"/"}
              className="text-sm md:text-lg font-semibold hover:text-green-600 text-green-700"
            >
              Home
            </Link>
            <Link
              href={"/news"}
              className="text-sm md:text-lg font-semibold hover:text-green-600 text-green-700"
            >
              News
            </Link>
            <Link
              href={"/articles"}
              className="text-sm md:text-lg font-semibold hover:text-green-600 text-green-700"
            >
              Articles
            </Link>
          </div>
          {user ? (
            <Link href="/dashboard">
              <Button>Dashboard</Button>
            </Link>
          ) : (
            <div className="flex gap-x-4">
              <Link href="/auth/login">
                <Button>Login</Button>
              </Link>
              <Link href="/auth/register">
                <Button variant="secondary">Register</Button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
