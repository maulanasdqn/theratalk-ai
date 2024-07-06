"use client";
import { clsx } from "clsx";
import { FC, ReactElement, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { useNotifyStore } from "@/libs/store/notify";

export const Notify: FC = (): ReactElement => {
  const { notify, setNotify } = useNotifyStore();

  const variants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  const className = clsx(
    "fixed p-4 rounded-md text-sm font-semibold cursor-pointer border border-b-2 text-gray-500 bg-gray-50 w-auto z-50",
    {
      "bottom-4 right-4": notify.position === "bottom",
      "top-4 right-4": notify.position === "top",
      "border-b-green-500": notify.type === "success",
      "border-b-red-500": notify.type === "error",
    },
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotify({
        ...notify,
        show: false,
      });
    }, 3000);
    return () => clearTimeout(timer);
  }, [notify, setNotify]);

  const isWindowPresent = typeof window !== "undefined";

  return (
    <>
      {isWindowPresent &&
        createPortal(
          <AnimatePresence>
            {notify.show && (
              <motion.div
                key="notify"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={variants}
                onClick={() =>
                  setNotify({
                    ...notify,
                    show: false,
                  })
                }
                className={className}
              >
                {notify.message}
              </motion.div>
            )}
          </AnimatePresence>,
          isWindowPresent && document.body,
        )}
    </>
  );
};
