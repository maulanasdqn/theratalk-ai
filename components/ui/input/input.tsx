import { ReactElement } from "react";
import { FieldValues, useController } from "react-hook-form";
import { TInput } from "./type";

export const Input = <T extends FieldValues>(
  props: TInput<T>,
): ReactElement => {
  const {
    field,
    fieldState: { error },
  } = useController<T>(props);
  const className = error
    ? "border-red-500 placeholder:text-red-500 focus:border-red-700 bg-red-50"
    : "border-gray-300 placeholder:text-gray-400 focus:border-green-500 bg-gray-50";
  return (
    <div className="w-full flex flex-col gap-y-1">
      {props.label && (
        <label className="text-sm text-gray-700">
          {props.label}{" "}
          {props.required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        {...props}
        {...field}
        className={`${className} border text-sm rounded-md p-2 w-full focus:outline-none   placeholder:text-sm`}
      />
      {error?.message && (
        <span className="text-red-500 text-xs italic">{error?.message}</span>
      )}
    </div>
  );
};
