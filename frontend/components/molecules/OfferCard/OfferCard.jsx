import React from 'react';

const OfferCard = ({ image, title, priceOrPeriod, onClick, isMobile = false }) => {
  const cardClasses = isMobile ? "border rounded-lg overflow-hidden shadow-md w-full max-w-xs mx-auto" : "border rounded-lg overflow-hidden shadow-md w-80";
  const imageClasses = isMobile ? "w-full h-32 object-cover" : "w-full h-48 object-cover";
  const titleClasses = isMobile ? "text-base font-semibold mb-1" : "text-lg font-semibold mb-2";
  const priceClasses = isMobile ? "text-gray-600 text-sm mb-2" : "text-gray-600 mb-4";
  const buttonClasses = isMobile ? "bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded text-sm" : "bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded";

  return (
    <div className={cardClasses}>
      <img src={image} alt={title} className={imageClasses} />
      <div className="p-4">
        <h3 className={titleClasses}>{title}</h3>
        <p className={priceClasses}>{priceOrPeriod}</p>
        <button
          onClick={onClick}
          className={buttonClasses}
        >
          Réserver maintenant
        </button>
      </div>
    </div>
  );
};

export default OfferCard;