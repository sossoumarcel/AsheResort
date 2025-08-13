import React from 'react';
import EventsCarousel from './EventsCarousel';

export default {
  title: 'Organisms/EventsCarousel',
  component: EventsCarousel,
};

const sampleEvents = [
  { title: 'Soirée Tropicale', date: '12 août 2025' },
  { title: 'Concert Afro Jazz', date: '20 août 2025' },
];

export const Default = () => <EventsCarousel events={sampleEvents} />;
