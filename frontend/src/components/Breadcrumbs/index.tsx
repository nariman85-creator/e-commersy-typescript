import React from "react";
import { Icon } from "../icons/Icon";
import "./Breadcrumbs.scss";

interface BreadcrumbProps {
  pathArr: string[];
  filterValue?: string[];
  rightSelect: boolean;
}

export const Breadcrumbs: React.FC<BreadcrumbProps> = ({
  pathArr,
  filterValue,
  rightSelect = true,
}) => {
  return (
    <div className="breadcrumbs">
      <div className="container breadcrumbs-container">
        <div className="breadcrumbs-filter__wrap df">
          <div className="breadcrumb-lines">
            <nav className="nav breabcrumbs-nav__lines">
              <ul className="list--reset breadcrumbs--list df">
                <li className="breadcrumbs--item bg--image breadcrumbs--home c--point"></li>
                {pathArr.map((breadNav, index) => (
                  <li className="breadcrumbs--item c--point" key={index}>
                    {decodeURI(breadNav)}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {rightSelect && (
            <div className="filter-lines">
              <nav className="nav filter-nav__lines">
                <ul className="filter-lines--list list--reset df">
                  {filterValue &&
                    filterValue.length > 0 &&
                    filterValue.map((text, idx) => {
                      if (text !== "") {
                        return (
                          <>
                            <li className="filter-lines--item" key={idx}>
                              <Icon icon="cross" className="cross" />
                              {decodeURI(text)}
                            </li>
                            <li className="filter-lines--item">
                              <Icon icon="cross" className="cross" />
                              Clear All
                            </li>
                          </>
                        );
                      }
                    })}

                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
