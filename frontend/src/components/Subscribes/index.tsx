import React from "react";
import { Buttons } from "../Buttons";
import { Input } from "../Input";
import "./Subscribes.scss";

export const Subscribes: React.FC = () => {
  return (
    <section className="section subscribes-section subscribes">
      <div className="container subscribes-container">
        <div className="subscribes-wrap df">
          <div className="subscribes-body df">
            <div className="subscribes-item">
              <div className="subscribes-header">
                <h3 className="subscribes-title">Subscribe for updates</h3>
              </div>

              <div className="subscribes-item__head">
                <span className="subscribes-item__head-text">
                  Subscribe for exclusive early sale access and new arrivals.
                </span>
              </div>
              <ul className="list list--reset subscribes-gender__list df">
                <li className="subscribes-gender__item">
                  <span className="gender-text">Women</span>
                </li>
                <li className="subscribes-gender__item">
                  <span className="gender-text">Men</span>
                </li>
                <li className="subscribes-gender__item select">
                  <span className="gender-text">Girls</span>
                </li>
                <li className="subscribes-gender__item">
                  <span className="gender-text">Boys</span>
                </li>
              </ul>
              <form className="subscribes-form">
                <label
                  htmlFor="subscribes-input"
                  className={"subscribes--label"}
                >
                  Email
                </label>
                <div className="subscribes-input__wrap">
                  <Input
                    placeholder="Your working email"
                    type="text"
                    id="subscribes-input"
                    clasname="subscribes--email"
                  />
                  <Buttons clasname="subscribes--btn" text="Subscribe" />
                </div>
                <div className="subscribes-checkbox__wrap">
                  <input type="checkbox" name="subscribes-agree" id="" className="active"/>

                  <span className="subscribes-checkbox__text">
                    I agree to receive communications from Createx Store.
                  </span>
                </div>
              </form>
            </div>
            <div className="subscribes-item item--banner__bg">
              <span className="bg--image subscribes-item__bg--image"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
