import React, { ReactNode, useRef, useState } from "react";
import { Heart } from "../Parts/Heart";
import { Star } from "../Parts/Star";
import kepka from "../../assets/images/arrivals/kepka.png";
import "./Card.scss";
import { SaleBenefit } from "../benefit/newbenefit";
import { Buttons } from "../Buttons";
import { SliderControl } from "../SliderControls";
import { Link } from "react-router-dom";
interface CardProps {
  children?: ReactNode | ReactNode[];
  imageUrl: string;
  productName: string;
  price?: number;
  saleProduct?: boolean;
  className?: string;
  success?: boolean;
  productImage?: string[];
  collapsed: boolean;
  key?: any;
  uriPath?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  imageUrl,
  price,
  productName,
  saleProduct,
  className = "",
  success,
  productImage,
  collapsed = false,
  uriPath = "#",
  key = Math.random(),
}) => {
  const [moving, setMoving] = useState<number>(0);
  const slideRef: React.MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null);

  const nextHandleClick = () => {
    const childCount = slideRef.current?.childElementCount;
    const targetWidth = slideRef.current?.offsetWidth;
    if (slideRef.current) {
      if (childCount && targetWidth) {
        const fullWidth = childCount * targetWidth;
        setMoving((prev) => {
          if (prev >= targetWidth - fullWidth) {
            prev -= targetWidth;
            return Math.max(prev, targetWidth - fullWidth);
          }
          return prev;
        });
      }
      slideRef.current.style.transform = `translateX(${moving}px)`;
    }
  };
  const prevHandleClick = () => {
    const childCount = slideRef.current?.childElementCount;
    const targetWidth = slideRef.current?.offsetWidth;

    if (slideRef.current) {
      if (childCount && targetWidth) {
        const fullWidth = childCount * targetWidth;
        setMoving((prev) => {
          if (prev <= fullWidth - targetWidth) {
            console.log(prev);

            prev += targetWidth;
            return Math.min(prev, 0);
          }
          return prev;
        });
      }
      slideRef.current.style.transform = `translateX(${moving}px)`;
    }
  };

  return (
    <article className="card" key={key}>
      <div className={`card-body ${success ? "success" : ""} ${className}`}>
        <Link to={uriPath}>
          <div className="card-img__top">
            {saleProduct && <SaleBenefit text="-%50" />}
            {success ? (
              <div
                className="card-image--slider__wrap"
                ref={slideRef}
                style={{ transform: `translateX(${moving}px)` }}
              >
                {productImage?.map((url) => (
                  <img
                    src={url ? url : kepka}
                    alt="product_image"
                    className="img--reset img"
                  />
                ))}
              </div>
            ) : (
              <img
                src={imageUrl ? kepka : kepka}
                alt=""
                className="img--reset"
              />
            )}
            {success && (
              <SliderControl
                nextHandle={nextHandleClick}
                prevHandle={prevHandleClick}
                nextClassname={"card-next-icon__box"}
                prevClassname={"card-prev-icon__box"}
                className={"card-icon__box"}
                nextIconBox={"card-next--icon"}
                prevIconBox={"card-prev--icon"}
              />
            )}
            <div className="card-like">
              <Heart />
            </div>
            <div className="card-raiting">
              <Star count={5} color={"gold"} />
            </div>
          </div>
        </Link>
        <div className="card-bootom">
          <div className="card-info">
            <div className="card-descr">
              <span
                className="product-name"
                data-product-name={`${productName}`}
              >
                {productName ? productName : "Black and white sport cap"}
              </span>
              {success ? (
                <div className="product-price">
                  <span className="product-current__price">$119.16</span>
                  <span className="product-old__price">$200</span>
                </div>
              ) : (
                <span className="product-price">${price ? price : 18.15}</span>
              )}
            </div>
          </div>
        </div>
        {collapsed && (
          <div className="collapsed card-collapsed">
            <div className="card-feature">
              <div className="product-properties df">
                <div className="product-size">
                  <ul className="product-size__list list list--reset df">
                    <li className="product-list__item">
                      <input
                        type="checkbox"
                        name="color"
                        id="color"
                        value={36}
                      />
                    </li>
                    <li className="product-list__item">
                      {" "}
                      <input
                        type="checkbox"
                        name="color"
                        id="color"
                        value={37}
                        className="active"
                      />
                    </li>
                    <li className="product-list__item">
                      {" "}
                      <input
                        type="checkbox"
                        name="color"
                        id="color"
                        value={38}
                      />
                    </li>
                    <li className="product-list__item">
                      {" "}
                      <input
                        type="checkbox"
                        name="color"
                        id="color"
                        value={39}
                      />
                    </li>
                    <li className="product-list__item">
                      {" "}
                      <input
                        type="checkbox"
                        name="color"
                        id="color"
                        value={40}
                      />
                    </li>
                  </ul>
                </div>
                <div className="product-color">
                  <ul className="list list--reset product-color__list df">
                    <li className="product-color__item active">
                      <input type="radio" name="color" id="" value={"black"} />
                    </li>
                    <li className="product-color__item">
                      <input type="radio" name="color" id="" value={"brown"} />
                    </li>
                    <li className="product-color__item">
                      <input
                        type="radio"
                        name="color"
                        id=""
                        value={"ligth-blue"}
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-btn__box">
                <Buttons
                  text="Add to cart"
                  clasname="btn-add card-btn--basket__icon"
                />
              </div>
            </div>
          </div>
        )}
        {children && <div className="auxiliary">{children}</div>}
      </div>
    </article>
  );
};
