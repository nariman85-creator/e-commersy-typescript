import React, { ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";
import { ICatalogProps } from "../../store/types";
import { SectionTitle } from "../SectionTitle";

interface UlListProps {
  data: ICatalogProps[];
  classname?: string;
  to?: string;
  children?: ReactNode | ReactNode[];
  url?: string;
  ulClass?: string;
  male: string | undefined;
  input?: { view: boolean; type: string; className: string };
}

export const List: React.FC<UlListProps> = ({
  data = [],
  ulClass = "",
  male,
}): ReactElement | null => {
  if (data.length < 0) {
    return null;
  }

  return (
    <>
      {data &&
        data.map((elem, idx) => (
          <div className="product-catalog__item" key={idx}>
            <div className="product-catalog__item--head">
              <Link to={`/category/${male}/${elem.name}`}>
                <SectionTitle text={elem.name} className="shop-modal--text" />
              </Link>
            </div>
            <ul
              className={`list list--reset product-catalog--list shop--list ${
                ulClass ? ulClass : ""
              }`}
            >
              {elem !== null &&
                elem.catalog.map((catalogName, index) => (
                  <Link
                    to={`/category/${male}/${elem.name}/${catalogName.name}`}
                    key={catalogName._id}
                  >
                    <li key={catalogName._id}>{catalogName.name}</li>
                  </Link>
                ))}
            </ul>
          </div>
        ))}
    </>
  );
};
