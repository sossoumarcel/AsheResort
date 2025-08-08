import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import EventCard from './EventCard';

export default {
  title: 'Molecules/EventCard',
  component: EventCard,
  argTypes: {
    isMobile: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<typeof EventCard> = (args) => <EventCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: '/images/Untitled Image.png',
  imageAlt: 'Un événement passionnant',
  eventTitle: 'Concert en Plein Air',
  eventDate: '25 décembre 2024',
  eventLocation: 'Parc de la Ville',
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