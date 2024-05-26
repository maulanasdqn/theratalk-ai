import type { Meta, StoryObj } from "@storybook/react";

import { OtpInput } from "./otp-input";

const meta: Meta<typeof OtpInput> = {
  component: OtpInput,
  tags: ["autodocs"],
  title: "components/ui/otp-input",
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof OtpInput>;

export const Primary: Story = {
  args: {
    otpValues: ["2", "3", "4", "5"],
    setOtpValues: () => {
      console.log("setOtpValues");
    },
  },
};
