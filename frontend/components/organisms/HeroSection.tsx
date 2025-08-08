import React from 'react';
import HeroBanner from '../molecules/HeroBanner/HeroBanner';

const HeroSection: React.FC = () => {
  return (
    <section>
      <HeroBanner
        title="Découvrez nos destinations de rêve"
        subtitle="Explorez le monde avec style"
        imageUrl="https://source.unsplash.com/random/1600x900?travel"
      />
    </section>
  );
};

export default HeroSection;
