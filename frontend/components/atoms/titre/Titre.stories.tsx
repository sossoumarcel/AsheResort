
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Title from './Titre';

const meta: Meta<typeof Title> = {
  title: 'Atoms/Title',
  component: Title,
  argTypes: {
    level: { control: { type: 'select', options: [1, 2, 3, 4, 5, 6] } },
    text: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Title>;

export const H1: Story = {
  args: {
    level: 1,
    text: 'This is an H1 Title',
  },
};

export const H2: Story = {
  args: {
    level: 2,
    text: 'This is an H2 Title',
  },
};

export const H3: Story = {
  args: {
    level: 3,
    text: 'This is an H3 Title',
  },
};

export const CustomClass: Story = {
  args: {
    level: 1,
    text: 'This is a Title with a custom class',
    className: 'text-red-500',
  },
};
