import React from "react";
import { Buttons } from "../Buttons";
import "./Instagram.scss";
import men from '../../assets/images/instagram/image (3).png';
import boots from '../../assets/images/instagram/image (4).png';
import baby from "../../assets/images/instagram/image (5).png";
import { Link } from "react-router-dom";

export const Instagram: React.FC = () => {
  return (
    <section className="section instagram-section">
      <div className="container instagram-container">
        <div className="instagram-content instagram">
          <ul className="list list--reset instagram-blog__list df">
            <li className="blog-list__item">
              <div className="blog-follow">
                <span className="follow-text">Follow us on Instagram</span>
              </div>
              <div className="blog-store">
                <span className="blog-store__hash">@createx_store</span>
              </div>
              <Buttons clasname="blog--button" text="Follow instagram">
                <span className="button--icon bg--image"></span>
              </Buttons>
            </li>
            <li className="blog-list__item">
              <Link to={"#"}>
                <img src={men} alt="" />
              </Link>
            </li>
            <li className="blog-list__item">
              <Link to={"#"}>
                <img src={boots} alt="" />
              </Link>
            </li>
            <li className="blog-list__item">
              <Link to={"#"}>
                <img src={baby} alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
