import { FC, ReactElement } from "react";
import { TModal } from "./type";
import { createPortal } from "react-dom";
import { Button } from "../button";

export const Modal: FC<TModal> = (props): ReactElement => {
  return (
    <>
      {props.open &&
        createPortal(
          <div className="bg-black backdrop-blur px-[200px] flex items-center justify-center bg-opacity-50 fixed inset-0 z-50 overflow-y-auto py-[120px] w-full h-screen">
            <div className="bg-white max-w-[680px] rounded-lg p-4 flex flex-col items-center px-[60px] md:px-[120px] py-[88px] gap-y-8">
              {props.icon}
              <div className="flex flex-col gap-y-6 items-center">
                <h1 className="text-3xl font-bold text-center">{props.title}</h1>
                <p className="text-xl text-slate-400 text-center">{props.content}</p>
              </div>
              <div className="flex gap-x-4 w-full">
                {props.cancelText && (
                  <Button onClick={props.onClose} variant="secondary">
                    {props.cancelText}
                  </Button>
                )}
                <Button onClick={props.onOk}>{props.okText}</Button>
              </div>
            </div>
            {props.children}
          </div>,
          document.body!,
        )}
    </>
  );
};
