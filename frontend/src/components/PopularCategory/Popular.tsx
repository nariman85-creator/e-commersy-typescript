import React from 'react'
import { Link } from 'react-router-dom';
import './Popular.scss';
import pathImage from '../../assets/images/category/image (6).png'

export const Popular:React.FC = () => {
  return (
    <section className="popular popular-section">
      <div className="container popular-container">
        <div className="popular-head popular--title">
          <h2>Popular categories</h2>
        </div>
        <ul className="popular-list list list--reset df">
          <li className="popular-list__item">
            <article className="popular-card product">
              <div className="popular-card__body">
                <div className="card-img__wrap">
                  <Link to={"#"}>
                    <img src={pathImage} alt="" className="product-image img" />
                  </Link>
                </div>
                <div className="card-text">
                  <span className="product-name">Tops</span>
                </div>
              </div>
            </article>
          </li>{" "}
          <li className="popular-list__item">
            <article className="popular-card product">
              <div className="popular-card__body">
                <div className="card-img__wrap">
                  <Link to={"#"}>
                    <img src={pathImage} alt="" className="product-image img" />
                  </Link>
                </div>
                <div className="card-text">
                  <span className="product-name">Tops</span>
                </div>
              </div>
            </article>
          </li>{" "}
          <li className="popular-list__item">
            <article className="popular-card product">
              <div className="popular-card__body">
                <div className="card-img__wrap">
                  <Link to={"#"}>
                    <img src={pathImage} alt="" className="product-image img" />
                  </Link>
                </div>
                <div className="card-text">
                  <span className="product-name">Tops</span>
                </div>
              </div>
            </article>
          </li>{" "}
          <li className="popular-list__item">
            <article className="popular-card product">
              <div className="popular-card__body">
                <div className="card-img__wrap">
                  <Link to={"#"}>
                    <img src={pathImage} alt="" className="product-image img" />
                  </Link>
                </div>
                <div className="card-text">
                  <span className="product-name">Tops</span>
                </div>
              </div>
            </article>
          </li>{" "}
          <li className="popular-list__item">
            <article className="popular-card product">
              <div className="popular-card__body">
                <div className="card-img__wrap">
                  <Link to={"#"}>
                    <img src={pathImage} alt="" className="product-image img" />
                  </Link>
                </div>
                <div className="card-text">
                  <span className="product-name">Tops</span>
                </div>
              </div>
            </article>
          </li>{" "}
          <li className="popular-list__item">
            <article className="popular-card product">
              <div className="popular-card__body">
                <div className="card-img__wrap">
                  <Link to={"#"}>
                    <img src={pathImage} alt="" className="product-image img" />
                  </Link>
                </div>
                <div className="card-text">
                  <span className="product-name">Tops</span>
                </div>
              </div>
            </article>
          </li>{" "}
        </ul>
      </div>
    </section>
  );
}
