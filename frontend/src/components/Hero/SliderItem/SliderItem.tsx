import React from "react";
export interface SliderItemProps {
  data: { title?: string; text?: string; imageUrl?: string }[];
  className?: string;
}

export const SliderItem: React.FC<SliderItemProps> = ({
  data,
  className
}: SliderItemProps) => {
  return (
    <>
      {data &&
        data.map((obj,index) => (
          <div
            key={index}
            className={`carousel-item item ${className}`}
            style={{ backgroundImage: `url(${obj.imageUrl})` }}
          >
            <div className="container hero-container">
              <div className="carousel-caption">
                <h3 className="carousel-item__title">{obj.title}</h3>
                <h2 className="carousel-item__text">{obj.text}</h2>
              </div>
              <div className="carousel-btns__box">
                <button className="carousel-btn btn--reset btn left--btn">
                  Shop sale
                </button>
                <button className="carousel-btn btn--reset btn rigth--btn btn--primary btn--white">
                  Shop the menswear
                </button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};
