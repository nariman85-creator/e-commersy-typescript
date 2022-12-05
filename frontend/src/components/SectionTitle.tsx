import React from "react";
interface SectionTitleProps {
  className?: string;
  text: string;
  description?: string;
  descClass?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  className,
  text,
  description,
  descClass,
}) => {
  return (
    <div className={`title ${className}`}>
      <span className={`title-text`}>{text}</span>
      {description ? (
        <p className={`title-description ${descClass}`}>{description}</p>
      ) : (
        ""
      )}
    </div>
  );
};
