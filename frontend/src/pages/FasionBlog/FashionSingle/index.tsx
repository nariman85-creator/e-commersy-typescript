import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "../../../components/icons/Icon";
import { SectionTitle } from "../../../components/SectionTitle";
import firstImage from "../../../assets/images/fashion/image (8).png";

export const FashionSingle = () => {
  return (
    <div className="fashion-single">
      <div className="fashion-single__container container">
        <div className="fashion-single__content">
          <div className="fashion-single__head">
            <SectionTitle
              text="Top 10 of This Season’s Hottest Sneakers"
              className="fashion-single--title"
            />
            <div className="fashion-single__head-footer">
              <ul className="list--reset fashion-single__head--posts-list df">
                <li className="fashion-single__head--posts-item">
                  <span className="fashion-single__head--posts-item--modern">
                    Lifestyle
                  </span>
                </li>
                <li className="fashion-single__head--posts-item">
                  <span className="fashion-single__head--posts-item--date">
                    July 16, 2020{" "}
                  </span>
                </li>
                <li className="fashion-single__head--posts-item">
                  <Icon icon="message" className="message--icon" />
                  <span className="fashion-single__head--posts-item--comments">
                    <i className="comment-count">4</i> comments
                  </span>
                </li>
              </ul>
              <ul className="list--reset fashion-single__head--social-list df">
                <li className="fashion-single__head--social-item">
                  <Icon icon="facebook" className="social--icon" />
                </li>
                <li className="fashion-single__head--social-item">
                  <Icon icon="tweeter" className="social--icon" />
                </li>{" "}
                <li className="fashion-single__head--social-item">
                  <Icon icon="pinterest" className="social--icon" />
                </li>{" "}
                <li className="fashion-single__head--social-item">
                  <Icon icon="linkedin" className="social--icon" />
                </li>
              </ul>
            </div>
          </div>
          <div className="fashion-single__body">
            <Link to={"fashion--single"}>
              <article className="card fashion-card">
                <div className="fashion-card__body">
                  <div className="fashion-card__image">
                    <img src={firstImage} alt="" className="img" />
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
