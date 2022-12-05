import React, {
  MutableRefObject,
  ReactElement,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Buttons } from "../../components/Buttons";
import { SectionTitle } from "../../components/SectionTitle";
import { Trending } from "../../components/Trending/Trending";

import "./Singleproduct.scss";
import { General } from "./SingleProductComponents/General";
import { AttireSingleProduct } from "./SingleProductComponents/AttireSingleProduct";
import { ProductDetails } from "./SingleProductComponents/ProductDetails";
import { Reviews } from "./SingleProductComponents/Reviews";
import { useFadePage } from "../../utils/hooke";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoadingSingleProducts } from "../../store/ducks/product/singleProduct/productSingleAction";
import { AppState } from "../../store/reducers";

export const SingleProductPage: React.FC = () => {
  const [pageFadetext, fadeInPage] = useFadePage();
  const btnList: MutableRefObject<HTMLUListElement | null> = useRef(null);

  const search = useLocation().search;
  const separator = search.indexOf("=");
  const productId = search.substring(separator + 1);
  const dispatch = useDispatch();
  let selector = useSelector(
    (state: AppState) => state.singleProduct.data?.data
  );
  const pathArray = JSON.parse(localStorage.getItem("pathArr") || "") || [];

  const outlineButton = (
    btnList: MutableRefObject<HTMLUListElement | null>
  ) => {
    if (
      btnList !== null &&
      btnList !== undefined &&
      btnList.current?.childNodes[pageFadetext] !== undefined
    ) {
      (btnList.current?.childNodes[pageFadetext] as HTMLLIElement)
        .querySelector("button")
        ?.classList.add("single--btn__select");
    }
  };

  useLayoutEffect(() => {
    outlineButton(btnList);
  }, [outlineButton]);
  useEffect(() => {
    dispatch(fetchLoadingSingleProducts(productId));
  }, []);
  if (selector === undefined) {
    return null;
  }
  const {
    product_details: {
      brand,
      colors,
      size,
      imageUrl,
      rating,
      sale,
      quantity,
      price,

    },
    manufact_details: {
      desc,
      feature,
      property: { specificity, charcter, parametr },
      care: { wash, ironing, laundry_detergent, tumble_dry },
    },
  } = selector;

  const SingleProduct: { [key: number]: ReactElement<any, any> } = {
    0: (
      <General
        _id={selector._id}
        size={size}
        colors={colors}
        rating={rating}
        quantity={quantity}
        price={price}
        sale={sale}
        imageUrl={imageUrl}
      />
    ),
    1: (
      <ProductDetails
        brand={brand || ""}
        desc={desc}
        feature={feature}
        specificity={specificity}
        charcter={charcter}
        parametr={parametr}
        wash={wash}
        ironing={ironing}
        laundry_detergent={laundry_detergent}
        tumble_dry={tumble_dry}
        color={colors}
        size={size}
        imageUrl={imageUrl}
        _id={selector._id}
      />
    ),
    2: <Reviews />,
  };

  return (
    <div className="single-product">
      <div className="single-product__wrap">
        <Breadcrumbs pathArr={pathArray ? pathArray : []} rightSelect={false} />
        <div className="single-product__page">
          <div className="single-product__container container">
            <div className="single-product_head df">
              <SectionTitle
                text={decodeURI(selector?.name || "")}
                className="head--title"
              />

              <article className="caption-product">
                <span className="article--caption">Art. No.</span> 183260098
              </article>
            </div>
            <div className="single-product__content">
              <ul
                className="single-product__btn--group__list list--reset df"
                ref={btnList}
              >
                <li className="single-product__btn--group__item">
                  <Buttons
                    text="General info"
                    clasname="single-product--btn "
                    targetValue="general"
                    onClick={(e) =>
                      fadeInPage(0, btnList || [], ".single-product--btn")(e)
                    }
                  />
                </li>
                <li className="single-product__btn--group__item">
                  <Buttons
                    text="Product details"
                    clasname="single-product--btn"
                    onClick={(e) =>
                      fadeInPage(1, btnList || [], ".single-product--btn")(e)
                    }
                  />
                </li>
                <li className="single-product__btn--group__item btn-group--single__btn">
                  <Buttons
                    text="Reviews"
                    clasname="single-product--btn"
                    onClick={(e) =>
                      fadeInPage(2, btnList || [], ".single-product--btn")(e)
                    }
                  ></Buttons>
                  <span className="bg--image reviews--count">12</span>
                </li>
              </ul>
              <div className="single-product__page--info df">
                {SingleProduct[pageFadetext]}
              </div>
            </div>
          </div>
        </div>
        <div className="attire single-product--attire">
          <AttireSingleProduct />
        </div>
        <Trending />
      </div>
    </div>
  );
};
