import React, { useState, CSSProperties } from 'react';

type HeroBannerProps = {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  buttonText?: string;
  buttonLink?: string;
};

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle,
  backgroundImage,
  buttonText,
  buttonLink,
}) => {
  const hasImage = Boolean(backgroundImage);

  const containerStyle: CSSProperties = {
    backgroundImage: hasImage ? `url(${backgroundImage})` : undefined,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: hasImage ? undefined : '#333',
    color: 'white',
    padding: '100px 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    minHeight: '400px',
  };

  const overlayStyle: CSSProperties = hasImage
    ? {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 0,
      }
    : {};

  const contentStyle: CSSProperties = {
    position: hasImage ? 'relative' : 'static',
    zIndex: 1,
    maxWidth: '600px',
    textAlign: 'left',
  };

  const buttonStyle: CSSProperties = {
    marginTop: '20px',
    padding: '12px 24px',
    backgroundColor: '#2E7D32',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'all 0.3s ease',
  };

  const buttonHoverStyle: CSSProperties = {
    transform: 'translateY(-3px)',
    backgroundColor: '#68300c',
  };

  const [isHovered, setHovered] = useState(false);

  return (
    <div style={containerStyle}>
      {hasImage && <div style={overlayStyle} />}
      <div style={contentStyle}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {buttonText && buttonLink && (
          <a
            href={buttonLink}
            style={{
              ...buttonStyle,
              ...(isHovered ? buttonHoverStyle : {}),
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
};

export default HeroBanner;
