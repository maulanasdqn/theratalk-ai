import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "./modal";

const meta: Meta<typeof Modal> = {
  component: Modal,
  tags: ["autodocs"],
  title: "components/ui/modal",
  argTypes: {
    title: {
      control: {
        type: "text",
      },
    },
    open: {
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    title: "Title Lorem Ipsum",
    open: true,
  },
};
