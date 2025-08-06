
import React from 'react';
import Image from '../../atoms/image/Image';
import Title from '../../atoms/titre/Titre';
import Paragraph from '../../atoms/paragraph/Paragraph';
import Button from '../../Button/Button';

interface DestinationCardProps {
  imageUrl: string;
  imageAlt: string;
  destinationName: string;
  destinationDescription: string;
  onMoreInfoClick: () => void;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  imageUrl,
  imageAlt,
  destinationName,
  destinationDescription,
  onMoreInfoClick,
}) => {
  return (
    <div className="relative max-w-sm rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <Image src={imageUrl} alt={imageAlt} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6">
        <Title level={2} text={destinationName} className="text-white font-bold text-2xl mb-2" />
        <Paragraph text={destinationDescription} className="text-gray-200 text-base mb-4" />
        <Button onClick={onMoreInfoClick} label="Explorer" style="secondary" />
      </div>
    </div>
  );
};

export default DestinationCard;
