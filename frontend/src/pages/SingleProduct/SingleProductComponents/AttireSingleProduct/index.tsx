import React, { useCallback, useEffect, useState } from "react";
import { Card } from "../../../../components/Card/Card";
import { Icon } from "../../../../components/icons/Icon";
import { SectionTitle } from "../../../../components/SectionTitle";
import { $ } from "../../../../utils/helpers";
import sweater from "../../image/sweater.png";

import "./AttireSingleProduct.scss";
interface ChangePositionHandleProps {
  sliderLeftArrow?: HTMLElement | null;
  sliderContentWrap: HTMLElement | null;
  sliderInner: HTMLElement | null;
  changePositionElem: number;
  sliderRightArrow?: HTMLElement | null;
  attireSlider?: HTMLElement | null;
  attireContent?: HTMLElement | null;
}

export const AttireSingleProduct = () => {
  const [changePositionElem, setChangePositionElem] = useState<number>(0);

  const handleLeftSliderClick = useCallback(
    ({
        sliderContentWrap,
        sliderInner,
        sliderLeftArrow,
        attireSlider,
        changePositionElem,
      }: ChangePositionHandleProps) =>
      (e: MouseEvent) => {
        const anyElem = e.target as HTMLElement;

        if (
          anyElem === sliderLeftArrow &&
          sliderContentWrap &&
          sliderInner &&
          attireSlider
        ) {
          setChangePositionElem(
            (changePositionElem =
              sliderContentWrap?.getBoundingClientRect().left -
              attireSlider?.getBoundingClientRect().left)
          );

          if (
            sliderContentWrap.getBoundingClientRect().left >=
            attireSlider.getBoundingClientRect().left
          ) {
            setChangePositionElem(
              (changePositionElem = Math.min(
                0,
                attireSlider.getBoundingClientRect().left
              ))
            );
            sliderContentWrap.style.transform = `translateX(${changePositionElem}px)`;
            return;
          }

          if (
            sliderContentWrap.getBoundingClientRect().left <=
            attireSlider.getBoundingClientRect().left
          ) {
            setChangePositionElem(
              (changePositionElem += sliderInner.getBoundingClientRect().width)
            );

            sliderContentWrap.style.transform = `translateX(${changePositionElem}px)`;

            return;
          }
        }
      },
    []
  );

  const handleRightSliderClick = useCallback(
    ({
        sliderContentWrap,
        sliderInner,
        sliderRightArrow,
        changePositionElem,
        attireSlider,
        attireContent,
      }: ChangePositionHandleProps) =>
      (e: MouseEvent) => {
        const anyElem = e.target as HTMLElement;

        if (
          anyElem === sliderRightArrow &&
          sliderContentWrap &&
          sliderInner &&
          attireSlider &&
          attireContent
        ) {
          setChangePositionElem(
            (changePositionElem =
              attireSlider.getBoundingClientRect().right -
              sliderContentWrap.getBoundingClientRect().right)
          );

          if (
            sliderContentWrap.getBoundingClientRect().right <=
            attireContent.getBoundingClientRect().right
          ) {
            return;
          }

          if (
            sliderContentWrap.getBoundingClientRect().right <=
            attireSlider.getBoundingClientRect().right
          ) {
            console.log("ne true");
            console.log(changePositionElem);

            setChangePositionElem(
              (changePositionElem += sliderInner.getBoundingClientRect().width)
            );
            console.log(changePositionElem);

            sliderContentWrap.style.transform = `translateX(-${changePositionElem}px)`;

            return;
          }
        }
      },
    []
  );
  useEffect(() => {
    const sliderLeftArrow = $(".left-slider--arrow");
    const sliderContentWrap: HTMLElement | null = $(".attire-slider__content");
    const sliderInner = $(".attire-slider__inner");
    const sliderRightArrow = $(".right-slider--arrow");
    const attireSlider = $(".attire-slider");
    const attireContent = $(".attire-content");

    if (sliderLeftArrow) {
      sliderLeftArrow.addEventListener(
        "click",
        handleLeftSliderClick({
          sliderContentWrap,
          sliderInner,
          sliderLeftArrow,
          attireSlider,
          changePositionElem,
        })
      );
    }
    if (sliderRightArrow) {
      sliderRightArrow.addEventListener(
        "click",
        handleRightSliderClick({
          sliderContentWrap,
          sliderInner,
          sliderRightArrow,
          changePositionElem,
          attireSlider,
          attireContent,
        })
      );
    }
  }, [handleLeftSliderClick, handleRightSliderClick]);

  return (
    <div className="attire-page attire">
      <div className="container attire-page__container">
        <div className="attire-head df">
          <SectionTitle
            text="Complete your look"
            className="attire-head--title"
          />
          <ul className="attire-divider__list list--reset df">
            <li>
              <Icon icon="right" className="left-slider--arrow" />
            </li>

            <li>
              <Icon icon="left" className="right-slider--arrow" />
            </li>
          </ul>
        </div>
        <div className="attire-content df">
          <div className="attire-col">
            <img src={sweater} className="img" alt="" />
          </div>
          <div className="attire-col">
            <div className="attire-slider ">
              <div className="attire-slider__content df">
                <div className="attire-slider__inner df">
                  <div className="attire-slider__item">
                    <Card
                      collapsed={false}
                      imageUrl={sweater}
                      productName="sweater"
                    />
                  </div>
                  <div className="attire-slider__item">
                    <Card
                      collapsed={false}
                      imageUrl={sweater}
                      productName="sweater"
                    />
                  </div>
                </div>
                <div className="attire-slider__inner df">
                  <div className="attire-slider__item">
                    <Card
                      collapsed={false}
                      imageUrl={sweater}
                      productName="sweater"
                    />
                  </div>
                  <div className="attire-slider__item">
                    <Card
                      collapsed={false}
                      imageUrl={sweater}
                      productName="sweater"
                    />
                  </div>
                </div>{" "}
                <div className="attire-slider__inner df">
                  <div className="attire-slider__item">
                    <Card
                      collapsed={false}
                      imageUrl={sweater}
                      productName="sweater"
                    />
                  </div>
                  <div className="attire-slider__item">
                    <Card
                      collapsed={false}
                      imageUrl={sweater}
                      productName="sweater"
                    />
                  </div>
                </div>{" "}
                <div className="attire-slider__inner df">
                  <div className="attire-slider__item">
                    <Card
                      collapsed={false}
                      imageUrl={sweater}
                      productName="sweater"
                    />
                  </div>
                  <div className="attire-slider__item">
                    <Card
                      collapsed={false}
                      imageUrl={sweater}
                      productName="sweater"
                    />
                  </div>
                </div>{" "}
                <div className="attire-slider__inner df">
                  <div className="attire-slider__item">
                    <Card
                      collapsed={false}
                      imageUrl={sweater}
                      productName="sweater"
                    />
                  </div>
                  <div className="attire-slider__item">
                    <Card
                      collapsed={false}
                      imageUrl={sweater}
                      productName="sweater"
                    />
                  </div>
                </div>{" "}
                <div className="attire-slider__inner df">
                  <div className="attire-slider__item">
                    <Card
                      collapsed={false}
                      imageUrl={sweater}
                      productName="sweater"
                    />
                  </div>
                  <div className="attire-slider__item">
                    <Card
                      collapsed={false}
                      imageUrl={sweater}
                      productName="sweater"
                    />
                  </div>
                </div>
              </div>
              <div className="attire-slider__indicators df">
                <ul className="list--reset attire-indicators--list df">
                  <li className="active--indicators indicators"></li>
                  <li className="indicators"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
