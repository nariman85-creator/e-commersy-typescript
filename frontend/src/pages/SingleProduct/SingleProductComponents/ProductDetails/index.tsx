import React from "react";
import { Card } from "../../../../components/Card/Card";
import { SectionTitle } from "../../../../components/SectionTitle";
import sweater from "../../image/sweater.png";

import "./ProductDetails.scss";
interface ProductDetailsProps {
  brand: string;
  desc: string;
  feature: string;
  specificity: string;
  charcter: string;
  parametr: string;

  wash?: string;
  ironing: string;
  laundry_detergent: string;
  tumble_dry: string;
  color: string[];
  size: string[];
  imageUrl: string;
  _id: string;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({
  brand = "",
  desc = "",
  feature = "",
  specificity = "",
  charcter = "",
  parametr = "",
  wash = "",
  ironing = "",
  laundry_detergent = "",
  tumble_dry = "",
  color,
  size,
  imageUrl,
  _id
}) => {
  return (
    <div className="product-details">
      <div className="container product-details__container">
        <div className="product-details__wrap df">
          <div className="product-details__info df">
            <div className="product-details--main__info">
              <div className="product-details__head">
                <SectionTitle
                  text="details"
                  className="product-details--head__title"
                />
                <p className="product-details--head__description">
                  Id habitant tempor aliquam vulputate enim velit tincidunt sed.
                  Urna sed facilisis nulla feugiat amet venenatis. Id
                  suspendisse ut quis tellus aliquam pellentesque neque, semper
                  donec.
                </p>
              </div>
              <div className="product-details__list--wrap">
                <ul className="product-details__list">
                  <li className="product-details__item ">
                    <span className="details-product--info__text">Brand:</span>{" "}
                    <span className="brand--text">{brand}</span>
                  </li>
                  <li className="product-details__item ">
                    <div className="color-item--box df">
                      {" "}
                      <span className="details-product--info__text">
                        Color:
                      </span>
                      <ul className="list--reset color-item--list df">
                        {color.length > 0
                          ? color.map((elem) => {
                              return <li className="color-item">{elem}</li>;
                            })
                          : "Color not found"}
                      </ul>
                    </div>
                  </li>
                  <li className="product-details__item">
                    <span className="details-product--info__text"></span>
                    Mid-cut design
                  </li>
                  <li className="product-details__item">
                    <span className="details-product--info__text"></span>
                    Lace-up fastening
                  </li>
                  <li className="product-details__item">
                    <span className="details-product--info__text"></span>
                    Rubber outsole pods for durability and traction
                  </li>
                  <li className="product-details__item">
                    <span className="details-product--info__text"></span>
                    Moulded grooves in forefoot offer added flexibility
                  </li>
                  <li className="product-details__item">
                    <span className="details-product--info__text"></span>
                    Padded cuff with inner nodes designed to offer comfort and
                    support around the Achilles tendon
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-details--main__info">
              <div className="product-details__head">
                <SectionTitle
                  text="fabric"
                  className="product-details--head__title"
                />
              </div>
              <div className="product-details__list--wrap">
                <ul className="product-details__list">
                  <li className="product-details__item">
                    <span className="details-product--info__text">Upper:</span>
                    50% real leather, 50% textile Jordan
                  </li>
                  <li className="product-details__item">
                    <span className="details-product--info__text">Lining:</span>
                    100% textile{" "}
                  </li>
                  <li className="product-details__item">
                    <span className="details-product--info__text">Sole:</span>
                    100% other materials{" "}
                  </li>
                </ul>
              </div>
            </div>{" "}
            <div className="product-details--main__info">
              <div className="product-details__head">
                <SectionTitle
                  text="care"
                  className="product-details--head__title"
                />
              </div>
              <div className="product-details__list--wrap">
                <ul className="product-details__list list--reset care--list">
                  <li className="product-details__item">
                    <span className="details-product--info__icon bg--image care-info--icon hand--wash"></span>{" "}
                    Hand wash only (30°)
                  </li>
                  <li className="product-details__item">
                    <span className="details-product--info__icon bg--image no--iron"></span>
                    No ironing{" "}
                  </li>
                  <li className="product-details__item">
                    <span className="details-product--info__icon bg--image bleach--icon"></span>
                    Do not use any bleach
                  </li>
                  <li className="product-details__item">
                    <span className="details-product--info__icon bg--image thumble--icon"></span>
                    Do not tumble dry
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="product-details__card">
            <Card
              collapsed={true}
              imageUrl={imageUrl ?? sweater}
              productName="sweater"
              success
              saleProduct={true}
              productImage={[sweater, sweater, sweater]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
