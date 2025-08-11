import React from 'react';
import { LogoProps } from './types';

const Logo = ({ href = '/', variant = 'color', className = '' }: LogoProps) => {
  const logoSrc = variant === 'color' 
    ? '/images/logo-couleur.svg' 
    : '/images/logo-monochrome.svg';

  const Tag = href ? 'a' : 'div';

  return (
    <Tag href={href} className={`logo ${className}`.trim()}>
      <img src={logoSrc} alt="Art Vagabonds Logo" style={{ display: 'block', maxWidth: '100%' }} />
    </Tag>
  );
};

export default Logo;