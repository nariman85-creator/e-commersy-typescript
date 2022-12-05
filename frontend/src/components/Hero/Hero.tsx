import React, { useRef, useState } from "react";
import { Slider } from "../Slider";
import "./Hero.scss";
import data from "../../helper/data.json";

import { SliderIndecator } from "./SliderItem/SliderIndecator";
import { SliderItem } from "./SliderItem/SliderItem";

export const Hero = () => {
  const slideRef: React.MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null);
  let [slider, setSlider] = useState<number>(0);
  let [slideIndex, setSlideIndex] = useState<number>(0);

  const showNextSliderHandler = () => {
    setSlider((next) => {
      if (slideRef.current) {
        const newOffset = (next -= slideRef.current.offsetWidth);
        const childSlider =
          -(slideRef.current?.childElementCount - 1) *
          slideRef?.current?.offsetWidth;

        setSlideIndex(
          (next * (slideRef.current.childElementCount - 1)) / childSlider
        );

        return Math.max(newOffset, childSlider);
      } else {
        return 0;
      }
    });
  };

  const showPrevSliderHandler = () => {
    setSlider((next) => {
      if (slideRef.current) {
        const newOffset = (next += slideRef.current.offsetWidth);
        const childSlider =
          -(slideRef.current?.childElementCount - 1) *
          slideRef?.current?.offsetWidth;

        setSlideIndex((prev) => {
          if (slideRef.current) {
            const prevIndex =
              (next * (slideRef.current.childElementCount - 1)) / childSlider;
            return Math.max(prevIndex, 0);
          }
          return 0;
        });
        return Math.min(newOffset, 0);
      } else {
        return 0;
      }
    });
  };

  return (
    <section className="hero">
      <div className="hero-body bg--image">
        <Slider
          clickNextSlide={showNextSliderHandler}
          clickPrevSlide={showPrevSliderHandler}
          component={() => <SliderItem data={data} />}
          classname={'carousel-hero__inner'}
          moving={slider}
          data={data}
          slide_ref={slideRef}
          indicatorsDot={() => (
            <SliderIndecator slideIndex={slideIndex} className="indicators-hero__list" />
          )}
        />
      </div>
    </section>
  );
};
