import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import HeroBanner from './HeroBanner';
import { ComponentProps } from 'react';

type HeroBannerProps = ComponentProps<typeof HeroBanner>;

export default {
  title: 'Components/HeroBanner',
  component: HeroBanner,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    backgroundImage: { control: 'text' },
    buttonText: { control: 'text' },
    buttonLink: { control: 'text' },
  },
} as Meta<typeof HeroBanner>;

const Template: StoryFn<HeroBannerProps> = (args) => <HeroBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Bienvenue sur AsheResort',
  subtitle: 'Découvrir le Bénin autrement',
  backgroundImage: '/images/hero.jpg',
  buttonText: 'Découvrir',
  buttonLink: '#explorer',
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