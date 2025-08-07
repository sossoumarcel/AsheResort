import React from 'react';

const OfferCard = ({ image, title, priceOrPeriod, onClick }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md w-80">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{priceOrPeriod}</p>
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
