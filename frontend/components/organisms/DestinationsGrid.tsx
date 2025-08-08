import React, { useEffect, useState } from 'react';
import DestinationCard from '../molecules/DestinationCard/DestinationCard';

type Destination = {
  id: number;
  destinationName: string;
  imageUrl: string;
  imageAlt: string;
  destinationDescription: string;
};

const DestinationsGrid: React.FC = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);

  useEffect(() => {
    setDestinations([
      {
        id: 1,
        destinationName: 'Zanzibar',
        imageUrl: 'https://source.unsplash.com/featured/?zanzibar,beach',
        imageAlt: 'Plage paradisiaque à Zanzibar',
        destinationDescription: 'Plages paradisiaques et eaux turquoise.',
      },
      {
        id: 2,
        destinationName: 'Cap-Vert',
        imageUrl: 'https://source.unsplash.com/featured/?cape-verde,island',
        imageAlt: 'Paysage du Cap-Vert',
        destinationDescription: 'Une destination africaine riche en culture.',
      },
      {
        id: 3,
        destinationName: 'Marrakech',
        imageUrl: 'https://source.unsplash.com/featured/?marrakech,desert',
        imageAlt: 'Désert autour de Marrakech',
        destinationDescription: 'Ambiance orientale et médina animée.',
      },
    ]);
  }, []);

  return (
    <section className="p-4 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
        Destinations Populaires
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            destinationName={destination.destinationName}
            imageUrl={destination.imageUrl}
            imageAlt={destination.imageAlt}
            destinationDescription={destination.destinationDescription}
            onMoreInfoClick={() => alert(`En savoir plus sur ${destination.destinationName}`)}
          />
        ))}
      </div>
    </section>
  );
};

export default DestinationsGrid;
