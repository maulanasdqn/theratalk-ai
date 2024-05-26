"use client";
import { FC, ReactElement, useState } from "react";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { TheraIcon } from "@/components/svg-tsx/thera-icon";

export const Sidebar: FC = (): ReactElement => {
  const [extend, setExtend] = useState(false);
  const pathname = usePathname();
  const width = extend ? "w-[256px]" : "w-[96px]";
  const position = extend
    ? "md:top-[60px] md:right-6 md:left-[190px] right-4 top-6"
    : "md:top-[60px] md:right-4 md:left-16 right-4 top-6";
  const showLogo = extend ? "block" : "hidden";

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <aside
      className={`bg-white absolute ${extend ? "left-0" : "left-[-200px] md:left-0"}  md:block md:relative border border-gray-200 transition-all duration-300 min-h-screen h-full ${width} rounded-lg shadow-md`}
    >
      <Icon
        icon="carbon:menu"
        width={40}
        className={`fixed ${position} transition-all duration-300 text-gray-500 cursor-pointer shadow-md flex justify-center items-center p-2 rounded-xl bg-white`}
        onClick={() => setExtend(!extend)}
      />
      <figure className="w-full flex justify-center items-center gap-x-3 py-6">
        <TheraIcon width={"40"} height={"40"} />
        <figcaption
          className={`text-lg ${showLogo} font-medium text-gray-700 tracking-wider transition-all duration-600`}
        >
          TheraTalk AI
        </figcaption>
      </figure>
      <hr className="w-full border-gray-200" />
      <nav className="w-full flex flex-col gap-y-3 p-4">
        <Link
          href="/dashboard"
          className={`w-full flex items-center ${isActive("/dashboard") ? "bg-green-700 text-white" : "text-green-700"} ${extend ? "justify-start" : "justify-center"} border border-white gap-x-2 p-2 rounded-xl hover:border-green-600 transition-all duration-300`}
        >
          <Icon
            icon="carbon:home"
            width={extend ? 20 : 30}
            className={isActive("/dashboard") ? "text-white" : "text-green-700"}
          />
          <span className={extend ? "block font-semibold text-sm" : "hidden"}>Dashboard</span>
        </Link>
        <Link
          href="/dashboard/chat-ai"
          className={`w-full flex items-center ${isActive("/dashboard/chat-ai") ? "bg-green-700 text-white" : "text-green-700"} ${extend ? "justify-start" : "justify-center"}  gap-x-2 p-2 rounded-xl border border-white hover:border-green-600 transition-all duration-300`}
        >
          <Icon
            icon="carbon:chat"
            width={extend ? 20 : 30}
            className={isActive("/dashboard/chat-ai") ? "text-white" : "text-green-700"}
          />
          <span className={extend ? "block font-semibold text-sm" : "hidden"}>Chat with AI</span>
        </Link>
      </nav>
      <div className="absolute transition-all duration-300 bottom-4 text-sm left-5 flex items-center gap-x-2">
        <Icon icon="carbon:logout" width={extend ? 20 : 30} className="text-green-700" />
        {extend && <span className="text-green-700 font-semibold">Logout</span>}
      </div>
    </aside>
  );
};
