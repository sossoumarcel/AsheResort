import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Icon from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const FacebookIcon: Story = {
  args: {
    type: 'facebook',
    color: '#4267B2',
    size: 30,
  },
};

export const CartIcon: Story = {
  args: {
    type: 'cart',
    color: '#333',
    size: 24,
  },
};

export const LocationIcon: Story = {
  args: {
    type: 'location',
    color: 'red',
    size: 20,
  },
};
