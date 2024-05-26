import type { FC, ReactElement } from "react";
import type { TSvg } from "./type";

export const OrnamenTopIllustration: FC<TSvg> = ({
  className,
  width = "246",
  height = "231",
}): ReactElement => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 246 231"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="187.5" cy="43.5" r="187.5" fill="url(#paint0_linear_40_285)" />
    <defs>
      <linearGradient
        id="paint0_linear_40_285"
        x1="253.713"
        y1="3.27724"
        x2="-110.149"
        y2="368.995"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0BEB70" />
        <stop offset="0.280683" stopColor="#00BF56" />
        <stop offset="0.668276" stopColor="#009647" />
        <stop offset="1" stopColor="#00361A" />
      </linearGradient>
    </defs>
  </svg>
);
