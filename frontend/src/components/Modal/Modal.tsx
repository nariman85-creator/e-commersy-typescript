import React, { ReactNode } from "react";
import "./Modal.scss";
interface IModalProps {
  className?: string;
  children?: ReactNode | ReactNode[];
  position?: { top: number };
  display?: string;
}

export const Modal: React.FC<IModalProps> = ({
  className = "",
  children,
  position,
}) => {


  return (
    <div
      className={`modal ${className}`}
      style={{ top: `${position?.top}px`}}
    >
      <div className="modal-content">
          <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};
