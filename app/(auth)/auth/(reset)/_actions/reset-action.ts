"use server";

import { TResetForm } from "../_entities/schema";

export const resetAction = async (payload: TResetForm) => {
  console.log("resetAction", payload);
};
