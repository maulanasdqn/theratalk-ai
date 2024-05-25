import { FC, ReactElement, ReactNode } from "react";
import { TCard } from "./type";

export const Card: FC<TCard> = (props): ReactElement => {
  return (
    <div className="w-auto flex flex-col gap-y-4 h-auto bg-white shadow-md rounded px-5 py-7">
      {props.customHeader}
      <h1 className="text-xl font-bold text-gray-800">{props.title}</h1>
      <p className="text-[16px] text-gray-700 font-sans">{props.content}</p>
    </div>
  );
};
