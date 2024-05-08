import { type Meta, type StoryObj } from "@storybook/react";

import Button from "../components/Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    style: {
     
      color: "white",
      outline: "none",
      border: "none",
    },
    children: "Button",
    className: 'bg-violet-100 text-white font-bold py-2 px-4 rounded hover:bg-violet-600',
  },
};

export const Secondary: Story = {
  args: {
    style: {
      backgroundColor: "blue",
      color: "white",
    },
    children: "Button",
    onClick: () => {
      alert("clicked");
    },
  },
};
