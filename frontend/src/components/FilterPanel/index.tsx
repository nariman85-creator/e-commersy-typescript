import React, { MouseEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../store/reducers";
import { Icon } from "../icons/Icon";
import "./FilterPanel.scss";

export const FilterPanel: React.FC = React.memo(() => {
  const productCount: number = useSelector(
    (state: AppState) => state.productSelect.data.count
  );
  const [showHideElem, setShowHideElem] = useState<boolean>(true);
  const [checkCountProduct, setCheckCountProduct] = useState<number>(12);
  const checkDecrementHandle = () => {
    setCheckCountProduct((prev) => {
      if (prev <= 0) return 0;
      return prev - 1;
    });
  };
  const checkIncrementHandle = () => {
    setCheckCountProduct((prev) => {
      if (prev >= 12) return 12;
      return prev + 1;
    });
  };

  const handleClickShowAndHideDropdown = (e: MouseEvent) => {
    setShowHideElem(!showHideElem);
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="filter-panel__sort df" key={Math.random()}>
        <span className="filter-sort--title sort--title">Sort by</span>
        <div className="filter-sort--dropdown">
          <ul className="list--reset dropdown-list ">
            <li className="dropdown-list--item">popularity</li>

            <li
              className="dropdown-list--item dropdown-item--wrap"
              style={showHideElem ? { display: "none" } : { display: "block" }}
            >
              <ul className="list--reset dropdown--item ">
                <li className="dropdown-list--item">popularity</li>
                <li className="dropdown-list--item">by relevance</li>
                <li className="dropdown-list--item">by date of addition</li>
              </ul>
            </li>
            <li className="dropdown-list--item dropdown-list__icon--wrap">
              <Icon
                icon="down_chevron"
                className="dropdown-list--icon"
                onClick={handleClickShowAndHideDropdown}
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="filter-panel__pager df">
        <span className="filter-pager--title sort--title">Show</span>
        <div className="filter-pager--count">
          <div className="pager-select--count df">
            <span className="select-count">{checkCountProduct}</span>
            <div className="indecrease">
              <Icon
                icon="increase"
                className="increase"
                onClick={checkIncrementHandle}
              />
              <Icon
                icon="decrease"
                className="decrease"
                onClick={checkDecrementHandle}
              />
            </div>
          </div>
        </div>
        <span className="select-text">products per page</span>
      </div>
      <div className="filters-panel__pagination">
        <ul className="list--reset pagination--list df">
          {Array(productCount)
            .fill("")
            .map((_, index) => {
              if (index + 1 === 4) {
                return (
                  <>
                    <li className="pagination-list--item">...</li>
                    <li className="pagination-list--item">10</li>
                  </>
                );
              }
              if (index + 1 <= 4) {
                return (
                  <>
                    <li className="pagination-list--item">{index + 1}</li>
                  </>
                );
              }
              if (index + 1 === 1) return;
            })}
          <li className="pagination-list--item "></li>
        </ul>
      </div>
    </>
  );
});
