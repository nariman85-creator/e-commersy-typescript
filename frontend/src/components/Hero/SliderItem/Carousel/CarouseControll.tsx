import React from "react";
interface CarouselControllProps {
  clickPrevSlide: () => void;
  clickNextSlide: () => void;
}

export const CarouseControll: React.FC<CarouselControllProps> = ({
  clickPrevSlide,
  clickNextSlide,
}) => {
  return (
    <div className="carousel-control">
      <div className="carousel-prev__control" onClick={clickPrevSlide}>
        <span className="prev-control__icon bg--image"></span>
      </div>
      <div className="carousel-next__control" onClick={clickNextSlide}>
        <span className="next-control__icon bg--image"></span>
      </div>
    </div>
  );
};
