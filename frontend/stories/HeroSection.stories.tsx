import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import HeroSection from '../components/organisms/HeroSection';

const meta: Meta<typeof HeroSection> = {
  title: 'Organisms/HeroSection',
  component: HeroSection,
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  render: () => <HeroSection />,
};
