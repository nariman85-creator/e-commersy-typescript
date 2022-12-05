import React from "react";
import { Buttons } from "../Buttons";
import { Icon } from "../icons/Icon";
import sweater from "../../pages/SingleProduct/image/sweater.png";

interface CardBascetProps {
  url: string;
  articleClass?: string;
  cardBodyClass?: string;
  imageWrapClass: string;
  cardInfoWrapClass: string;
}

export const Cardbascet: React.FC<CardBascetProps> = ({
  url,
  articleClass,
  cardBodyClass,
  imageWrapClass,
  cardInfoWrapClass
}) => {
  return (
    <article
      className={`basket-modal__card ${articleClass ? articleClass : ""}`}
    >
      <div
        className={`basket-modal__card--body df ${
          cardBodyClass ? cardBodyClass : ""
        }`}
      >
        <div className={`basket-modal__card--img ${imageWrapClass}`}>
          <img
            src={url ? url : sweater}
            alt=""
            className="img basket-modal--img"
          />
        </div>
        <div className={`basket-modal__card--info ${cardInfoWrapClass}`}>
          <div className="product-name">
            <h3>Basic hooded sweatshirt in pink</h3>
            <span className="delete-icon__wrap">
              <Icon icon="delete" className="delete--icon" />
            </span>
          </div>
          <div className="product--info__item">
            <div className="product-color">
              <span className="product-info--text">
                Color: <span className="product-info--item-text">pink</span>
              </span>
            </div>
            <div className="product-size">
              <span className="product-info--text">
                Size: <span className="product-info--item-text">s</span>
              </span>
            </div>
            <div className="product-price__count--info df">
              <div className="product-count__box df">
                <span className="product-count">1</span>
                <span className="up-down-icon__wrap ">
                  <Icon icon="down-down" className="product-count--icon" />
                  <Icon icon="up-up" className="product-count--icon" />
                </span>
              </div>
              <div className="product-price">
                <span className="product-current__price">$119.16</span>
                <span className="product-old__price">$200</span>
              </div>
            </div>
            <div className="product--info__footer df">
              <Buttons text="Move to" clasname="product--info__footer-btn" />
              <Icon icon="heart" className="product--info__footer--icon" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
