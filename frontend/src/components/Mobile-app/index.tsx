import React from "react";
import { Link } from "react-router-dom";
import "./Mobile.scss";

export const Mobile: React.FC = () => {
  return (
    <section className="section section-mobile mobile">
      <div className="container mobile-container">
        <div className="mobile-content">
          <div className="mobile-content__banner"></div>
          <div className="mobile-content__app">
            <div className="mobile-app__title">
              <h3>Enjoy mobile shopping with our Createx Store App!</h3>
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
    </section>
  );
};
