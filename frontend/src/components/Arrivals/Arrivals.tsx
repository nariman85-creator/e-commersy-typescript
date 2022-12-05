import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoadingProducts } from "../../store/ducks/product/productAction";
import { AppState } from "../../store/reducers";
import { Card } from "../Card/Card";
import { List } from "../List/List";
import { SectionTitle } from "../SectionTitle";
import "./Arrival.scss";
// &#10032; stroke star
export const Arrivals:React.FC = () => {
  let [moving, setMoving] = useState<number>(0);
  const products = useSelector((state: AppState) => state.products.data);

  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(fetchLoadingProducts());
  }, []);


  const slider_ref = useRef<HTMLUListElement | null>(null);

  const animationSlider = () => {
    if (slider_ref.current !== null) {
      const targetWidth = slider_ref.current.offsetWidth;
      slider_ref.current.style.transform = `translateX(${moving}px)`;
      setMoving((prev) => {
        if (prev > -targetWidth * 4) {
          let moveCount = prev - targetWidth;

          return Math.min(prev, moveCount);
        }
        return 0;
      });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      // animationSlider();
    }, 400);
  }, [moving]);

  return (
    <section className="arrivals">
      <div className="arrivals-inner">
        <div className="arrivals-head">
          <SectionTitle
            text="New arrivals"
            description="Check out our latest arrivals for the upcoming season
                       See the collection here"
            className="arrivals--title"
            descClass="arrivals-desc--text"
          />
        </div>
        <div className="arrivals-content">
          <div className="carousel arrivals-carousel">
            <div className="carousel-inner arrivals-carousel__inner">
              <List
                components={() => <Card imageUrl="" collapsed={false} productName="" />}
                slide_ref={slider_ref}
                rootClass="arrivals-carousel__list"
              />
            </div>
          </div>
        </div>
        <div className="arrivals-indicarors">
          <ul className="list--reset list arrivals-indicators__list df">
            <li className="arrivals-indicators__item active"></li>
            <li className="arrivals-indicators__item"></li>
            <li className="arrivals-indicators__item"></li>
            <li className="arrivals-indicators__item"></li>
            <li className="arrivals-indicators__item"></li>
            <li className="arrivals-indicators__item"></li>
          </ul>
        </div>
      </div>
    </section>
  );
};
