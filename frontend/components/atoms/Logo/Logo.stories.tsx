import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Logo from './Logo';
import { LOGO_VARIANTS } from './types';

const meta: Meta<typeof Logo> = {
  title: 'Atoms/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: LOGO_VARIANTS,
    },
    href: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ForLightBackground: Story = {
  args: {
    href: '/',
    variant: 'color',
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#333333' },
      ],
    },
  },
  name: 'Color (for light backgrounds)',
};

export const ForDarkBackground: Story = {
  args: {
    href: '/',
    variant: 'monochrome',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#333333' },
      ],
    },
  },
  name: 'Monochrome (for dark backgrounds)',
};