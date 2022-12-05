import React, { ChangeEventHandler, ReactNode } from "react";
interface IInputProps {
  placeholder?: string;
  clasname?: string;
  type: string;
  id?: string;
  value?: string;
  style?: { backgroundColor: string };
  dataset?: string;
  onClick?: (e: React.MouseEvent) => void;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export const Input: React.FC<IInputProps> = ({
  type = "text",
  style,
  value,
  clasname,
  placeholder,
  id,
  dataset,
  onClick,
  onChange
}) => {

  return (
    <input
      id={id}
      style={style}
      type={type}
      className={`input ${clasname}`}
      data-data={dataset}
      value={value}
      placeholder={placeholder}
      onClick={onClick}
      onChange={onChange}
    ></input>
  );
};
