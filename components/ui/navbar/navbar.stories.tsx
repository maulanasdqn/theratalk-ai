import type { Meta, StoryObj } from "@storybook/react";

import { Navbar } from "./navbar";

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  tags: ["autodocs"],
  title: "components/ui/navbar",
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Primary: Story = {
  args: {},
};
