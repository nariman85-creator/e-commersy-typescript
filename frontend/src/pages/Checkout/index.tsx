import React, { useEffect } from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { UserSignIn } from "../../components/Header/HeaderAuth/UserSignIn";
import { Icon } from "../../components/icons/Icon";
import { SectionTitle } from "../../components/SectionTitle";
import { useLocations } from "../../utils/hooke";
import "./Checkout.scss";
import sweater from "../SingleProduct/image/sweater.png";
import { Buttons } from "../../components/Buttons";
import { Input } from "../../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoadingSelectCardProducts } from "../../store/ducks/product/productSelectBasket/productSelectCardAction";
import { $, localStorageGetItem } from "../../utils/helpers";
import { AppState } from "../../store/reducers";
import { fetchOrderLoadingState } from "../../store/ducks/order/orderAction";

export const Checkout = () => {
  const { pathArr } = useLocations();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const products = useSelector((state: AppState) => state.basket.data.result);
  const orderState = useSelector((state: AppState) => state.order.data);
  if (orderState) {
    if (orderState.status === "success") {
      navigate("/users/profile");
    }
  }

  const items: string[] = localStorageGetItem("addToCard");

  const userAdressFields = $("#form-address");
  const userShippingMethods = $("[data-shipping-method]");
  const userShippingpayMethod = $("[data-shipping-pay]");
  const userShippingPayMethodInfo = $(".checkout-pay__card--info");

  const handleRemoveClick = (id: string) => {
    const filterArr = localStorageGetItem("addToCard") as string[];
    const filterValue = filterArr.filter((elemId) => elemId !== id);
    localStorage.removeItem("addToCard");
    localStorage.setItem("addToCard", JSON.stringify(filterValue));
  };

  const orderClickHandle = async () => {
    try {
      const address: { [key: string]: string } = {};
      const pay: { [key: string]: string } = {};
      const shipping: { [key: string]: string } = {};

      userAdressFields?.querySelectorAll("input").forEach((input) => {
        address[input.id] = input.value;
      });
      userShippingMethods?.querySelectorAll("input").forEach((input) => {
        if (input.checked) {
          shipping["shippingMethod"] = input.value;
        }
      });
      userShippingpayMethod?.querySelectorAll("input").forEach((input) => {
        if (input.checked && input.id === "creditCard") {
          userShippingPayMethodInfo
            ?.querySelectorAll("input")
            .forEach((innerInput) => {
              pay[input.id] = input.value;
              pay[innerInput.id] = innerInput.value;
            });
        }
      });

      dispatch(
        fetchOrderLoadingState({
          productItems: items,
          userInfo: {
            userId: localStorageGetItem("user").data._id,
            firstname: address.firstName,
            lastname: address.lastName,
            email: address.email,
            address: {
              city: address.city,
              state: address.state,
              country: address.country,
              street: address.street,
              zipCode: address.zipCode,
            },
          },
          shippingMethod: shipping,
          payment: {
            paymantMethod: pay,
          },
        })
      );

      return;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(fetchLoadingSelectCardProducts(items));
  }, []);
  const totalPriceCount = products?.reduce((calc, product) => {
    return (calc += product.product_details.price);
  }, 0);

  return (
    <div className="checkout checkout-page">
      <div className="checkout-content">
        <Breadcrumbs pathArr={pathArr} rightSelect={false} />
        <div className="container checkout--container">
          <div className="checkout--body df">
            <div className="col checkout-content--col">
              <div className="checkout-content__head">
                <div className="checkout-content__head--row">
                  <SectionTitle text="Checkout" className="checkout--title" />
                  <Link to={"#"}>Back to shopping</Link>
                </div>
                <div className="sign--tools df">
                  <Icon icon="profile" className="checkout--profile" />
                  <div>
                    Already have an account? <Link to={"sign"}>Sign in</Link>{" "}
                    for faster checkout experience
                  </div>
                  {
                    <Routes>
                      <Route
                        path="/sign"
                        element={
                          <div className="overlay">
                            <UserSignIn />
                          </div>
                        }
                      />
                    </Routes>
                  }
                </div>
              </div>
              <div className="checkout-item--wrap">
                <div className="checkout-item">
                  <div className="checkout-cards--wrap">
                    <div className="checkout-cards--head">
                      <SectionTitle
                        text={"item review"}
                        className={"checkout-item--head__text"}
                      />
                    </div>
                    <div className="checkout-card--box">
                      {products && products.length > 0 ? (
                        products.map((product) => {
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
                                        $119.16
                                      </span>
                                      <span className="product-old__price">
                                        $200
                                      </span>
                                    </div>
                                  </div>
                                  <div className="checkout--info-btn__group df">
                                    <Buttons
                                      text="Delete"
                                      clasname="btn--delete"
                                      onClick={(e) =>
                                        handleRemoveClick(product._id)
                                      }
                                    />
                                    <div className="checkout-move__box df">
                                      <Buttons
                                        text="Move to"
                                        clasname="product--info__footer-btn"
                                      />
                                      <Icon
                                        icon="heart"
                                        className="product--info__footer--icon"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </article>
                          );
                        })
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="checkout-item">
                  <div className="checkout-cards--wrap">
                    <div className="checkout-cards--head">
                      <SectionTitle
                        text={"Shipping & Billing Address"}
                        className={"checkout-item--head__text"}
                      />
                    </div>
                    <div className="checkout-address--box">
                      <form className="form-address" id="form-address">
                        <button
                          type="submit"
                          style={{ display: "none" }}
                        ></button>
                        <table id="address-input--table">
                          <tbody>
                            <tr>
                              <td>
                                <label htmlFor="firstName">First name</label>
                                <Input
                                  type="text"
                                  placeholder="First Name"
                                  id="firstname"
                                />
                              </td>
                              <td>
                                <label htmlFor="lastName">Last name</label>
                                <Input
                                  type="text"
                                  placeholder="Last Name"
                                  id="lastname"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <label htmlFor="email">email</label>
                                <Input
                                  type="email"
                                  placeholder="email"
                                  id="email"
                                />
                              </td>
                              <td>
                                <label htmlFor="phone">phone</label>
                                <Input
                                  type="phone"
                                  placeholder="phone"
                                  id="phone"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <label htmlFor="country">country</label>
                                <Input
                                  type="text"
                                  placeholder="Choose you country"
                                  id="country"
                                  clasname="input--list"
                                />
                                <Icon
                                  icon="down_chevron"
                                  className="checkout-down--icon"
                                />
                              </td>
                              <td>
                                <label htmlFor="city">city</label>
                                <Input
                                  type="text"
                                  placeholder="choose your city"
                                  id="city"
                                  clasname="input--list"
                                />
                                <Icon
                                  icon="down_chevron"
                                  className="checkout-down__city--icon"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <label htmlFor="street">street</label>
                                <Input
                                  type="text"
                                  placeholder="street"
                                  id="street"
                                />
                              </td>
                              <td>
                                <label htmlFor="zipCode"> zip code</label>
                                <Input
                                  type="text"
                                  placeholder="zip code"
                                  id="zipCode"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </form>
                      <div className="checkout-billing-details">
                        <Input type="checkbox" />
                        <span className="billing-details--text">
                          Billing and Shipping details are the same
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="checkout-item">
                  <div className="checkout-cards--wrap">
                    <div className="checkout-cards--head">
                      <SectionTitle
                        text={"Shipping Method"}
                        className={"checkout-item--head__text"}
                      />
                    </div>
                    <div className="checkout-item--shipping__method">
                      <ul
                        className="checkout-shipping--method__list list--reset"
                        data-shipping-method
                      >
                        <li className="checkout-shipping--method__item">
                          <div className="checkout-shipping--method__item--head">
                            <Input
                              type={"radio"}
                              clasname={"checkout-shipping--method__btn"}
                              value="Courier to your address"
                            />
                            <span className="checkout-shipping--method__btn--dsc">
                              Courier to your address
                            </span>
                          </div>
                          <div className="checkout-shipping--method__item--footer">
                            <span className="checkout-shipping--details">
                              <span className="checkout-shipping-details__text">
                                Estimated date:
                              </span>
                              <time> September 9</time>
                            </span>
                            <span className="shipping-detail__price">
                              <i className="currency">$</i>25
                            </span>
                          </div>
                        </li>
                        <li className="checkout-shipping--method__item">
                          <div className="checkout-shipping--method__item--head">
                            <Input
                              type={"radio"}
                              clasname={"checkout-shipping--method__btn"}
                              value="Pick up from store"
                            />
                            <span className="checkout-shipping--method__btn--dsc">
                              Pick up from store
                            </span>
                          </div>
                          <div className="checkout-shipping--method__item--footer">
                            <span className="checkout-shipping-details">
                              <span className="checkout-shipping-details__text">
                                Pick up on
                              </span>
                              <time> September 8 from 12:00</time>
                            </span>
                            <span className="shipping-detail__price">
                              <i className="currency"></i>free
                            </span>
                          </div>
                        </li>
                        <li className="checkout-shipping--method__item">
                          <div className="checkout-shipping--method__item--head">
                            <Input
                              type={"radio"}
                              clasname={"checkout-shipping--method__btn"}
                              value="UPS Ground Shipping"
                            />
                            <span className="checkout-shipping--method__btn--dsc">
                              UPS Ground Shipping
                            </span>
                          </div>
                          <div className="checkout-shipping--method__item--footer">
                            <span className="checkout-shipping-details">
                              <span className="checkout-shipping-details__text">
                                Up to one week
                              </span>
                            </span>
                            <span className="shipping-detail__price">
                              <i className="currency">$</i>10.00
                            </span>
                          </div>
                        </li>
                        <li className="checkout-shipping--method__item">
                          <div className="checkout-shipping--method__item--head">
                            <Input
                              type={"radio"}
                              clasname={"checkout-shipping--method__btn"}
                              value="Pick up at Createx Locker"
                            />
                            <span className="checkout-shipping--method__btn--dsc">
                              Pick up at Createx Locker
                            </span>
                          </div>
                          <div className="checkout-shipping--method__item--footer">
                            <span className="checkout-shipping-details">
                              <span className="checkout-shipping-details__text">
                                Pick up on
                              </span>
                              <time> September 8 from 12:00</time>
                            </span>
                            <span className="shipping-detail__price">
                              <i className="currency">$</i>8.50
                            </span>
                          </div>
                        </li>
                        <li className="checkout-shipping--method__item">
                          <div className="checkout-shipping--method__item--head">
                            <Input
                              type={"radio"}
                              clasname={"checkout-shipping--method__btn"}
                              value="Createx Global Export"
                            />
                            <span className="checkout-shipping--method__btn--dsc">
                              Createx Global Export
                            </span>
                          </div>
                          <div className="checkout-shipping--method__item--footer">
                            <span className="checkout-shipping-details">
                              <span className="checkout-shipping-details__text">
                                3-4 days
                              </span>
                            </span>
                            <span className="shipping-detail__price">
                              <i className="currency">$</i>15.00
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="checkout-item">
                  <div className="checkout-cards--wrap">
                    <div className="checkout-cards--head">
                      <SectionTitle
                        text={"Payment Method"}
                        className={"checkout-item--head__text"}
                      />
                    </div>
                    <div className="checkout-item">
                      <div className="checkout-item__inner" data-shipping-pay>
                        <article className="checkout-pay__card">
                          <div className="checkout-pay__card--head df">
                            <div className="checkout-shipping--method__item--head">
                              <Input
                                type={"radio"}
                                clasname={"checkout-shipping--method__btn"}
                                value="Credit card"
                                id={"creditCard"}
                              />
                              <span className="checkout-shipping--method__btn--dsc">
                                Credit card
                              </span>
                            </div>
                            <div className="checkout-pay__card--img__wrap df">
                              <Icon
                                icon="master"
                                className="checkout-pay__card--img"
                              />
                              <Icon
                                icon="visa"
                                className="checkout-pay__card--img"
                              />
                            </div>
                          </div>
                          <div className="checkout-pay__card--info">
                            <div className="checkout-pay__card--info__item">
                              <h3 className="checkout-pay__card--info-text">
                                Card number
                              </h3>
                              <Input
                                type="text"
                                clasname="checkout-pay__card--info__item-input--code"
                                placeholder="0000 0000 0000"
                                id="payCardCode"
                              />
                            </div>
                            <div className="checkout-pay__card--info__item df">
                              <div className="checkout-pay__card--info__item-inner">
                                <h3 className="checkout-pay__card--info-text">
                                  Expiry date
                                </h3>
                                <Input
                                  type="date"
                                  clasname="checkout-pay__card--info__item-input--code"
                                  id="payCardDate"
                                />
                              </div>
                              <div className="checkout-pay__card--info__item-inner">
                                <h3 className="checkout-pay__card--info-text">
                                  CVC
                                </h3>
                                <Input
                                  type="text"
                                  clasname="checkout-pay__card--info__item-input--code"
                                  placeholder="000"
                                  id="payCardCVC"
                                />
                              </div>
                            </div>
                          </div>
                        </article>
                        <article className="checkout-pay__card">
                          <div className="checkout-pay__card--head m--none df">
                            <div className="checkout-shipping--method__item--head">
                              <Input
                                type={"radio"}
                                clasname={"checkout-shipping--method__btn"}
                                value="PayPal"
                              />
                              <span className="checkout-shipping--method__btn--dsc">
                                PayPal
                              </span>
                            </div>
                            <div className="checkout-pay__card--img__wrap df">
                              <Icon
                                icon="paypal"
                                className="checkout-pay__card--img"
                              />
                            </div>
                          </div>
                        </article>
                        <article className="checkout-pay__card">
                          <div className="checkout-pay__card--head m--none df">
                            <div className="checkout-shipping--method__item--head">
                              <Input
                                type={"radio"}
                                clasname={"checkout-shipping--method__btn"}
                                value="Cash on delivery"
                              />
                              <span className="checkout-shipping--method__btn--dsc">
                                Cash on delivery
                              </span>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="checkout-item">
                  <div className="checkout-cards--wrap">
                    <div className="checkout-cards--head">
                      <SectionTitle
                        text={"Additional Information (Optional)"}
                        className={"checkout-item--head__text"}
                      />
                    </div>
                    <div className="checkout-additional--wrap">
                      <h3 className="checkout-shipping--method__btn--dsc">
                        Order notes
                      </h3>
                      <form className="checkout-textarea--info">
                        <textarea
                          name="checkout--info"
                          id="checkout-textarea"
                        ></textarea>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col checkout-content--col">
              <div className="checkout-content__head">
                <div className="checkout-content__head--col">
                  <SectionTitle
                    text="Apply a promo code"
                    className="checkout-sidebar--title"
                  />
                  <div className="checkout-sidebar__input--wrap df">
                    <Input
                      type="text"
                      clasname="checkout-sidebar--input"
                      placeholder="Enter promo code"
                    />
                    <Buttons text="Apply" clasname="checkout-sidebar--btn" />
                  </div>
                </div>
              </div>
              <div className="checkout-sidebar__order--info">
                <div className="checkout-sidebar__order--info__content">
                  <div className="checkout-sidebar__order--info__row bg">
                    <div className="checkout-sidebar__order--info__head">
                      <SectionTitle
                        text="Order totals"
                        className="checkout-sidebar__order--title"
                      />
                    </div>
                    <div className="checkout-sidebar__order--info__body">
                      <ul className="list--reset checkout-sidebar__order--info-body__list">
                        <li className="checkout-sidebar__order--info__item ">
                          <span className="checkout-sidebar__order--info__item--text">
                            Subtotal:
                          </span>
                          <span className="checkout-sidebar__order--info__item--price">
                            ${products && totalPriceCount}
                          </span>
                        </li>
                        <li className="checkout-sidebar__order--info__item">
                          <span className="checkout-sidebar__order--info__item--text">
                            Shipping costs:
                          </span>
                          <span className="checkout-sidebar__order--info__item--price">
                            $25.00
                          </span>
                        </li>
                        <li className="checkout-sidebar__order--info__item">
                          <span className="checkout-sidebar__order--info__item--text">
                            Discount:
                          </span>
                          <span className="checkout-sidebar__order--info__item--price">
                            -
                          </span>
                        </li>
                        <li className="checkout-sidebar__order--info__item">
                          <span className="checkout-sidebar__order--info__item--text">
                            Estimated sales tax:
                          </span>
                          <span className="checkout-sidebar__order--info__item--price">
                            $6.35
                          </span>
                        </li>
                      </ul>
                      <div className="checkout-sidebar__order--info-body__footer df">
                        <span className="checkout-sidebar__order--info__footer--text">
                          Order total:
                        </span>
                        <span className="checkout-sidebar__order--info__footer--total">
                          ${products && totalPriceCount}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="checkout-sidebar__order--info__row">
                    <div className="checkout-sidebar__order--info__footer">
                      <Buttons
                        clasname="checkout-sidebar__order--info__footer--btn"
                        text="Complete order"
                        onClick={orderClickHandle}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
