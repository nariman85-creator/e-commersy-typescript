import React, { ReactNode } from "react";
interface IButtonProps {
  text?: string;
  clasname?: string;
  type?: "button" | "submit" | "reset" | undefined;
  children?: ReactNode | ReactNode[];
  onClick?: (...args: any) => void;
  targetValue?: string;
  disabled?: boolean;
}
export const Buttons: React.FC<IButtonProps> = ({
  text,
  clasname,
  type = "button",
  children,
  onClick=undefined,
  targetValue,
  disabled
}) => {
  return (
    <button
      type={type}
      className={`btn ${clasname}`}
      onClick={onClick}
      data-btn={targetValue}
      style={{ zIndex: 5 }}
      disabled={disabled}
    >
      {children}
      <span> {text}</span>
    </button>
  );
};
