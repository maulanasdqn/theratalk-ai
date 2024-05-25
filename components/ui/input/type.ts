import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldValues, UseControllerProps } from "react-hook-form";

export type TInput<T extends FieldValues> = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  UseControllerProps<T> & {
    label?: string;
  };
