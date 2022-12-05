import React, { useEffect, useReducer, useState } from "react";

import { Buttons } from "../../components/Buttons";
import { Card } from "../../components/Card/Card";

import "./CategoryPage.scss";
import { showAndhideContent, showAndHideDropdown } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoadingDetails } from "../../store/ducks/details/detailsAction";
import { AppState } from "../../store/reducers";
import { IDetailsProps } from "../../store/ducks/details/detailsTypes";
import { Collapsed } from "../../components/Collapsed/Collapsed";
import { PriceIndicators } from "../../components/PriceChange";
import { Color } from "../../components/Color";
import {
  CustomReducerStateValue,
  ICustomReducerProps,
} from "./CatalogCustomTypes";
import { fetchLoadingSelectProducts } from "../../store/ducks/product/productSelect/productSelectAction";
import { IProductSelectProps } from "../../store/ducks/product/productSelect/productSelectTypes";
import { reducer } from "../../utils/componentReducers";
import { FilterPanel } from "../../components/FilterPanel";
import { IProductSelect } from "../../store/types";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { useLocations } from "../../utils/hooke";

const initialState: ICustomReducerProps = {
  colors: "",
  brands: "",
  material: "",
  size: "",
  clothes: "",
  price: { minPrice: "", maxPrice: "" },
};

export const CategoryPage = () => {
  const dispatch = useDispatch();
  const [_, myInputDispatch] = useReducer(
    reducer,
    initialState,
    () => initialState
  );
  const [filterValue, setFilterValue] = useState<string[]>(
    JSON.parse(localStorage.getItem("filterValue") || "[]")
  );

  const [textBtn, setTextBtn] = useState<string>("Hide Filters");

  const detailsSelect: IDetailsProps[] | [] = useSelector(
    (state: AppState) => state.details.data
  );
  const productSelect: IProductSelectProps["data"] = useSelector(
    (state: AppState) => state.productSelect.data
  );


  const { pathArr, pathDel } = useLocations();

  const modal: HTMLDivElement | null = document.querySelector(".header--modal");
  const toggleCollapsedIcon: NodeListOf<HTMLSpanElement> | null =
    document.querySelectorAll("[data-dropdown]");

  const getInputValueHandler = (
    value: string | { minPrice: string; maxPrice: string },
    typeValue: CustomReducerStateValue
  ) => {
    if (typeof value !== "object") {
      const separator = value.indexOf("=");
      const newValue = value.substring(separator + 1);

      localStorage.setItem("filterValue", JSON.stringify(filterValue));
      setFilterValue((prev) => {
        return [...prev, newValue];
      });
    }
    myInputDispatch({
      type: typeValue,
      peyload: value,
    });
  };
  const cardHandleClickGetValue = (event: MouseEvent) => {
    if ((event.target as HTMLElement).parentElement?.closest(".card")) {
    }
  };

  useEffect(() => {
    if (modal) {
      if (modal.classList.contains("header--modal")) {
        modal.classList.remove("header--modal");
      }
    }
  }, [modal, toggleCollapsedIcon]);

  useEffect(() => {
    dispatch(fetchLoadingSelectProducts(`${pathDel}/list?`));
    dispatch(fetchLoadingDetails(pathDel));

    document.addEventListener("click", (event: MouseEvent) =>
      cardHandleClickGetValue(event)
    );
    return document.removeEventListener("click", (event: MouseEvent) =>
      cardHandleClickGetValue(event)
    );
  }, [dispatch, pathDel]);

  return (
    <div className="catalog">
      <div className="catalog-body d-grid">
        <section className="catalog-top filter d-grid">
          <Breadcrumbs
            pathArr={pathArr}
            filterValue={filterValue}
            rightSelect={true}
          />
          <div className="panel catalog-filters__panel">
            <div className="container catalog-container">
              <div className="tollbar catalog-filter__panel--toolbar df">
                <Buttons
                  text={textBtn}
                  clasname="hide-filter__btn btn--primary"
                  onClick={() => showAndhideContent(setTextBtn)}
                >
                  <span className="bg--image filter--icon"></span>
                </Buttons>
                <FilterPanel />
              </div>
            </div>
          </div>
        </section>
        <section className="catalog-middle">
          <div
            className="container catalog-container d-grid"
            data-parent-target
          >
            <div
              className="catalog-sidebar--left sidebar--filter"
              data-dropdown
            >
              <div className="catalog-filter__panel panel">
                <div className="panel-filter catalog-filters">
                  {detailsSelect.length > 0 &&
                    detailsSelect[0].details.map((detail, index) => (
                      <Collapsed
                        data={detail}
                        panelTitle={detail.name}
                        inputVisible={true}
                        onClick={showAndHideDropdown}
                        key={index}
                        inputValueHandler={getInputValueHandler}
                      />
                    ))}
                  {detailsSelect.length > 0 && (
                    <Color
                      onClick={showAndHideDropdown}
                      data={detailsSelect[0].color}
                      inputValueHandler={getInputValueHandler}
                    />
                  )}

                  {detailsSelect.length > 0 && (
                    <PriceIndicators
                      data={detailsSelect[0].price}
                      getInputValueHandler={getInputValueHandler}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="catalog-content d-grid" data-add-grid>
                {productSelect?.result?.length > 0 ? (
                  productSelect.result.map((product: IProductSelect, index) => (
                    <React.Fragment key={Math.random() * Date.now()}>
                      <Card
                        imageUrl={product.product_details.imageUrl}
                        productName={decodeURI(product.name)}
                        collapsed={false}
                        className="img--reset"
                        uriPath={`/product/single-product--details/${product.name}?product_id=${product._id}`}
                      />
                    </React.Fragment>
                  ))
                ) : (
                  <div>Product Not Found</div>
                )}
              </div>
              <div className="panel catalog-filters__panel">
                <div className="tollbar catalog-filter__panel--toolbar bottom--padd df">
                  <FilterPanel />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
