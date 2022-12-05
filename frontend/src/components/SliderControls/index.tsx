import React from "react";
interface IControlsSliderProps {
  className: string;
  nextClassname: string;
  prevClassname: string;
  nextHandle: () => void;
  prevHandle: () => void;
  size?: number;
  prevIconBox: string;
  nextIconBox: string;
}

export const SliderControl: React.FC<IControlsSliderProps> = ({
  className,
  nextClassname,
  prevClassname,
  nextHandle,
  prevHandle,
  size,
  prevIconBox,
  nextIconBox,
}) => {

  return (
    <div className={`controls ${className}`}>
      <div className={`controls__prev ${prevClassname}`} onClick={prevHandle}>
        <span
          className={`controls--prev__icon ${prevIconBox}`}
          style={{ width: `${size}px`, height: `${size}px` }}
        ></span>
      </div>
      <div
        className={`trending-controls__next ${nextClassname}`}
        onClick={nextHandle}
      >
        <span
          className={`controls--prev__icon ${nextIconBox}`}
          style={{ width: `${size}px`, height: `${size}px` }}
        ></span>
      </div>
    </div>
  );
};
