import React, { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatalogsLoadingState } from "../../../store/ducks/catalog/catalogAction";
import { AppState } from "../../../store/reducers";

import { Buttons } from "../../Buttons";
import cardImage from "../../../assets/images/modal/image (11).png";
import shevronRigth from "../../../assets/images/modal/Right.svg";
import { List } from "../../List/Listos";
interface IMegaMenuprops {
  text: string | undefined;
  urlParams: string | undefined;
}
export const MegaMenu: React.FC<IMegaMenuprops> = ({ text, urlParams }) => {
  const selector = useSelector((state: AppState) => state.catalogs.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (text !== undefined) {
      dispatch(fetchCatalogsLoadingState(text));
    }
  }, [dispatch, text]);

  return (
    <div className="container modal-container">
      <div className="modal-body__content shop-content df">
        <div className="shop-content__categories">
          <ul className={`list list--reset shop-content__list shop--list`}>
            <li className="shop-content__item">New collection</li>
            <li className="shop-content__item">Best Sellers</li>
            <li className="shop-content__item">Plus Size</li>
            <li className="shop-content__item active">
              Sale up to
              <span className="shop-content__sale--price">70%</span>
            </li>
          </ul>
        </div>
        <div className="shop-content__product product-catalog df">
          {selector ? (
            <List data={selector} male={urlParams} />
          ) : (
            <p>'Нет ответа'</p>
          )}
        </div>
        <div className="shop-content__card">
          <article className="card shop-card">
            <div className="card-body">
              <div className="card-product__image">
                <img src={cardImage} alt="" className="img" />
              </div>
              <div className="product-name">
                <span className="product-name__text">
                  Back to school. Sale up to 50%
                </span>
              </div>
            </div>
          </article>
          <Buttons clasname="bunners--btn bg--icon modal--df" text="See offers">
            <span
              className="bg--image shevron--rigth modal--shevron"
              style={{ backgroundImage: `url(${shevronRigth})` }}
            ></span>
          </Buttons>
        </div>
      </div>{" "}
    </div>
  );
};
