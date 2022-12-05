import React from "react";
import './saleBenefit.scss';

interface ISaleProps {
  text: string;
  className?: string;
}

export const SaleBenefit:React.FC<ISaleProps> = ({text,className}) => {
  return (
    <div className={`sale-benefit bg--red ${className}`}>
      <span className="sale-text">{text}</span>
    </div>
  );
};
