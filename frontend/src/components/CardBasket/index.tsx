import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Buttons } from "../Buttons";
import { Icon } from "../icons/Icon";
import { SectionTitle } from "../SectionTitle";
import { $, showHandleModal } from "../../utils/helpers";
import sweater from "../../pages/SingleProduct/image/sweater.png";
import "./Cardbasket.scss";

export const CardBusket = () => {
  useEffect(() => {
    const overlay = $(".basket-overlay");
    const close = $(".basket-modal__card-close--icon");
    if (!close) return;

    document.addEventListener("click", showHandleModal(overlay, close));
    return document.removeEventListener(
      "click",
      showHandleModal(overlay, close)
    );
  }, []);

  return (
    <div className="card-basket basket-modal--wrap basket-modal">
      <div className="basket-modal--head df">
        <div className="basket-modal--head--title df">
          <SectionTitle
            text="Your cart"
            className="basket-modal--head--title__text"
          />
          <span className="basket-modal--head--title__text">(4)</span>
        </div>
        <Icon icon="close" className="basket-modal__card-close--icon" />
      </div>
      <div className="basket-modal__card-wrap">
        <article className="basket-modal__card">
          <div className="basket-modal__card--body df">
            <div className="basket-modal__card--img">
              <img src={sweater} alt="" className="img basket-modal--img" />
            </div>
            <div className="basket-modal__card--info">
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
                  <Buttons
                    text="Move to"
                    clasname="product--info__footer-btn"
                  />
                  <Icon icon="heart" className="product--info__footer--icon" />
                </div>
              </div>
            </div>
          </div>
        </article>
        <div className="basket-modal__card--info__footer">
          <div className="basket-modal__card--info__footer-head df">
            <SectionTitle text="Subtotal:" className="" />
            <span className="card-price--count">$198.65</span>
          </div>
          <Link to={"/product/checkout"}>
            <Buttons text="Checkout" clasname="footer--checkout">
              <Icon icon="checkout" className="footer--icon" />
            </Buttons>
          </Link>
        </div>
      </div>
    </div>
  );
};
