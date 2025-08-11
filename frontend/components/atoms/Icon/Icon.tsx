import React from 'react';
import { IconProps } from './types';

const Icon = ({ name, size = 24 }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <use href={`/icons.svg#${name}`} />
    </svg>
  );
};

export default Icon;