import React from 'react';
import OfferCard from './OfferCard';

export default {
  title: 'Molecular/OfferCard',
  component: OfferCard,
  argTypes: {
    isMobile: { control: 'boolean' },
  },
};

const Template = (args) => <OfferCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: 'https://source.unsplash.com/800x600/?wine,holiday',
  title: 'Séjour avec dégustation de vin',
  priceOrPeriod: 'À partir de 120 000 FCFA / nuit',
  onClick: () => alert('Offre sélectionnée !'),
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