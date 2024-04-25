import {  type Meta, type StoryObj } from "@storybook/react";

import Button from "../components/Button";




const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    style: {
      backgroundColor: 'red',
      color:'white'
    
    },
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    style: {
      backgroundColor: "blue",
      color:'white'

    },
    children: 'Button',
    onClick: () => {
      alert('clicked')
    }

  },
};


// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

