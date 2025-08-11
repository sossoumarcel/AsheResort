
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Paragraph from './Paragraph';

const meta: Meta<typeof Paragraph> = {
  title: 'Atoms/Paragraph',
  component: Paragraph,
  argTypes: {
    text: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
  args: {
    text: 'This is a default paragraph.',
  },
};

export const CustomClass: Story = {
  args: {
    text: 'This paragraph has a custom class.',
    className: 'text-blue-500',
  },
};
