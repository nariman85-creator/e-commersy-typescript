import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-body">
        <div className="container footer-container__top">
          <div className="footer-top__content df">
            <div className="footer-body__items items--left df">
              <div className="footer-items__info info">
                <div className="info-items__head">
                  <h3 className="info-items__title">HELP</h3>
                </div>
                <ul className="list list--reset cite-info__props">
                  <li className="cite-info__items">
                    <a href="" className="link--reset info-link__reset">
                      Delivery & returns
                    </a>
                  </li>
                  <li className="cite-info__items">
                    <a href="" className="link--reset info-link__reset">
                      FAQ
                    </a>
                  </li>
                  <li className="cite-info__items">
                    <a href="" className="link--reset info-link__reset">
                      Track order
                    </a>
                  </li>
                  <li className="cite-info__items">
                    <a href="" className="link--reset info-link__reset">
                      Contacts
                    </a>
                  </li>
                  <li className="cite-info__items">
                    <a href="" className="link--reset info-link__reset">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-items__info">
                <div className="info-items__head">
                  <h3 className="info-items__title">Shop</h3>
                </div>
                <ul className="list list--reset cite-info__props">
                  <li className="cite-info__items">
                    <a href="#" className="link--reset info-link__reset">
                      New arrivals
                    </a>
                  </li>
                  <li className="cite-info__items">
                    <a href="" className="link--reset info-link__reset">
                      Trending now
                    </a>
                  </li>
                  <li className="cite-info__items">
                    <a href="" className="link--reset info-link__reset">
                      Sales
                    </a>
                  </li>
                  <li className="cite-info__items">
                    <a href="" className="link--reset info-link__reset">
                      Brands
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-body__items items--rigth df">
              <div className="footer-items__contacts contacts">
                <div className="contacts-phone__item">
                  <div className="info-items__head">
                    <h3 className="info-items__title">Get in touch</h3>
                  </div>
                  <div className="phone-item">
                    <span className="contacts-text">Call:</span>
                    <a
                      href="tel:+4055550128"
                      className="link--reset info-link__reset contact--item"
                    >
                      (405) 555-0128
                    </a>
                  </div>
                  <div className="email-item">
                    <span className="contacts-text">Email:</span>
                    <a
                      href="mailto:hello@createx.com"
                      className="link--reset info-link__reset contact--item"
                    >
                      hello@createx.com
                    </a>
                  </div>
                </div>
                <div className="contacts-social__item">
                  <ul className="list list--reset df social-list">
                    <li className="social-list__item">
                      <span className="bg--image fb"></span>
                    </li>
                    <li className="social-list__item">
                      <span className="bg--image insta"></span>
                    </li>
                    <li className="social-list__item active">
                      <span className="bg--image tweet"></span>
                    </li>
                    <li className="social-list__item">
                      <span className="bg--image youtube"></span>
                    </li>
                    <li className="social-list__item">
                      <span className="bg--image pinkedin"></span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-items__app app df">
                <div className="app-head">
                  <h3 className="app-text">Download our app</h3>
                </div>
                <div className="mobile-app__body">
                  <Link to={"#"}>
                    <div className="mobile-app__store app-store bg--image"></div>
                  </Link>
                  <Link to={"#"}>
                    <div className="mobile-app__store google-store bg--image"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom__content">
          <div className="container footer-container">
            <div className="footer-bottom__body df">
              <div className="bottom-body__copy">
                <span className="copy-simbol">&copy;</span>
                <span className="copy-text">
                  All rights reserved. Made with{" "}
                  <i className="bgg--image heart--icon"></i> by Createx Studio
                </span>
              </div>
              <div className="to-top">
                <a href="#top" className="link--reset info-link__reset">
                  Go To Top
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
