import React, { useEffect, useState } from "react";
import { Buttons } from "../../../../components/Buttons";
import { Card } from "../../../../components/Card/Card";
import { Modal } from "../../../../components/Modal/Modal";
import { Star } from "../../../../components/Parts/Star";
import { $ } from "../../../../utils/helpers";
import sweater from "../../image/sweater.png";

import "./Reviews.scss";
import { Review } from "./ReviewsComponent";

export const Reviews = () => {
  let [showModal, setShowModal] = useState<boolean>(false);
  useEffect(() => {
    const overlay = $(".overlay");

    if (overlay === null) setShowModal(false);
  }, []);

  return (
    <div className="single-product__reviews reviews">
      <div className="container single-product__reviews-container">
        <div className="single-product__reviews-content df">
          <div className="single-product__reviews-main--info">
            <div className="single-product__reviews-info--dashboard df">
              <div className="single-product__reviews-info--item df">
                <h3 className="single-product__reviews-info--item__title">
                  <span className="revievs-count">12</span> reviews
                </h3>
                <div className="reviews-rate">
                  <Star
                    count={5}
                    color={"gold"}
                    classname={"single-product__reviews-rate--star"}
                  />
                </div>
                <div className="review-item--footer df">
                  <span className="reviews-rate--info">9 out of 12 (75%)</span>
                  <span className="reviews-rate--info__recomended">
                    Customers recommended this product
                  </span>
                </div>
              </div>
              <div className="single-product__reviews-info--item widget">
                <ul className="list--reset reviews-rate__info-count--list df">
                  <li className="reviews-rate__count--item">
                    <span className="rate-scale"></span>
                  </li>
                  <li className="reviews-rate__count--item">
                    <span className="rate-scale"></span>
                  </li>
                  <li className="reviews-rate__count--item">
                    <span className="rate-scale"></span>
                  </li>
                  <li className="reviews-rate__count--item">
                    <span className="rate-scale"></span>
                  </li>
                  <li className="reviews-rate__count--item">
                    <span className="rate-scale"></span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="single-product__reviews-info-block">
              <div className="single-product__reviews-info-panel df">
                <Buttons
                  text="Leave a review"
                  clasname="reviews-info--btn primary"
                  onClick={(e) => setShowModal(!showModal)}
                />
                {showModal && (
                  <div className="overlay df df--overlay reviews--overlay">
                    <Modal className="modal-size">
                      <Review />
                    </Modal>
                  </div>
                )}
                <div className="single-product__reviews-info__sort df">
                  <span className="reviews-info__sort--text">Sort by</span>
                  <div className="reviews-info__sortby--wrap">
                    <input list="reviewsSort" />
                    <datalist id="reviewsSort">
                      <option value="news">news</option>
                      <option value="snews">snews</option>
                      <option value="bnews">bnews</option>
                      <option value="dnews">dnews</option>
                    </datalist>
                  </div>
                </div>
              </div>
              <div className="single-product__reviews-user__wrap">
                <article className="single-product__reviews-user--item reviews-card df">
                  <div className="reviews-user--info df">
                    <span className="reviews-user__name">Devon Lane</span>
                    <span className="reviews-user__date">July 15, 2020</span>
                    <div className="reviews-user__rate">
                      <Star
                        count={5}
                        color={"gold"}
                        classname={"single-product__reviews-rate--star"}
                      />
                    </div>
                  </div>
                  <div className="reviews-user--comments">
                    <div>
                      <p className="reviews-user--post">
                        Phasellus varius faucibus ultrices odio in. Massa neque
                        dictum natoque ornare rutrum malesuada et phasellus.
                        Viverra natoque nulla cras vel nisl proin senectus.
                        Tortor sed eleifend ante tristique felis sed urna
                        aliquet. Suspendisse fames egestas sed duis purus diam
                        et.
                      </p>
                    </div>
                    <div className="reviews-user__footer df">
                      <span className="reviews-self--reply bg--image reply">
                        Reply
                      </span>
                      <div className="reviews-rate__btn--group df">
                        <div className="reviews-rate__btn--like">
                          <span className="btn--like bg--image"></span>
                          <span className="btn--like__count">5</span>
                        </div>
                        <div className="reviews-rate__btn--dis">
                          <span className="btn--dis bg--image"></span>
                          <span className="btn--dis__count">2</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="single-product__reviews-user--item reviews-card df">
                  <div className="reviews-user--info df">
                    <span className="reviews-user__name">Devon Lane</span>
                    <span className="reviews-user__date">July 15, 2020</span>
                    <div className="reviews-user__rate">
                      <Star
                        count={5}
                        color={"gold"}
                        classname={"single-product__reviews-rate--star"}
                      />
                    </div>
                  </div>
                  <div className="reviews-user--comments">
                    <div>
                      <p className="reviews-user--post">
                        Phasellus varius faucibus ultrices odio in. Massa neque
                        dictum natoque ornare rutrum malesuada et phasellus.
                        Viverra natoque nulla cras vel nisl proin senectus.
                        Tortor sed eleifend ante tristique felis sed urna
                        aliquet. Suspendisse fames egestas sed duis purus diam
                        et.
                      </p>
                    </div>
                    <div className="reviews-user__footer df">
                      <span className="reviews-self--reply bg--image reply">
                        Reply
                      </span>
                      <div className="reviews-rate__btn--group df">
                        <div className="reviews-rate__btn--like">
                          <span className="btn--like bg--image"></span>
                          <span className="btn--like__count">5</span>
                        </div>
                        <div className="reviews-rate__btn--dis">
                          <span className="btn--dis bg--image"></span>
                          <span className="btn--dis__count">2</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>{" "}
                <article className="single-product__reviews-user--item reviews-card df">
                  <div className="reviews-user--info df">
                    <span className="reviews-user__name">Devon Lane</span>
                    <span className="reviews-user__date">July 15, 2020</span>
                    <div className="reviews-user__rate">
                      <Star
                        count={5}
                        color={"gold"}
                        classname={"single-product__reviews-rate--star"}
                      />
                    </div>
                  </div>
                  <div className="reviews-user--comments">
                    <div>
                      <p className="reviews-user--post">
                        Phasellus varius faucibus ultrices odio in. Massa neque
                        dictum natoque ornare rutrum malesuada et phasellus.
                        Viverra natoque nulla cras vel nisl proin senectus.
                        Tortor sed eleifend ante tristique felis sed urna
                        aliquet. Suspendisse fames egestas sed duis purus diam
                        et.
                      </p>
                    </div>
                    <div className="reviews-user__footer df">
                      <span className="reviews-self--reply bg--image reply">
                        Reply
                      </span>
                      <div className="reviews-rate__btn--group df">
                        <div className="reviews-rate__btn--like">
                          <span className="btn--like bg--image"></span>
                          <span className="btn--like__count">5</span>
                        </div>
                        <div className="reviews-rate__btn--dis">
                          <span className="btn--dis bg--image"></span>
                          <span className="btn--dis__count">2</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="single-product__reviews-user--item reviews-card df">
                  <div className="reviews-user--info df">
                    <span className="reviews-user__name">Devon Lane</span>
                    <span className="reviews-user__date">July 15, 2020</span>
                    <div className="reviews-user__rate">
                      <Star
                        count={5}
                        color={"gold"}
                        classname={"single-product__reviews-rate--star"}
                      />
                    </div>
                  </div>
                  <div className="reviews-user--comments">
                    <div>
                      <p className="reviews-user--post">
                        Phasellus varius faucibus ultrices odio in. Massa neque
                        dictum natoque ornare rutrum malesuada et phasellus.
                        Viverra natoque nulla cras vel nisl proin senectus.
                        Tortor sed eleifend ante tristique felis sed urna
                        aliquet. Suspendisse fames egestas sed duis purus diam
                        et.
                      </p>
                    </div>
                    <div className="reviews-user__footer df">
                      <span className="reviews-self--reply bg--image reply">
                        Reply
                      </span>
                      <div className="reviews-rate__btn--group df">
                        <div className="reviews-rate__btn--like">
                          <span className="btn--like bg--image"></span>
                          <span className="btn--like__count">5</span>
                        </div>
                        <div className="reviews-rate__btn--dis">
                          <span className="btn--dis bg--image"></span>
                          <span className="btn--dis__count">2</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>{" "}
                <article className="single-product__reviews-user--item reviews-card df">
                  <div className="reviews-user--info df">
                    <span className="reviews-user__name">Devon Lane</span>
                    <span className="reviews-user__date">July 15, 2020</span>
                    <div className="reviews-user__rate">
                      <Star
                        count={5}
                        color={"gold"}
                        classname={"single-product__reviews-rate--star"}
                      />
                    </div>
                  </div>
                  <div className="reviews-user--comments">
                    <div>
                      <p className="reviews-user--post">
                        Phasellus varius faucibus ultrices odio in. Massa neque
                        dictum natoque ornare rutrum malesuada et phasellus.
                        Viverra natoque nulla cras vel nisl proin senectus.
                        Tortor sed eleifend ante tristique felis sed urna
                        aliquet. Suspendisse fames egestas sed duis purus diam
                        et.
                      </p>
                    </div>
                    <div className="reviews-user__footer df">
                      <span className="reviews-self--reply bg--image reply">
                        Reply
                      </span>
                      <div className="reviews-rate__btn--group df">
                        <div className="reviews-rate__btn--like">
                          <span className="btn--like bg--image"></span>
                          <span className="btn--like__count">5</span>
                        </div>
                        <div className="reviews-rate__btn--dis">
                          <span className="btn--dis bg--image"></span>
                          <span className="btn--dis__count">2</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>{" "}
                <article className="single-product__reviews-user--item reviews-card df">
                  <div className="reviews-user--info df">
                    <span className="reviews-user__name">Devon Lane</span>
                    <span className="reviews-user__date">July 15, 2020</span>
                    <div className="reviews-user__rate">
                      <Star
                        count={5}
                        color={"gold"}
                        classname={"single-product__reviews-rate--star"}
                      />
                    </div>
                  </div>
                  <div className="reviews-user--comments">
                    <div>
                      <p className="reviews-user--post">
                        Phasellus varius faucibus ultrices odio in. Massa neque
                        dictum natoque ornare rutrum malesuada et phasellus.
                        Viverra natoque nulla cras vel nisl proin senectus.
                        Tortor sed eleifend ante tristique felis sed urna
                        aliquet. Suspendisse fames egestas sed duis purus diam
                        et.
                      </p>
                    </div>
                    <div className="reviews-user__footer df">
                      <span className="reviews-self--reply bg--image reply">
                        Reply
                      </span>
                      <div className="reviews-rate__btn--group df">
                        <div className="reviews-rate__btn--like">
                          <span className="btn--like bg--image"></span>
                          <span className="btn--like__count">5</span>
                        </div>
                        <div className="reviews-rate__btn--dis">
                          <span className="btn--dis bg--image"></span>
                          <span className="btn--dis__count">2</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="single-product__reviews-user--pagination">
                <ul className="list--reset user--pagination__list df">
                  <li className="user--pagination--item">1</li>
                  <li className="user--pagination--item">2</li>
                  <li className="user--pagination--item">3</li>
                  <li className="user--pagination--item">4</li>
                  <li className="user--pagination--item next--arrow"></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="single-product__reviews-card">
            {" "}
            <div className="product-details__card">
              <Card
                collapsed={true}
                imageUrl={sweater}
                productName="sweater"
                success
                saleProduct={true}
                productImage={[sweater, sweater, sweater]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
