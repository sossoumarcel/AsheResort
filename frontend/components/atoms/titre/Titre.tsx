
import React from 'react';

type TitleProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
  className?: string;
};

const Title: React.FC<TitleProps> = ({ level, text, className }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag className={className}>{text}</Tag>;
};

export default Title;
