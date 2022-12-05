import React, { memo, useEffect, useState } from "react";
import { Buttons } from "../../../../components/Buttons";
import { Icon } from "../../../../components/icons/Icon";
import { Modal } from "../../../../components/Modal/Modal";
import { SectionTitle } from "../../../../components/SectionTitle";
import { $, $$, addAndRemoveActiveHandle, localStorageGetItem } from "../../../../utils/helpers";
import sweater from "../../image/sweater.png";
import { SizeChart } from "./SizeChart";
import "./General.scss";
import { CardBusket } from "../../../../components/CardBasket";

interface GeneralProps {
  size: string[];
  colors: string[];
  rating: number;
  _id: string;
  quantity: number;
  price: number;
  sale: number;
  imageUrl: string;
}

export const General: React.FC<GeneralProps> = memo(
  ({ size, rating, colors, _id, quantity, price, sale, imageUrl }) => {
    let [imageCounter, setImageCounter] = useState(0);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [showCardModal, setShowCardModal] = useState<boolean>(false);
    const [countProduct, setCountProduct] = useState<number>(1);
    const decrementHandle = () => {
      setCountProduct((prev) => {
        if (prev <= 0) return 0;
        return prev - 1;
      });
    };
    const incrementHandle = () => {
      setCountProduct((prev) => {
        return prev + 1;
      });
    };

    const addCardHandle = (id: string) => {
      const cardId: string[] = localStorageGetItem("addToCard");
      setShowCardModal((prev) => {
        if (!prev) {
          return true;
        }
        if (prev) return false;
        return false;
      });
      const arrСheck = cardId.some((elem) => {
        return elem === id;
      });
      if (arrСheck) return;

      cardId.push(id);
      localStorage.setItem("addToCard", JSON.stringify(cardId));
    };

    const toggleHandleClickReturn = () => {
      return (e: React.MouseEvent) => {
        const dropDownElem = $(
          ".single-product__shop-commitment__return--info"
        );
        if (dropDownElem) {
          const spanIcon = e.target as HTMLSpanElement;
          if (dropDownElem.classList.contains("d--none")) {
            dropDownElem.classList.remove("d--none");
            spanIcon.classList.replace("plus", "minus");
            return;
          }
          if (!dropDownElem.classList.contains("d--none")) {
            dropDownElem.classList.add("d--none");
            spanIcon.classList.replace("minus", "plus");
            return;
          }
          return;
        }
      };
    };
    const toggleHandleClickDelivery = () => {
      return (e: React.MouseEvent) => {
        const dropDownElem = $(
          ".single-product__shop-commitment__delivery--info"
        );
        if (dropDownElem) {
          const spanIcon = e.target as HTMLSpanElement;
          if (dropDownElem.classList.contains("d--none")) {
            dropDownElem.classList.remove("d--none");
            spanIcon.classList.replace("plus", "minus");
            return;
          }
          if (!dropDownElem.classList.contains("d--none")) {
            dropDownElem.classList.add("d--none");
            spanIcon.classList.replace("minus", "plus");
            return;
          }
          return;
        }
      };
    };
    useEffect(() => {
      const mainImage = $("[data-mainimg]") as HTMLImageElement;
      const imageGroup = $$(
        ".img--group"
      ) as NodeListOf<HTMLImageElement> | null;
      const leftArrow = $(".arrow--left");
      const rightArrow = $(".arrow--right");

      window.addEventListener(
        "click",
        addAndRemoveActiveHandle({
          leftArrow,
          rightArrow,
          imageCounter,
          imageGroup,
          mainImage,
          setImageCounter,
        })
      );
      return window.removeEventListener(
        "click",
        addAndRemoveActiveHandle({
          leftArrow,
          rightArrow,
          imageCounter,
          imageGroup,
          mainImage,
          setImageCounter,
        })
      );
    }, []);

    return (
      <>
        <div className="col">
          <div className="single-product-image">
            <div className="single-product__main--image">
              <img
                src={sweater ?? imageUrl[0]}
                alt=""
                className="img"
                data-mainimg
              />
              <div className="layout--img">
                <span className="arrow--wrap prev--arrow">
                  <Icon icon="right" className="arrow--icon arrow--left" />
                </span>
                <span className="arrow--wrap next--arrow">
                  <Icon icon="left" className="arrow--icon arrow--right" />
                </span>
              </div>
            </div>
            <div className="single-product__image-group df">
              <img src={sweater} alt="" className="img img--group active" />
              <img src={sweater} alt="" className="img img--group" />
              <img src={sweater} alt="" className="img img--group" />
              <img src={sweater} alt="" className="img img--group" />
              <img src={sweater} alt="" className="img img--group" />
              {/* <video src="#"></video> */}
            </div>
          </div>
        </div>
        <div className="col">
          <div className="single-product__all-details df">
            <div className="single-product__all-details--head">
              <div className="single-product__price df">
                <div className="single-product__price--current">${price}</div>
                <div className="single-product__price--prev">$15.50</div>
                <div className="single-product__price--sale">
                  <div className="single-product__price--sale__count">
                    <span>50%</span>
                  </div>
                </div>
                <div className="single-product__reviews">
                  <div className="single-product--rating">
                    <i className="star--img" style={{ color: "gold" }}>
                      {/* &#9733; */}
                    </i>
                    <i className="star--img" style={{ color: "gold" }}>
                      {/* &#9733; */}
                    </i>
                    <i className="star--img" style={{ color: "gold" }}>
                      {/* &#9733; */}
                    </i>
                    <i className="star--img" style={{ color: "gold" }}>
                      {/* &#9733; */}
                    </i>
                    <i className="star--img" style={{ color: "gold" }}>
                      {/* &#9733; */}
                    </i>
                  </div>
                  <div className="single-product__reviews--count">
                    <span className="reviews-count">12</span> reviews
                  </div>
                </div>
              </div>
              <div className="single-product__details--colors df">
                <h5 className="single-product__details-color--text single-product--title">
                  Color
                </h5>
                <ul className="list--reset single-product__details--color__list df">
                  {colors.length > 0
                    ? colors.map((color) => {
                        return (
                          <li className="single-product__details--color__item active">
                            <input
                              type="checkbox"
                              name=""
                              id=""
                              className="single-product__details--color"
                              style={{ backgroundColor: color }}
                            />
                          </li>
                        );
                      })
                    : "Colors not found"}
                </ul>
              </div>
              <div className="single-product__details--size">
                <h5 className="single-product__details-size--text single-product--title">
                  Size
                </h5>
                <div className="single-product__details--size__tools df">
                  <div className="size-list--wrap df">
                    <span className="single-product__details-size--list single-product--title">
                      Please select
                    </span>
                    <Icon icon="down_chevron" className="size--icon" />

                    <ul className="list--reset single-product__details--size-list d--none">
                      {size.length > 0 &&
                        size.map((text) => {
                          return (
                            <li className="single-product__details--size-item">
                              {text}
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                  <div className="single-product__details-size--chart df">
                    <Icon
                      icon="hanger"
                      className="size-chart--icon"
                      onClick={(e) => setShowModal(!showModal)}
                    />
                    {showModal && (
                      <div
                        className="overlay df size--overlay"
                        style={{ display: "flex" }}
                      >
                        <Modal className="modal-size">
                          <SizeChart
                            showModalhandle={setShowModal}
                            showModal={showModal}
                          />
                        </Modal>
                      </div>
                    )}

                    <span className="size-chart--text">Size chart</span>
                  </div>
                </div>
              </div>
              <div className="single-product__details--tolls__btn-group df">
                <div className="product-count__box df">
                  <span className="product-count">{countProduct}</span>
                  <span className="up-down-icon__wrap ">
                    <Icon
                      icon="down-down"
                      className="product-count--icon"
                      onClick={incrementHandle}
                    />
                    <Icon
                      onClick={decrementHandle}
                      icon="up-up"
                      className="product-count--icon"
                    />
                  </span>
                </div>

                <div className="btn--group df">
                  {showCardModal && (
                    <div
                      className="overlay df basket-overlay"
                      style={{ display: "flex" }}
                    >
                      <Modal className="modal-card">
                        <CardBusket />
                      </Modal>
                    </div>
                  )}
                  <Buttons
                    text="Add to cart"
                    clasname="add-to--basket"
                    onClick={(e) => addCardHandle(_id)}
                  >
                    <Icon icon="basket" className="" />
                  </Buttons>
                  <Buttons
                    text="Favourite"
                    clasname="product-details--favorite"
                  >
                    <Icon icon="heart" className="" />
                  </Buttons>
                </div>
              </div>
            </div>
          </div>
          <div className="single-product__shop-commitment df">
            <div className="single-product__shop-commitment__delivery df">
              <div className="single-product__shop-commitment__delivery--head df">
                <SectionTitle
                  text={"Delivery"}
                  className="commitment__delivery-filter--text "
                />
                <span
                  className="filters__drop bg--image plus"
                  data-dropdown
                  onClick={toggleHandleClickDelivery()}
                ></span>
              </div>
              <div className="single-product__shop-commitment__delivery--info d--none ">
                <h4 className="single-product__shop-commitment__delivery--info__text">
                  Free standard shipping on orders{" "}
                  <span style={{ marginRight: "5px" }}>over $35</span>
                  before tax, plus free returns.
                </h4>
                <table className="delivery--tools">
                  <thead>
                    <tr>
                      <th>TYPE</th>
                      <th>HOW LONG</th>
                      <th>HOW MUCH</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Standard delivery</td>
                      <td>1-4 business days</td>
                      <td>$4.50</td>
                    </tr>
                    <tr>
                      <td>Standard delivery</td>
                      <td>1-4 business days</td>
                      <td>$4.50</td>
                    </tr>
                    <tr>
                      <td>Standard delivery</td>
                      <td>1-4 business days</td>
                      <td>$4.50</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="single-product__shop-commitment__return df">
              <div className="shop-commitment__return--head single-product__shop-commitment__delivery--head df">
                <SectionTitle
                  text={"Return"}
                  className="commitment__delivery-filter--text "
                />
                <span
                  className="filters__drop bg--image plus"
                  data-dropdown
                  onClick={toggleHandleClickReturn()}
                ></span>
              </div>
              <div className="single-product__shop-commitment__return--info d--none">
                <h4 className="single-product-shop-commitment__return--info__text single-product--title">
                  You have so <span>60 days</span> to return the item(s) using
                  any of the following methods:
                </h4>
                <ul className=" single-product-shop-commitment__return--info__list single-product--title">
                  <li className="shop-commitment__return--info__list">
                    Free store return
                  </li>
                  <li className="shop-commitment__return--info__list">
                    Free returns via USPS Dropoff Service
                  </li>
                </ul>
              </div>
            </div>
            <div className="shop-commitment__share df">
              <span className="share--text">share:</span>
              <ul className="social-group--list list--reset df">
                <li>
                  <Icon icon="facebook" className="fb social--icon" />
                </li>
                <li>
                  <Icon icon="twitter" className="tw social--icon" />
                </li>
                <li>
                  <Icon icon="pinterest" className="tw social--icon" />
                </li>
              </ul>
            </div>
            <div className="shop-commitment__payment">
              <ul className="payment-group--list list--reset df">
                <li>
                  <Icon icon="visa" className="pay--visa pay--icon " />
                </li>
                <li>
                  <Icon icon="master" className="pay--master pay--icon" />
                </li>
                <li>
                  <Icon icon="paypal" className="pay--paypal pay--icon" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
);
