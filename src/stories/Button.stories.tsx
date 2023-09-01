import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "src/components";

import {
  IArticle,
  ICirclePlus,
  IHistory,
  IHouse,
  IPen,
  IQRCode,
  ITrash,
  IUser,
} from "src/icons";

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
    icon: {
      options: [
        "plus",
        "history",
        "trash",
        "pen",
        "user",
        "article",
        "qrCode",
        "house",
      ],
      mapping: {
        plus: <ICirclePlus />,
        trash: <ITrash />,
        pen: <IPen />,
        history: <IHistory />,
        user: <IUser />,
        article: <IArticle />,
        qrCode: <IQRCode />,
        house: <IHouse />,
      },
    },
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Icon: Story = {
  args: {
    icon: "plus",
  },
};

export const Label: Story = {
  args: {
    label: "Label Text",
  },
};

export const Primary: Story = {
  args: {
    icon: "plus",
    buttonStyle: "primary",
    label: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    icon: "plus",
    buttonStyle: "secondary",
    label: "Secondary Button",
  },
};

export const Tertiary: Story = {
  args: {
    icon: "plus",
    buttonStyle: "tertiary",
    label: "Tertiary Button",
  },
};

export const Disabled: Story = {
  args: {
    disable: true,
    icon: "plus",
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
