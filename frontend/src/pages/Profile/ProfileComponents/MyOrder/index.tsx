import React, {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Buttons } from "../../../../components/Buttons";
import { Icon } from "../../../../components/icons/Icon";
import { Input } from "../../../../components/Input";
import { fetchUserOrderLoadingState } from "../../../../store/ducks/order/myOrders/myOrderAction";
import { AppState } from "../../../../store/reducers";
import { $, localStorageGetItem } from "../../../../utils/helpers";
import sweater from "../../../SingleProduct/image/sweater.png";

import "./MyOrder.scss";

export const MyOrder = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: AppState) => state.userOrder.data?.data);
  const user = localStorageGetItem("user");
  const orderShowHandle = (id: string) => {
    return (e: React.MouseEvent) => {
      const cardElem = $(`.order-item__card--${id}`);
      const itemElem = $(`.order-item--head__item--${id}`);
      const collapsedBg = $(`.filters__drop--${id}`);

      if (itemElem !== null && collapsedBg && cardElem) {
        if (
          collapsedBg === e.target &&
          collapsedBg.classList.contains("plus")
        ) {
          collapsedBg.classList.replace("plus", "minus");
          cardElem.style.display = "block";
          return;
        }

        if (
          collapsedBg === e.target &&
          collapsedBg.classList.contains("minus")
        ) {
          collapsedBg.classList.replace("minus", "plus");
          cardElem.style.display = "none";
          return;
        }
      }
    };
  };

  useEffect(() => {
    dispatch(fetchUserOrderLoadingState(user.data._id));
  }, [dispatch, user.data._id]);

  return (
    <div className="order-info__wrap order">
      <div className="order-info__wrap--head df">
        <div className="order-info__head--title profile--title">
          <h3>My orders</h3>
        </div>
        <div className="order-info__head--select df">
          <span className="order-info__head--select__text">Sort orders</span>
          <Input type="list" clasname="list-input" />
        </div>
      </div>
      <div className="order-info__body">
        <div className="order-list">
          {products
            ? products.map((orderObj) => (
                <ul
                  className="list--reset order-list"
                  key={orderObj._id.orderId}
                >
                  <li className="order-list--item">
                    <div className="order-item--head">
                      <ul className="order-item--head__list list--reset df">
                        <li className="order-item--head__item">
                          <span className="order-item__id">
                            # {orderObj._id.orderId}
                          </span>
                        </li>
                        <li className="order-item--head__item order-item--icon">
                          <span className="order-item__date--icon">
                            <Icon icon="clock" className="clock--icon" />
                          </span>
                          <span className="order-item__date">
                            {orderObj.createdAt}
                          </span>
                        </li>
                        <li className="order-item--head__item">
                          <span className="order-item__progress">
                            {orderObj.isDelivered === false
                              ? "In progress"
                              : "On progress"}
                          </span>
                        </li>
                        <li className="order-item--head__item">
                          <span className="order-item__price">
                            $
                            {orderObj.products.reduce(
                              (accum, item) => accum + item.price,
                              0
                            )}
                          </span>
                        </li>
                        <li
                          className={`order-item--head__item order-item--head__item--${orderObj._id.orderId}`}
                          onClick={orderShowHandle(orderObj._id.orderId)}
                        >
                          <span
                            className={`filters__drop bg--image minus filters__drop--${orderObj._id.orderId}`}
                            data-dropdown
                          ></span>
                        </li>
                      </ul>
                    </div>
                    <div
                      className={`order-item__card--body order-item__card--${orderObj._id.orderId}`}
                    >
                      {orderObj.products && orderObj.products.length > 0 ? (
                        orderObj.products.map((product) => {
                          return (
                            <article
                              className="checkout-card"
                              key={product._id}
                            >
                              <div className="checkout-card--body df">
                                <div className="checkout-card--img">
                                  <img
                                    src={sweater}
                                    alt=""
                                    className="img checkout-card--img"
                                  />
                                </div>
                                <div className="checkout-card--info df">
                                  <div className="checkout-card-info--item df">
                                    <div className="checkout-product__name-wrap">
                                      <h3 className="checkout-product__name">
                                        {decodeURI(product.name)}
                                      </h3>
                                    </div>
                                    <div className="checkout-card__color">
                                      <span className="checkout-card--info--text">
                                        Color:
                                        <span className="product-info--item-text">
                                          pink
                                        </span>
                                      </span>
                                    </div>
                                    <div className="product-size">
                                      <span className="checkout-card--info--text">
                                        Size:
                                        <span className="product-info--item-text">
                                          s
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-price__count--info df ml--auto">
                                    <div className="checkout-count__box df">
                                      <span className="product-count">1</span>
                                      <span className="up-down-icon__wrap">
                                        <Icon
                                          icon="down-down"
                                          className="product-count--icon"
                                        />
                                        <Icon
                                          icon="up-up"
                                          className="product-count--icon"
                                        />
                                      </span>
                                    </div>
                                    <div className="checkout-card__price">
                                      <span className="product-current__price">
                                        ${product.price}
                                      </span>
                                      <span className="product-old__price">
                                        ${product.price / 0.5}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="checkout--info-btn__group df">
                                    <div className="checkout-move__box df"></div>
                                  </div>
                                </div>
                              </div>
                            </article>
                          );
                        })
                      ) : (
                        <div>Product Not Found</div>
                      )}
                      <ul className="list--reset order-shopping--info__list df">
                        <li className="order-shopping--info__item">
                          <span className="order-shopping--info__item--text">
                            Subtotal:
                          </span>
                          <span className="order-shopping--info__item--price">
                            $198.65
                          </span>
                        </li>
                        <li className="order-shopping--info__item">
                          <span className="order-shopping--info__item--text">
                            Subtotal:
                          </span>
                          <span className="order-shopping--info__item--price">
                            $198.65
                          </span>
                        </li>{" "}
                        <li className="order-shopping--info__item">
                          <span className="order-shopping--info__item--text">
                            Subtotal:
                          </span>
                          <span className="order-shopping--info__item--price">
                            $198.65
                          </span>
                        </li>
                        <li className="order-shopping--info__item">
                          <span className="order-shopping--info__item--text">
                            Subtotal:
                          </span>
                          <span className="order-shopping--info__item--price">
                            $198.65
                          </span>
                        </li>
                      </ul>
                      <div className="order-item--footer df">
                        <div className="order-item--footer-content df">
                          <span className="order-tracking__text">
                            You can track your order here
                          </span>
                          <Link to={"/users/track--order"}>
                            <Buttons
                              text="Order tracking"
                              clasname="order-tracking--btn"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              ))
            : ""}
        </div>
        <div className="order-info--footer df">
          <div className="order-more">
            <Icon icon="convert" className="convert--icon" />
            <span className="order-info--footer__text">Load more</span>
          </div>
        </div>
      </div>
    </div>
  );
};
