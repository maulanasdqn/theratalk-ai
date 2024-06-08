import { clsx } from "clsx";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactElement } from "react";

type TButton = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export const Button: FC<TButton> = ({ variant = "primary", ...props }): ReactElement => {
  const className = clsx(
    "font-semibold transition transition-all flex items-center justify-center gap-x-3 duration-300 rounded-lg text-sm px-5 py-2.5 text-center focus:ring-4 focus:outline-none disabled:text-gray-400 disabled:opacity-50 disabled:bg-gray-200 disabled:cursor-not-allowed w-full",
    {
      "text-white border border-2 disabled:border-gray-300 border-green-700 bg-green-700 hover:bg-green-800 focus:ring-green-300 ":
        variant === "primary",
      "text-gray-700 border border-2 border-green-700 text-green-700 bg-transparent hover:opacity-90 focus:ring-gray-700":
        variant === "secondary",
    },
  );
  return (
    <button data-testid="button" {...props} className={className}>
      {props.children}
    </button>
  );
};
