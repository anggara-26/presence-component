import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "src/components";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Atomic/Button",
  component: Button,
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Icon: Story = {
  args: {
    icon: "circle-plus",
  },
};

export const Label: Story = {
  args: {
    label: "Label Text",
  },
};

export const Primary: Story = {
  args: {
    icon: "circle-plus",
    buttonStyle: "primary",
    label: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    icon: "circle-plus",
    buttonStyle: "secondary",
    label: "Secondary Button",
  },
};

export const Tertiary: Story = {
  args: {
    icon: "circle-plus",
    buttonStyle: "tertiary",
    label: "Tertiary Button",
  },
};

export const Disabled: Story = {
  args: {
    disable: true,
    icon: "circle-plus",
    label: "Disabled Button",
  },
};

// export const Tertiary: Story = {
//   args: {
//     text: true,
//     label: "Button",
//   },
// };

// export const Disabled: Story = {
//   args: {
//     disable: true,
//     label: "Disabled Button",
//   },
// };

// export const Large: Story = {
//   args: {
//     size: "large",
//     label: "Button",
//   },
// };

// export const Small: Story = {
//   args: {
//     size: "small",
//     label: "Button",
//   },
// };
