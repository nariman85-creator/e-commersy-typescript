import React, { ReactElement, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import DownUp from "../../assets/images/header/header-top/Down-chevron.svg";
import { showModalAndToggleActive } from "../../helper/hooks";
import { $, localStorageGetItem } from "../../utils/helpers";
import { Modal } from "../Modal/Modal";
import "./Header.scss";
import { UserSignIn } from "./HeaderAuth/UserSignIn";
import { UserSignUp } from "./HeaderAuth/UserSignUp";
import { MegaMenu } from "./megaMuneContent";
import sweater from "../../assets/images/category/image (7).png";

const UserAuth: { [key: string]: ReactElement<any, any> } = {
  signin: <UserSignIn />,
  signup: <UserSignUp />,
};

export const Header: React.FC = () => {
  const shopListRef = useRef<HTMLUListElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  let textRef = useRef<string | undefined>(undefined);

  const [authModalShowAndHide, setAuthModalShowAndHide] = useState<string>("");

  const setAuthTextHandle = (authText: string) => {
    setAuthModalShowAndHide((prev) => {
      if (overlayRef.current) {
        overlayRef.current.style.display = "flex";
      }
      return (prev = authText);
    });
  };
  const user = localStorageGetItem("user");
  const cardCount = localStorageGetItem("addToCard");


  const [modalProp, setModalProp] = useState<{
    position: { top: number };
    className: string;
    text: string | undefined;
  } | null>(null);

  useEffect(() => {
    const megamenu = $(".header--modal");
    if (!megamenu) {
      shopListRef.current?.childNodes.forEach((elem: unknown) => {
        const element = elem as HTMLElement;
        if (element.classList.contains("active")) {
          element.classList.remove("active");
        }
      });
    }
    const bottomHeigth =
      shopListRef.current?.getBoundingClientRect().bottom || 0;
    showModalAndToggleActive(
      shopListRef.current,
      textRef.current,
      setModalProp,
      {
        position: { top: bottomHeigth },
        className: "header--modal",
        text: textRef.current,
      }
    );
  }, [shopListRef.current]);

  return (
    <header className="header">
      <div className="header-top">
        <div className="container header-top__container">
          <div className="shop-info header-shop__info">
            <div className="header-contact">
              <span className="header-contact__text">Available 24/7 at</span>
              <a
                href="tel:+4055550128"
                className="link--reset header-contact__tel"
              >
                (405) 555-0128
              </a>
            </div>
            <div className="header-shop__nav">
              <nav className="nav shop-info__nav">
                <ul className="header-nav__list list--reset list">
                  <li className="header-nav__item list-item">
                    <Link to={"#"} className="link--reset">
                      Delivery & returns
                    </Link>
                  </li>
                  <li className="header-nav__item list-item">
                    <Link to={"/users/track--order"} className="link--reset">
                      Track order
                    </Link>
                  </li>
                  <li className="header-nav__item list-item">
                    <Link to={"#"} className="link--reset">
                      Blog
                    </Link>
                  </li>
                  <li className="header-nav__item list-item">
                    <Link to={"/users/contact-us"} className="link--reset">
                      Contacts
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-shop__select">
              <span className="header-select__icon bg--icon"></span>
              <span className="header-select__item">Eng / $</span>
              <span className="header-select__btn select--btn">
                <img src={DownUp} alt="" className="down-btn__icon img" />
              </span>
            </div>
            <div className="header-top__profile">
              {user.data?.firstname ? (
                <div className="df header-top__profile-info">
                  <Link to={"/users/profile"}>
                    <div className="avatar-wrap">
                      <img src={sweater} alt="" className="avatar img" />
                    </div>

                    <span className="header-top__profile-user--info">
                      {user.data.firstname}
                    </span>
                  </Link>
                </div>
              ) : (
                <div>
                  <span className="header-profile__icon bg--icon"></span>
                  <span
                    className="header-profile__login c--point"
                    onClick={(e) => setAuthTextHandle("signin")}
                  >
                    Log in /
                  </span>
                  {
                    <div
                      className="overlay df df--overlay"
                      ref={overlayRef}
                      style={{ display: "none" }}
                    >
                      <Modal className="modal-size">
                        {UserAuth[authModalShowAndHide]}
                      </Modal>
                    </div>
                  }

                  <span
                    className="header-profile__register c--point"
                    onClick={(e) => setAuthTextHandle("signup")}
                  >
                    Register
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="header-middle">
        <div className="container header-middle__container">
          <div className="shop header-shop__items">
            <Link to={"/"} className="link--reset">
              <span className="shop-logo bg--icon"></span>
            </Link>
            <nav className="nav shop-product__nav ml--auto">
              <ul
                className="list--reset shop-product__list df"
                ref={shopListRef}
              >
                <li className="shop-product__item" data-shop="womens">
                  women`s
                </li>
                <li className="shop-product__item" data-shop="mens">
                  men`s
                </li>
                <li className="shop-product__item" data-shop="girls">
                  girls
                </li>
                <li className="shop-product__item" data-shop="boys">
                  boys
                </li>
                <li className="shop-product__item" data-shop="sale">
                  sale
                </li>
              </ul>
            </nav>

            <div className="shop-search__box input--icon ml--auto">
              <input
                type="text"
                placeholder="Search for products..."
                className="search-input"
              />
            </div>
            <div className="shop-user__info user-info ml--auto df">
              <div className="user-info__like df">
                <span className="heart--icon bg--icon c--point"></span>
                <span className="like-count">2</span>
              </div>
              <div className="user-info__basket df">
                <span className="basket--icon bg--icon c--point"></span>
                <span className="basket-item__count">{cardCount.length}</span>
              </div>
            </div>
          </div>
        </div>
        {modalProp !== null && (
          <Modal className={modalProp?.className} {...modalProp?.position}>
            <MegaMenu text={modalProp?.text} urlParams={modalProp.text} />
          </Modal>
        )}
      </div>
      <div className="header-bottom">
        <div className="container header-bottom__container">
          <div className="header-bootom__item df">
            <span className="header-left--item bg--icon"></span>
            <span className="text-item">Up to 70% Off.</span>
            <Link to={"#"} className="link--reset">
              <span className="link-text">Shop our latest sale styles</span>
            </Link>
            <span className="header-right--item bg--icon"></span>
          </div>
        </div>
      </div>
    </header>
  );
};
