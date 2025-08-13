import React from 'react';
import OffersList from './OffersList';

export default {
  title: 'Organisms/OffersList',
  component: OffersList,
};

const sampleOffers = [
  { title: 'Promo Plage', description: 'Réduction 50% sur les séjours' },
  { title: 'Spa Gratuit', description: 'Offre valable tout août' },
];

export const Default = () => <OffersList offers={sampleOffers} />;
