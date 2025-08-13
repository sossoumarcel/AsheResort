import React from 'react';
import Label from '../../atoms/Label/Label';

interface Offer {
  title: string;
  description: string;
}

interface OffersListProps {
  offers: Offer[];
}

const OffersList: React.FC<OffersListProps> = ({ offers }) => {
  return (
    <div>
      {offers.map((offer, index) => (
        <div key={index}>
          <Label text={offer.title} />
          <p>{offer.description}</p>
        </div>
      ))}
    </div>
  );
};

export default OffersList;
