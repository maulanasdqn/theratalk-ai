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
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    okText: "Ok",
    cancelText: "Cancel",
    onOk: () => {
      console.log("ok");
    },
    onClose: () => {
      console.log("close");
    },
  },
};
