import { Sidebar } from "@/components/ui/sidebar";
import { FC, PropsWithChildren, ReactElement } from "react";

export const DashboardTemplate: FC<Readonly<PropsWithChildren>> = (
  props,
): ReactElement => {
  return (
    <section className="flex h-full min-h-screen w-full bg-gray-100">
      <Sidebar />
      <div className="w-full flex flex-col items-center">
        <div className="w-full items-center justify-center max-w-[1440px] md:px-10 px-6 py-8">
          {props.children}
        </div>
      </div>
    </section>
  );
};
