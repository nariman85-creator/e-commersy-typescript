import { log } from "console";
import React, { ReactElement, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { CustomReducerStateValue } from "../../pages/Category/CatalogCustomTypes";
import { fetchLoadingSelectProducts } from "../../store/ducks/product/productSelect/productSelectAction";
import { Input } from "../Input";

interface UlListProps {
  data: string[] | undefined;
  liClassname?: string;
  to?: string;
  children?: ReactNode | ReactNode[];
  url?: string;
  ulClass?: string;
  input: { view: boolean; type: string; className: string };
  inputData?: string;
  inputWrapName: string;
  inputValueHandler: (
    value: string,
    typeValue: CustomReducerStateValue
  ) => void;
}

export const CatalogList: React.FC<UlListProps> = ({
  data = [],
  liClassname,
  to = "",
  children,
  url = "",
  ulClass = "",
  input,
  inputData = "",
  inputValueHandler,
  inputWrapName,
}): ReactElement | null => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const pathDel = pathname.slice(10);

  if (data.length < 0) {
    return null;
  }

  return (
    <ul
      className={`list--reset collapsed-filter--list panel--list scroll--tracker height--none ${
        ulClass ? ulClass : ""
      }`}
    >
      {data.map((elem, idx) => {
        return (
          <li
            className="panel-filter--item panel--item collapsed-item--text"
            key={idx}
          >
            {input?.view && (
              <Input
                type="checkbox"
                clasname={`active ${input.className ? input.className : ""}`}
                dataset={`${inputData}=${elem}`}
                onClick={(e: React.MouseEvent) => {
                  const input = e.target as HTMLInputElement;
                    dispatch(
                      fetchLoadingSelectProducts(
                        `${pathDel}/list?${inputWrapName}=${
                          elem.includes('&') ? elem.replace("&", "^") : elem
                        }`
                      )
                    );

                  inputValueHandler(
                    input.value,
                    inputWrapName as CustomReducerStateValue
                  );

                }}
              />
            )}
            <div className="df panel-box--info">
              {url && <Link to={`/category/$`}></Link>}

              <span className="filter-product--text">{decodeURI(elem)}</span>
              <span className="filter-product--count">(10)</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
