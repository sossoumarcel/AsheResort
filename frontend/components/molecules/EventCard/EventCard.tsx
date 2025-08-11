import React from 'react';
import Image from '../../atoms/image/Image';
import Title from '../../atoms/titre/Titre';
import Paragraph from '../../atoms/paragraph/Paragraph';
import Icon from '../../atoms/Icon/Icon';

interface EventCardProps {
  imageUrl: string;
  imageAlt: string;
  eventTitle: string;
  eventDate: string;
  eventLocation: string;
  isMobile?: boolean; // Nouvelle prop
}

const EventCard: React.FC<EventCardProps> = ({
  imageUrl,
  imageAlt,
  eventTitle,
  eventDate,
  eventLocation,
  isMobile = false,
}) => {
  if (isMobile) {
    return (
      <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white">
        <Image src={imageUrl} alt={imageAlt} className="w-full h-32 object-cover" />
        <div className="p-3">
          <Title level={4} text={eventTitle} className="font-bold text-base mb-2 text-gray-800" />
          <div className="space-y-2 text-sm">
            <div className="flex items-center text-gray-600">
              <Icon type="calendar" size={16} color="#666" />
              <Paragraph text={eventDate} className="ml-2 font-medium" />
            </div>
            <div className="flex items-center text-gray-600">
              <Icon type="location" size={16} color="#666" />
              <Paragraph text={eventLocation} className="ml-2 font-medium" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-white">
      <Image src={imageUrl} alt={imageAlt} className="w-full h-48 object-cover" />
      <div className="p-6">
        <Title level={3} text={eventTitle} className="font-bold text-xl mb-3 text-gray-800" />
        <div className="space-y-3">
          <div className="flex items-center text-gray-600">
            <Icon type="calendar" size={20} color="#666" />
            <Paragraph text={eventDate} className="ml-3 font-medium" />
          </div>
          <div className="flex items-center text-gray-600">
            <Icon type="location" size={20} color="#666" />
            <Paragraph text={eventLocation} className="ml-3 font-medium" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;