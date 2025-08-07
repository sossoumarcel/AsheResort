
import React from 'react';
import OfferCard from './OfferCard';

export default {
  title: 'Molecular/OfferCard',
  component: OfferCard,
};

const Template = (args) => <OfferCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: 'https://source.unsplash.com/800x600/?wine,holiday',
  title: 'Séjour avec dégustation de vin',
  priceOrPeriod: 'À partir de 120 000 FCFA / nuit',
  onClick: () => alert('Offre sélectionnée !'),
};
