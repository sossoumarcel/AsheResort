import React from 'react';

const OfferCard = ({ image, title, location, description, priceOrPeriod, onClick }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md w-80">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        {location && <p className="text-sm text-gray-500 mb-2">{location}</p>}
        {description && <p className="text-gray-700 mb-3">{description}</p>}
        <p className="text-gray-600 mb-4 font-medium">{priceOrPeriod}</p>
        <button
          onClick={onClick}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Réserver maintenant
        </button>
      </div>
    </div>
  );
};

export default OfferCard;
