import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./input";
import { FieldValues, useForm } from "react-hook-form";
import { TInput } from "./type";

const FormField = (props: TInput<FieldValues>) => {
  const { control } = useForm();
  return <Input {...props} control={control} name="approve" />;
};

const meta: Meta<typeof Input> = {
  component: FormField,
  tags: ["autodocs"],
  title: "components/ui/input",
  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
    name: {
      control: {
        type: "text",
      },
    },
    required: {
      control: {
        type: "boolean",
      },
    },
    placeholder: {
      control: {
        type: "text",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    label: "Approve",
    name: "approve",
    required: true,
  },
};
