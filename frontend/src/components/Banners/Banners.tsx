import React from "react";
import { Buttons } from "../Buttons";
import { Input } from "../Input";
import { SectionTitle } from "../SectionTitle";
import "./Banner.scss";

export const Banners: React.FC = () => {
  return (
    <section className="banners section-banners">
      <div className="banners-body">
        <div className="banners-item bg--image">
          <SectionTitle
            text="Summer Collections"
            description="Sale Up to 70%"
            className="banners-item--title"
            descClass="banners-item--text"
          />
          <Buttons clasname="bunners--btn" text="Explore new prices" />
        </div>
        <div className="banners-item bg--image">
          <SectionTitle
            text="Deal of the week"
            description="Stay Warm With Our New Sweaters"
            className="banners-item--title"
            descClass="banners-item--text"
          />
          <Buttons clasname="bunners--btn" text="Shop now" />{" "}
          <div className="offer banners-offer">
            <span className="offer-title">Limited time offer</span>
            <div className="date-offer">
              <ul className="list list--reset date-list date">
                <li className="date-list__item">
                  <span className="date-time">06</span>
                  <span className="date-text">Days</span>
                </li>
                <li className="date-list__item">
                  <span className="date-time">18</span>
                  <span className="date-text">Hours</span>
                </li>
                <li className="date-list__item">
                  <span className="date-time">24</span>
                  <span className="date-text">Mins</span>
                </li>
                <li className="date-list__item">
                  <span className="date-time">12</span>
                  <span className="date-text">Sec</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="banners-item bg--image">
          <SectionTitle
            text="New collection"
            description="Shoes & Bags
autumn / winter 2020 "
            className="banners-item--title"
            descClass="banners-item--text"
          />
          <Buttons clasname="bunners--btn bg--icon" text="See offers" />
        </div>
        <div className="banners-item bg--image">
          <SectionTitle
            text="For All new Email Subscribers"
            description="Get 5% Off & Free Delivery"
            className="banners-item--title"
            descClass="banners-item--text"
          />

          <div className="banners-subscribe__wrap subscribe">
            <label htmlFor="subscribe-input">Email</label>
            <div className="subscribe-form">
              <Input
                placeholder="Your working email"
                type="text"
                id="subscribe-input"
                clasname="subscribe--email"
              />
              <Buttons clasname="banners--btn" text="Subscribe" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
