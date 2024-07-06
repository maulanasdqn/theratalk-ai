import type { Meta, StoryObj } from "@storybook/react";

import { Notify } from "./notify";

const meta: Meta<typeof Notify> = {
  component: Notify,
  tags: ["autodocs"],
  title: "components/ui/notify",
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Notify>;

export const Primary: Story = {
  args: {},
};
