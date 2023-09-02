import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "src/components";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Atomic/Avatar",
  component: Avatar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Photo: Story = {
  args: {
    src: "https://yt3.googleusercontent.com/1DLrc_XiE_1FwD-scIWDjMXRXh637U91TGn5qUS3sFC56P-vUFvjHttshe3fFwQATp_0ng5Y7U4=s900-c-k-c0x00ffffff-no-rj",
    name: "Anggara",
  },
};

export const Initial: Story = {
  args: {
    name: "Anggara",
  },
};

export const Large: Story = {
  args: {
    name: "Anggara",
    size: "large",
  },
};
