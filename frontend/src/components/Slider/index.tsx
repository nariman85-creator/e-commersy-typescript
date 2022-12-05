import React, { ReactElement } from "react";
import data from "../../helper/data.json";
import { CarouseControll } from "../Hero/SliderItem/Carousel/CarouseControll";

interface SliderProps {
  clickNextSlide?: () => void;
  clickPrevSlide?: () => void;
  component: () => ReactElement;
  indicatorsDot?: () => ReactElement | null;
  moving?: number;
  slide_ref: React.MutableRefObject<any | null>;
  data?: ReturnType<() => typeof data>;
  classname?:string
}

export const Slider: React.FC<SliderProps> = ({
  clickPrevSlide,
  clickNextSlide,
  component,
  indicatorsDot,
  moving,
  slide_ref,
  classname,
}) => {
  return (
    <div className="carousel hero-carousel">
      {clickNextSlide && clickPrevSlide && (
        <CarouseControll
          clickNextSlide={clickNextSlide}
          clickPrevSlide={clickPrevSlide}
        />
      )}

      <div
        className={`carousel-inner ${classname}`}
        ref={slide_ref}
        style={{ transform: `translateX(${moving}px)` }}
      >
        {component()}
      </div>
      {slide_ref.current
        && indicatorsDot ? indicatorsDot():''
        }
    </div>
  );
};
