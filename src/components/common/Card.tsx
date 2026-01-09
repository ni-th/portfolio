import { type ReactNode } from "react";

interface CardProps {
  title: string;
  children?: ReactNode;
  className?: string;
}

const Card = ({ title, children, className }: CardProps) => {
  return (
    <div className={`bg-sky-900/20 py-5 px-7 rounded-3xl ${className}`}>
      <h2 className="text-xl mb-2">{title}</h2>
      {children}
    </div>
  );
};

export default Card;