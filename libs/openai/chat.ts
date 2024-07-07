"use server";
import { openai } from "./config";

export const chatWithAi = async (value: string) => {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    temperature: 0,
    messages: [
      {
        role: "system",
        content: "you are the therapist that can help patient to checkup they mental health.",
      },
      {
        role: "user",
        content: value,
      },
    ],
  });

  const message = response?.choices?.at?.(0)?.message?.content?.trim();
  return { message };
};
