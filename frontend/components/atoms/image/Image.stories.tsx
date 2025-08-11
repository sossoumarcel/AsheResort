import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Image from './Image';

const meta: Meta<typeof Image> = {
  title: 'Atoms/Image',
  component: Image,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    className: { control: 'text' },
    width: { control: 'number' },
    height: { control: 'number' },
    variant: { control: { type: 'select', options: ['rounded', 'circular'] } },
  },
};

export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: '/images/Untitled Image.png',
    alt: 'Placeholder Image',
    width: 150,
    height: 150,
  },
};

export const Circular: Story = {
  args: {
    src: '/images/Untitled Image.png',
    alt: 'Placeholder Image',
    variant: 'circular',
    width: 150,
    height: 150,
  },
};

export const CustomSize: Story = {
  args: {
    src: '/images/Untitled Image.png',
    alt: 'Placeholder Image',
    width: 300,
    height: 200,
  },
};
