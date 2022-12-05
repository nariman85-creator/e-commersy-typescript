import React, { useEffect, useRef } from "react";
interface SliderIndecatorProps {
  slideIndex?: number;
  className?:string
}
export const SliderIndecator: React.FC<SliderIndecatorProps> = ({
  slideIndex=0,className
}) => {
  const indicatorsRef: React.MutableRefObject<HTMLUListElement | null> =
    useRef<HTMLUListElement>(null);

  useEffect(() => {
    const indicatorsChildIndex = indicatorsRef.current?.children;

    if (indicatorsChildIndex) {

      indicatorsChildIndex[Math.min((indicatorsChildIndex.length-1),slideIndex)].classList.add("active");
    }
  }, [slideIndex]);

  return (
    <div className="container">
      <div className="carousel-indicators">
        <ul className={`list--reset indicators-list df ${className}`} ref={indicatorsRef}>
          <li className="indicators-item ">01</li>
          <li className="indicators-item">02</li>
          <li className="indicators-item">03</li>
          <li className="indicators-item">04</li>
        </ul>
      </div>
    </div>
  );
};
