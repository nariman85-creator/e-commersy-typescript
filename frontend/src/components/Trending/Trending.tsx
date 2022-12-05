import React, {  useRef, useState } from "react";
import { Buttons } from "../Buttons";
import { Card } from "../Card/Card";
import { SectionTitle } from "../SectionTitle";
import { SliderControl } from "../SliderControls";
import "./Trending.scss";

export const Trending = () => {
  const [moving, setMoving] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const slideNextHandle = () => {
    const elemChildCount = sliderRef.current?.childElementCount;
    const offsetElem = sliderRef.current?.offsetWidth;
    if (elemChildCount && offsetElem) {
      const fullWidth = elemChildCount * offsetElem;
      setMoving((next) => {
        if (next >= offsetElem - fullWidth) {
          next -= offsetElem;

          return Math.max(next, offsetElem - fullWidth);
        }

        return next;
      });
    }
  };
  const slidePrevHandle = () => {
    const elemChildCount = sliderRef.current?.childElementCount;
    const offsetElem = sliderRef.current?.offsetWidth;
    if (elemChildCount && offsetElem) {
      const fullWidth = elemChildCount * offsetElem;
      setMoving((next) => {
        if (next <= offsetElem - fullWidth) {
          next += offsetElem;

          return Math.min(0, next);
        }

        return next;
      });
    }
  };
  return (
    <section className="trending-section section trending">
      <div className="container trending-container">
        <div className="trending-head">
          <SectionTitle text="Trending now" className={"trending--title"} />
          <SliderControl
            className="trending-controls"
            prevClassname="trending-controls__prev"
            nextClassname="trending-controls__next"
            nextHandle={slideNextHandle}
            prevHandle={slidePrevHandle}
            size={24}
            nextIconBox={"arrow-rigth--icon"}
            prevIconBox={"arrow-left--icon"}
          />
        </div>
        <div className="trending-body">
          <div className="trending-carousel">
            <div
              className="trending-carousel__inner df"
              style={{ transform: `translateX(${moving}px)` }}
              ref={sliderRef}
            >
              <div className="trending-carousel__item--wrap">
                <div className="trending-carousel__item">
                  <Card imageUrl="" productName=""  collapsed={false} />
                </div>
                <div className="trending-carousel__item">
                  <Card imageUrl="" productName="" collapsed={false} />
                </div>
                <div className="trending-carousel__item">
                  <Card imageUrl="" productName=""  collapsed={false}/>
                </div>
              </div>
              <div className="trending-carousel__item--wrap">
                <div className="trending-carousel__item">
                  <Card imageUrl="" productName="" collapsed={false} />
                </div>
                <div className="trending-carousel__item">
                  <Card imageUrl="" productName="" collapsed={false}/>
                </div>
                <div className="trending-carousel__item">
                  <Card imageUrl="" productName="" collapsed={false} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="trending-btn--box">
          <Buttons text="Explore top sales" />
        </div>
      </div>
    </section>
  );
};
