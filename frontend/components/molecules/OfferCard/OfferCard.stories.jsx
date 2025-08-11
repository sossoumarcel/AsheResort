import React from 'react';
import OfferCard from './OfferCard';

export default {
  title: 'Molecular/OfferCard',
  component: OfferCard,
};

const Template = (args) => <OfferCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: '/images/475222627-b2c983f2-ec78-4b6b-a4f6-11e6dc502249.jpg',
  title: 'Séjour paradisiaque à Ouidah',
  location: 'Ouidah, Bénin',
  description: 'Profitez d’un séjour de 3 nuits dans un cadre exceptionnel avec plage privée et excursions culturelles.',
  priceOrPeriod: 'À partir de 150 000 FCFA / nuit',
  onClick: () => alert('Réservation pour Ouidah sélectionnée !'),
};
