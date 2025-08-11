import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DestinationCard from './DestinationCard';

export default {
  title: 'Molecules/DestinationCard',
  component: DestinationCard,
  argTypes: {
    isMobile: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<typeof DestinationCard> = (args) => <DestinationCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: '/images/Untitled Image.png',
  imageAlt: 'Une destination de voyage de reve',
  destinationName: 'Destination de Rêve',
  destinationDescription: 'Découvrez des paysages à couper le souffle et des cultures fascinantes. Une expérience inoubliable vous attend.',
  onMoreInfoClick: () => alert('En savoir plus cliqué!'),
  isMobile: false,
};

export const Mobile = Template.bind({});
Mobile.args = {
  ...Default.args,
  isMobile: true,
};
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};