import React from 'react';

interface LabelProps {
  htmlFor: string;
  text: string;
  required?: boolean;
}

const Label: React.FC<LabelProps> = ({ htmlFor, text, required = false }) => {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
      {text} {required && <span className="text-red-500">*</span>}
    </label>
  );
};

export default Label;
