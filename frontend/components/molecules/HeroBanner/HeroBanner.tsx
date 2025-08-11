// components/HeroBanner.tsx
import React from 'react';

type HeroBannerProps = {
  title: string;
  subtitle: string;
  imageUrl: string;
  buttonLabel?: string;
  onClick?: () => void;
  isMobile?: boolean; // Nouvelle prop
};

const HeroBanner: React.FC<HeroBannerProps> = ({ title, subtitle, imageUrl, buttonLabel, onClick, isMobile = false }) => {
  const sectionClasses = isMobile ? "relative w-full h-[300px] flex items-center justify-center text-white" : "relative w-full h-[500px] flex items-center justify-center text-white";
  const contentClasses = isMobile ? "bg-black bg-opacity-60 p-4 rounded-xl text-center max-w-sm" : "bg-black bg-opacity-60 p-8 rounded-xl text-center max-w-xl";
  const titleClasses = isMobile ? "text-2xl font-bold mb-2" : "text-4xl font-bold mb-4";
  const subtitleClasses = isMobile ? "text-sm mb-4" : "text-lg mb-6";

  return (
    <section
      className={sectionClasses}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className={contentClasses}>
        <h1 className={titleClasses}>{title}</h1>
        <p className={subtitleClasses}>{subtitle}</p>
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