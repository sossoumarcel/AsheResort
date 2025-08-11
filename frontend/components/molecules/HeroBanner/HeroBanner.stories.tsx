// components/HeroBanner.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import HeroBanner from './HeroBanner';

const meta: Meta<typeof HeroBanner> = {
  title: 'Composants/HeroBanner',
  component: HeroBanner,
  tags: ['autodocs'],
  argTypes: {
    isMobile: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof HeroBanner>;

export const Default: Story = {
  args: {
    title: 'Nos Destinations',
    subtitle: 'Explorez 4 villes béninoises et leurs merveilles rurales',
    imageUrl: 'https://source.unsplash.com/1600x900/?benin,nature,agriculture',
    buttonLabel: 'Découvrir',
    onClick: () => alert('Bouton cliqué !'),
    isMobile: false,
  },
};

export const Mobile: Story = {
  args: {
    ...Default.args,
    isMobile: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};