import React, { MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { CustomReducerStateValue } from "../../pages/Category/CatalogCustomTypes";
import { fetchLoadingSelectProducts } from "../../store/ducks/product/productSelect/productSelectAction";
import { Input } from "../Input";
import { SectionTitle } from "../SectionTitle";
import "./Color.scss";

interface IColorProps {
  data: string[];
  onClick: (e: MouseEvent<HTMLSpanElement>) => void;
  inputValueHandler: (
    value: string,
    typeValue: CustomReducerStateValue
  ) => void;
}

export const Color: React.FC<IColorProps> = ({
  data,
  onClick,
  inputValueHandler,
}) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const pathDel = pathname.slice(10);

  return (
    <div className="panel-filter collapsed">
      <div className="sort-color">
        <div
          className="panel-catalog--filter df-fc"
          style={{ paddingTop: "20px" }}
        >
          <div className="filter__info df">
            <SectionTitle text={"color"} className="panel-filter--text" />
            <span
              className="filters__drop bg--image minus"
              data-dropdown
              onClick={(e: MouseEvent<HTMLSpanElement>) => onClick(e)}
            ></span>
          </div>
        </div>

        <ul className="list--reset collapsed-filter--list sort-color--list d-grid height--none">
          {data.map((color, idx) => (
            <li className="panel-filter--item sort-color--item" key={idx}>
              <div className="input-box">
                <Input
                  type="checkbox"
                  clasname="input--color"
                  style={{ backgroundColor: color }}
                  value={`color=${color}`}
                  dataset={`data-color=${color}`}
                  onClick={(e: React.MouseEvent) => {
                    const input = e.target as HTMLInputElement;
                    inputValueHandler(
                      input.value,
                      "colors" as CustomReducerStateValue
                    );
                    const separator = input.value.indexOf('=');
                    const colorStr=input.value.slice(separator+1)
                    dispatch(
                      fetchLoadingSelectProducts(
                        `${pathDel}/list?colors=${colorStr}`
                      )
                    );
                  }}
                />
              </div>
              <span className="sort-color--text">{color}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
