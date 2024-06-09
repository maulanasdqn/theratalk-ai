import { FC, PropsWithChildren } from "react";

const LandingTemplate: FC<Readonly<PropsWithChildren>> = ({ children }) => {
  return (
    <main className="w-full flex flex-col items-center bg-green-50 font-sans">{children}</main>
  );
};

export default LandingTemplate;
