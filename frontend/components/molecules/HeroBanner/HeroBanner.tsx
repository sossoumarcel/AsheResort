
// components/HeroBanner.tsx
import React from 'react';

type HeroBannerProps = {
  title: string;
  subtitle: string;
  imageUrl: string;
  buttonLabel?: string;
  onClick?: () => void;
};

const HeroBanner: React.FC<HeroBannerProps> = ({ title, subtitle, imageUrl, buttonLabel, onClick }) => {
  return (
    <section
      className="relative w-full h-[500px] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-xl text-center max-w-xl">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg mb-6">{subtitle}</p>
        {buttonLabel && (
          <button
            onClick={onClick}
            className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-md text-white font-semibold"
          >
            {buttonLabel}
          </button>
        )}
      </div>
    </section>
  );
};

export default HeroBanner;
