import { FC, ReactNode } from 'react';
import "./card.css"

interface CardProps {
  className?: string;
  children: ReactNode
}

const Card: FC<CardProps> = ({ className, children }) => {
  const newClassName = "card cardStyle" + " " + className;
  return <div className={newClassName}>{children}</div>;
};

export default Card;