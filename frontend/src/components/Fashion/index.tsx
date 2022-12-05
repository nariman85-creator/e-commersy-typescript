import React from "react";
import { Buttons } from "../Buttons";
import firstImage from "../../assets/images/fashion/image (8).png";
import secondImage from "../../assets/images/fashion/image (9).png";
import "./Fashion.scss";
import { Link } from "react-router-dom";

export const Fashion: React.FC = () => {
  return (
    <section className="section fashion-section">
      <div className="container fashion-container">
        <div className="fashion-content">
          <div className="fashion-head">
            <h3 className="section--title fashion--title">Fashion blog</h3>
            <Link to={"/users/fashion--blog"}>
              {" "}
              <Buttons text="View blog" clasname="fashion--btn" />
            </Link>
          </div>
          <div className="fashion-body">
            <ul className="list list--reset fashion-list">
              <li className="fashion-list__item">
                <Link to={"#"} className={"link--reset"}>
                  <article className="card fashion-card">
                    <div className="fashion-card__body">
                      <div className="fashion-card__image">
                        <img src={firstImage} alt="" className="img" />
                      </div>
                      <div className="fashion-product__info">
                        <div className="product-trend">
                          <span>Top 10 of This Season’s Hottest Sneakers</span>
                        </div>
                        <div className="meta-info">
                          <ul className="meta-info__list list list--reset df">
                            <li className="meta-info__item">
                              <span className="product-type">Fashion</span>
                            </li>
                            <li className="meta-info__item">
                              <span className="meta-info__date">
                                August 24, 2020
                              </span>
                            </li>
                            <li className="meta-info__item">
                              <span className="comments--icon bg--image"></span>
                              <span className="meta-info__comments">
                                No comments
                              </span>
                            </li>
                          </ul>
                          <div className="meta-product__description">
                            <span className="meta-info__text">
                              Ipsum aliquet nisi, hendrerit rhoncus quam tortor,
                              maecenas faucibus. Tincidunt aliquet sit vel,
                              venenatis nulla. Integer bibendum turpis convallis
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </li>
              <li className="fashion-list__item">
                <Link to={"#"} className={"link--reset"}>
                  <article className="card fashion-card">
                    <div className="fashion-card__body">
                      <div className="fashion-card__image">
                        <img src={secondImage} alt="" className="img" />
                      </div>
                      <div className="fashion-product__info">
                        <div className="product-trend">
                          <span>Top 10 of This Season’s Hottest Sneakers</span>
                        </div>
                        <div className="meta-info">
                          <ul className="meta-info__list list list--reset df">
                            <li className="meta-info__item">
                              <span className="product-type">Fashion</span>
                            </li>
                            <li className="meta-info__item">
                              <div className="meta-info__date">
                                August 24, 2020
                              </div>
                            </li>
                            <li className="meta-info__item">
                              <span className="comments--icon bg--image"></span>

                              <span className="meta-info__comments">
                                No comments
                              </span>
                            </li>
                          </ul>
                          <div className="meta-product__description">
                            <span className="meta-info__text">
                              Ipsum aliquet nisi, hendrerit rhoncus quam tortor,
                              maecenas faucibus. Tincidunt aliquet sit vel,
                              venenatis nulla. Integer bibendum turpis convallis
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
