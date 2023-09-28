import type { Meta, StoryObj } from "@storybook/react";

import { RadioButton } from "src/components";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Atomic/Form/RadioButton",
  component: RadioButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Empty: Story = {
  args: {
    id: "presence",
    children: "Radio button",
  },
};

export const Filled: Story = {
  args: {
    id: "presence",
    checked: true,
    children: "Radio button",
  },
};
