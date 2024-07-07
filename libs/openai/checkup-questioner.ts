"use server";
import { openai } from "./config";

export const checkupQuestioner = async (value: string) => {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    temperature: 0,
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content: `
                This questionnaire instrument aims to determine the overall mental health condition of a person in general. The results of this questionnaire can be used as an early indication to detect possible mental health problems, so that appropriate early interventions can be made.

                Use the following steps to analyze the checkup questionnaire based on the requirements provided. Please restate each step before proceeding.

                Step 1: check all the patient's answers in questionnaire.

                {
                  "checkupPercentage": the checkup percentage of the patient in general from 0 to 100,
                }
                `,
      },
      {
        role: "user",
        content: value,
      },
    ],
  });
  const checkupQuestionerResponse = JSON.parse(response.choices[0].message.content!);
  const formattedResponse = {
    ...checkupQuestionerResponse,
  };
  return formattedResponse;
};
