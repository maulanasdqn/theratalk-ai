"use client";

import { FC, PropsWithChildren, ReactElement } from "react";
import { RecoilRoot } from "recoil";

export const StoreProvider: FC<PropsWithChildren> = (props): ReactElement => {
  return <RecoilRoot>{props.children}</RecoilRoot>;
};
