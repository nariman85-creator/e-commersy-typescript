import React from "react";
import "./Fashion.scss";
import firstImage from "../../assets/images/fashion/image (8).png";
import secondImage from "../../assets/images/fashion/image (9).png";
import { SectionTitle } from "../../components/SectionTitle";
import { Input } from "../../components/Input";
import { Icon } from "../../components/icons/Icon";
import cardImage from "./image/image (1).jpg";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Link } from "react-router-dom";

export const FashionBlog = () => {
  const pathArray = JSON.parse(localStorage.getItem("pathArr") || "") || [];

  return (
    <div className="fashion-blog__wrap fashion">
      <Breadcrumbs pathArr={pathArray ? pathArray : []} rightSelect={false} />
      <div className="fashion-blog__container container">
        <div className="fashion-blog__contents df">
          <div className="fashion-col">
            <div className="fashion-blog__body">
              <div className="fashion-blog__head">
                <SectionTitle
                  text="Fashion blog"
                  className="fashion-blog__title"
                />
              </div>
              <div className="fashion-blog__content">
                <Link to={"fashion--single"}>
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
                <Link to={"fashion--single"}>
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
              </div>
            </div>
          </div>
          <div className="fashion-col">
            <div className="fashion-blog__sidebar fashion-blog--panel">
              <div className="fashion-blog__sidebar--panel">
                <div className="fashion-blog__panel--head">
                  <div className="fashion-blog__input--box fashion-blog__head">
                    {" "}
                    <Input
                      type="text"
                      clasname="fashion-blog__input"
                      placeholder="Search the blog..."
                    />
                    <Icon icon="search" className="fashion-blog__input--icon" />
                  </div>
                </div>
                <div className="fashion-blog__panel--item-wrap">
                  {" "}
                  <div className="fashion-blog--panel__item">
                    <div className="fashion-blog--panel__item--title">
                      Blog Categories
                    </div>
                    <ul className="list--reset fashion-blog__categories--list">
                      <li className="fashion-blog__categories--item">
                        <span className="fashion-blog__categories--name">
                          All
                        </span>
                        <span className="fashion-blog__categories--count">
                          23
                        </span>
                      </li>
                      <li className="fashion-blog__categories--item">
                        <span className="fashion-blog__categories--name">
                          Fashion
                        </span>
                        <span className="fashion-blog__categories--count">
                          23
                        </span>
                      </li>
                      <li className="fashion-blog__categories--item">
                        <span className="fashion-blog__categories--name">
                          Designers
                        </span>
                        <span className="fashion-blog__categories--count">
                          23
                        </span>
                      </li>
                      <li className="fashion-blog__categories--item">
                        <span className="fashion-blog__categories--name">
                          Lifestyle
                        </span>
                        <span className="fashion-blog__categories--count">
                          23
                        </span>
                      </li>
                      <li className="fashion-blog__categories--item">
                        <span className="fashion-blog__categories--name">
                          Celebrity style
                        </span>
                        <span className="fashion-blog__categories--count">
                          23
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="fashion-blog--panel__item">
                    <div className="fashion-blog--panel__item--title">
                      Featured Posts
                    </div>
                    <div className="fashion-blog--panel__cards">
                      <article className="fashion-blog--card ">
                        <div className="fashion-blog--card__body df">
                          <div className="fashion-blog--card__img">
                            <img
                              src={cardImage}
                              className="img fashion-blog--card__img"
                              alt=""
                            />
                          </div>
                          <div className="fashion-blog--card__info">
                            <div className="fashion-blog--card__date df">
                              <Icon
                                icon="clock"
                                className="fashion-blog--card__date--icon"
                              />
                              <span className="fashion-blog--card__date--text">
                                July 5, 2020
                              </span>
                            </div>
                            <div className="fashion-blog--card__descr">
                              <span className="fashion-blog--card__descr--text">
                                14 Items From End-of-Spring Sales Are Sure to
                                Spark Joy
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div className="fashion-blog--panel__item">
                    <div className="fashion-blog--panel__item--title">Tags</div>
                    <ul className="list--reset fashion-blog--tags__list ">
                      <li className="fashion-blog--tags__item">
                        <span className="fashion-blog--tags__item--content">
                          #trends
                        </span>
                      </li>
                      <li className="fashion-blog--tags__item">
                        <span className="fashion-blog--tags__item--content">
                          #inspiration
                        </span>
                      </li>{" "}
                      <li className="fashion-blog--tags__item">
                        <span className="fashion-blog--tags__item--content">
                          #designers
                        </span>
                      </li>{" "}
                      <li className="fashion-blog--tags__item">
                        <span className="fashion-blog--tags__item--content">
                          #kidsfashion
                        </span>
                      </li>{" "}
                      <li className="fashion-blog--tags__item">
                        <span className="fashion-blog--tags__item--content">
                          #streetstyle
                        </span>
                      </li>{" "}
                      <li className="fashion-blog--tags__item ">
                        <span className="fashion-blog--tags__item--content active">
                          #models
                        </span>
                      </li>
                    </ul>
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
