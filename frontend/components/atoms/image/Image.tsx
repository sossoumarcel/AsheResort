
import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  variant?: 'rounded' | 'circular';
}

const Image: React.FC<ImageProps> = ({ src, alt, className, width, height, variant = 'rounded' }) => {
  const style: React.CSSProperties = {
    width,
    height,
    objectFit: 'cover',
  };

  if (variant === 'circular') {
    style.borderRadius = '50%';
  } else {
    style.borderRadius = '0.5rem'; // Corresponds to Tailwind's rounded-lg
  }

  return <img src={src} alt={alt} className={className} style={style} />;
};

export default Image;
