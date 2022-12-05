/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState } from "react";

import { Buttons } from "../Buttons";
import { Card } from "../Card/Card";
import { SectionTitle } from "../SectionTitle";

import bag from "../../assets/images/sale/bag.png";
import jeans from "../../assets/images/sale/jeans.png";
import boots from "../../assets/images/sale/boots.png";

import "./Sale.scss";

export const Sale = () => {
  const [moving, setMoving] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const slideNextHandle = () => {
    const elemChildCount = sliderRef.current?.childElementCount;
    const offsetElem = sliderRef.current?.offsetWidth;

    if (offsetElem && elemChildCount) {
      const fullWidth = elemChildCount * offsetElem;
      setMoving((next) => {
        if (next >= offsetElem - fullWidth) {
          next -= offsetElem;
          return Math.max(next, offsetElem - fullWidth);
        }
        return 0;
      });
    }
  };

  const slidePrevHandle = () => {
    const elemChildCount = sliderRef.current?.childElementCount;
    const offsetElem = sliderRef.current?.offsetWidth;

    if (offsetElem && elemChildCount) {
      const fullWidth = elemChildCount * offsetElem;
      setMoving((prev) => {
        if (prev <= fullWidth) {
          prev += offsetElem;

          return Math.min(0, fullWidth);
        }

        return 0;
      });
    }
  };
  return (
    <section className="sale-section section sale">
      <div className="container sale-container">
        <div className="sale-head">
          <SectionTitle text="Sale up to 70%" className={"sale--title"} />
          <div className="sale-controls">
            <div
              className="sale-controls__prev controls-custom"
              onClick={slidePrevHandle}
            >
              <span className="sale-controls--prev__icon sale--icon arrow-left--icon"></span>
            </div>
            <div
              className="sale-controls__next controls-custom active"
              onClick={slideNextHandle}
            >
              <span className="sale-controls--next__icon sale--icon arrow-rigth--icon"></span>
            </div>
          </div>
        </div>
        <div className="sale-body">
          <div className="sale-carousel">
            <div
              className="sale-carousel__inner df"
              style={{ transform: `translateX(${moving}px)` }}
              ref={sliderRef}
            >
              <div className="sale-item__wrap">
                <div className="sale-carousel__item">
                  <Card
                    imageUrl=""
                    productName=""
                    success
                    saleProduct={true}
                    productImage={[bag, jeans, boots]}
                    collapsed={false}
                    key={`${Math.random() * Date.now()}`}
                  />
                </div>
                <div className="sale-carousel__item">
                  <Card
                    imageUrl=""
                    collapsed={false}
                    productName=""
                    success
                    saleProduct={true}
                    productImage={[bag, jeans, boots]}
                    key={`${Math.random() * Date.now()}`}
                  />
                </div>
                <div className="sale-carousel__item">
                  <Card
                    imageUrl=""
                    productName=""
                    collapsed={false}
                    success
                    saleProduct={true}
                    productImage={[bag, jeans, boots]}
                    key={`${Math.random() * Date.now()}`}
                  />
                </div>
              </div>
              <div className="sale-item__wrap">
                <div className="sale-carousel__item">
                  <Card
                    imageUrl=""
                    productName=""
                    success
                    saleProduct={true}
                    productImage={[bag, jeans, boots]}
                    collapsed={false}
                    key={`${Math.random() * Date.now()}`}
                  />{" "}
                </div>
                <div className="sale-carousel__item">
                  <Card
                    imageUrl=""
                    productName=""
                    success
                    saleProduct={true}
                    productImage={[bag, jeans, boots]}
                    collapsed={false}
                    key={`${Math.random() * Date.now()}`}
                  />
                </div>
                <div className="sale-carousel__item">
                  <Card
                    imageUrl=""
                    productName=""
                    success
                    saleProduct={true}
                    productImage={[bag, jeans, boots]}
                    collapsed={false}
                    key={`${Math.random() * Date.now()}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sale-btn--box">
          <Buttons text="See all sale products" />
        </div>
      </div>
    </section>
  );
};
