import React from "react";
import { Link } from "react-router-dom";
import { SectionTitle } from "../SectionTitle";
import "./Services.scss";

export const Services: React.FC = () => {
  return (
    <section className="section services-section services">
      <div className="services-container container">
        <div className="services-body">
          <ul className="services-list list list--reset">
            <li className="services-item">
              <Link to={"#"} className={"link--reset df-fc"}>
                <span className="services--icon bg--image delivery"></span>
                <SectionTitle
                  description="Get free shipping over $250"
                  text="Fast Worldwide Shipping"
                  descClass={"services-info"}
                  className={"services-info__wrap"}
                />
              </Link>
            </li>
            <li className="services-item">
              {" "}
              <Link to={"#"} className={"link--reset df-fc"}>
                <span className="services--icon bg--image call"></span>
                <SectionTitle
                  description="Friendly 24/7 customer support"
                  text="24/7 Customer Support"
                  descClass={"services-info"}
                  className={"services-info__wrap"}
                />
              </Link>
            </li>
            <li className="services-item">
              {" "}
              <Link to={"#"} className={"link--reset df-fc"}>
                <span className="services--icon bg--image shield"></span>
                <SectionTitle
                  description="We return money within 30 days"
                  text="Money Back Guarantee"
                  descClass={"services-info"}
                  className={"services-info__wrap"}
                />
              </Link>
            </li>
            <li className="services-item">
              {" "}
              <Link to={"#"} className={"link--reset df-fc"}>
                <span className="services--icon bg--image payment"></span>
                <SectionTitle
                  description="Accept all major credit cards"
                  text="Secure Online Payment"
                  descClass={"services-info"}
                  className={"services-info__wrap"}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
