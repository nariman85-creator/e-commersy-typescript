import React, { memo, MouseEvent } from "react";
import { CustomReducerStateValue } from "../../pages/Category/CatalogCustomTypes";
import { Icon } from "../icons/Icon";
import { Input } from "../Input";
import { CatalogList } from "../List/catalogList";
import { SectionTitle } from "../SectionTitle";
export interface ICollapsedProps {
  panelTitle: string;
  inputVisible: boolean;
  data: { name: string; catalog: string[] };
  onClick: (event: MouseEvent<Element>) => void;
  inputValueHandler: (
    value: string,
    typeValue: CustomReducerStateValue
  ) => void;
}

export const Collapsed: React.FC<ICollapsedProps> = memo (({
  panelTitle,
  inputVisible,
  data,
  onClick,
  inputValueHandler
}) => {
  return (
    <div className="panel-filter catalog-filters">
      <div className="panel-filter collapsed">
        <div className="result-tracker ">
          <div className="panel-catalog--filter df-fc">
            <div className="filter__info df">
              <SectionTitle
                text={`${panelTitle}`}
                className="panel-filter--text "
              />
              <span
                className="filters__drop bg--image minus"
                data-dropdown
                onClick={(e: MouseEvent<HTMLSpanElement>) => onClick(e)}
              ></span>
            </div>
            {inputVisible && (
              <div className="panel-filter--search">
                <Input
                  type="text"
                  placeholder={`Search the ${data.name} type`}
                  clasname="panel--search__input"
                ></Input>
                <Icon icon="search" className="panel-search--icon" />
              </div>
            )}
          </div>
          <CatalogList
            data={data.catalog}
            input={{ view: true, type: "checkbox", className: "" }}
            inputData={panelTitle}
            inputValueHandler={inputValueHandler}
            inputWrapName={data.name}
          />
        </div>
      </div>
    </div>
  );
});
