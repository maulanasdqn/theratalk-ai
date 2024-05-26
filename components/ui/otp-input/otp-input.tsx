import { FC, ReactElement, useRef } from "react";
import { TOtpInput } from "./type";

export const OtpInput: FC<TOtpInput> = ({ otpValues, setOtpValues }): ReactElement => {
  const refs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && index > 0 && otpValues[index] === "") {
      refs[index - 1].current?.focus();
    }
  };

  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
    if (index < 4 - 1 && value !== "") {
      refs[index + 1].current?.focus();
    }
  };

  return (
    <div className="flex gap-x-2 w-full">
      {otpValues.map((value, index) => (
        <input
          ref={refs[index]}
          className="w-full h-12 text-3xl text-center border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
          key={index}
          type="text"
          maxLength={1}
          value={value}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
        />
      ))}
    </div>
  );
};

OtpInput.displayName = "OtpInput";
