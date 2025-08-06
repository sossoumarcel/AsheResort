import React from 'react';
import { FaFacebook, FaShoppingCart, FaMapMarkerAlt } from 'react-icons/fa';

type IconType = 'facebook' | 'cart' | 'location';

interface IconProps {
  type: IconType;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ type, size = 20, color = 'black' }) => {
  const icons = {
    facebook: <FaFacebook size={size} color={color} />,
    cart: <FaShoppingCart size={size} color={color} />,
    location: <FaMapMarkerAlt size={size} color={color} />,
  };

  return icons[type] || null;
};

export default Icon;
