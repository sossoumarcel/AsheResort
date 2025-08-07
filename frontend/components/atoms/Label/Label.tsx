import React from 'react';

interface LabelProps {
  text: string;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ text, className }) => {
  return <label className={className}>{text}</label>;
};

export default Label;
