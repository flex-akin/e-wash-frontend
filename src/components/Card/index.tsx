import { FC, ReactNode } from "react";
import "./card.css";

interface CardProps {
  className?: string;
  children: ReactNode;
}

const Card: FC<CardProps> = ({ className, children }) => {
  const newClassName = "card cardStyle col-lg-3 col-sm-12" + " " + className;
  return <div className={newClassName}>{children}</div>;
};

export default Card;
