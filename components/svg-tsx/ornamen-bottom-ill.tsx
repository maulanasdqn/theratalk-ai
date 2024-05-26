import type { FC, ReactElement } from "react";
import type { TSvg } from "./type";

export const OrnamenBottomIllustration: FC<TSvg> = ({
  className,
  width = "178",
  height = "169",
}): ReactElement => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 178 169"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="128" cy="50" r="50" fill="#02E56D" />
    <circle cx="49" cy="148" r="117" fill="url(#paint0_linear_17_53)" />
    <defs>
      <linearGradient
        id="paint0_linear_17_53"
        x1="154"
        y1="31"
        x2="15.5"
        y2="175"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1B9180" />
        <stop offset="1" stopColor="#00361A" />
      </linearGradient>
    </defs>
  </svg>
);
