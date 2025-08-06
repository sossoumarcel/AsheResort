import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Label from './Label';

const meta: Meta<typeof Label> = {
  title: 'Atoms/Label',
  component: Label,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    htmlFor: 'email',
    text: 'Adresse Email',
  },
};

export const Required: Story = {
  args: {
    htmlFor: 'name',
    text: 'Nom',
    required: true,
  },
};
