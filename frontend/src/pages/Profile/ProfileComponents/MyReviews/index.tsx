import React from "react";
import "./MyReviews.scss";
import { Star } from "../../../../components/Parts/Star";
import { Link } from "react-router-dom";

export const MyReviews = () => {
  return (
    <div className="reviews my-reviews">
      <div className="single-product__reviews-user__wrap">
        <Link to={"#"}>
          <article className="single-product__reviews-user--item reviews-card df">
            <div className="reviews-user--info  df">
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
                  Phasellus varius faucibus ultrices odio in. Massa neque dictum
                  natoque ornare rutrum malesuada et phasellus. Viverra natoque
                  nulla cras vel nisl proin senectus. Tortor sed eleifend ante
                  tristique felis sed urna aliquet. Suspendisse fames egestas
                  sed duis purus diam et.
                </p>
              </div>
              <div className="reviews-user__footer df">
                <div className="reviews-rate__btn--group df">
                  <div className="reviews-rate__btn--like">
                    <span className="btn--like bg--image"></span>
                    <span className="btn--like__count btn--icon--text">5</span>
                  </div>
                  <div className="reviews-rate__btn--dis">
                    <span className="btn--dis bg--image"></span>
                    <span className="btn--dis__count btn--icon--text">2</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </Link>
      </div>
    </div>
  );
};
