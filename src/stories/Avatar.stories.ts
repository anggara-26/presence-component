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
    src: "https://e1.pxfuel.com/desktop-wallpaper/225/102/desktop-wallpaper-pin-on-anime-girl-cute-anime-girl-profile-thumbnail.jpg",
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
