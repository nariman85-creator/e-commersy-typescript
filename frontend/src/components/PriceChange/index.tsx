import React, {
  Dispatch,
  memo,
  SetStateAction,
  useCallback,
  useEffect,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { CustomReducerStateValue } from "../../pages/Category/CatalogCustomTypes";
import { fetchLoadingSelectProducts } from "../../store/ducks/product/productSelect/productSelectAction";
import { AppState } from "../../store/reducers";
import { $ } from "../../utils/helpers";
import { usePositionHooks } from "../../utils/hooke";
import { SectionTitle } from "../SectionTitle";
import "./Price.scss";

export interface IPriceIndicatorsProps {
  data: number[];
  getInputValueHandler: (
    value: string | { minPrice: string; maxPrice: string },
    typeValue: CustomReducerStateValue
  ) => void;
}

export const PriceIndicators: React.FC<IPriceIndicatorsProps> = memo(
  ({ data, getInputValueHandler }) => {
    const selectPrice = useSelector(
      (state: AppState) => state.details.data[0].price
    );
    const dispatch = useDispatch();
    const { pathname } = useLocation();

    const pathDel = pathname.slice(10);

    const priceArr = selectPrice.sort((a, b) => a - b);

    const badgeLeft: HTMLElement | null = $(".price-indicators--badge__left");
    const badgeRight: HTMLElement | null = $(".price-indicators--badge__rigth");
    const thumb: HTMLElement | null = $(".price-indicators--thumb");

    const [elemPosition, setElemPosition] = usePositionHooks(
      thumb,
      "0px",
      "0px"
    );

    const [elemLeftBadgePosition, setElemLeftBadgeposition] = usePositionHooks(
      badgeLeft,
      "0px",
      "0px"
    );

    const [elemRightBadgePosition, setElemRightBadgeposition] =
      usePositionHooks(badgeRight, "", "0px");

    const btnPriceLeft = $('[data-price-change="left"]');
    const btnPriceRigth = $('[data-price-change="right"]');

    const handleLeftDivision = useCallback(
      (
          elemLeftBadgePosition: { left: string; right: string },
          setElemLeftBadgeposition: Dispatch<
            SetStateAction<{ left: string; right: string }>
          >,
          setElemPosition: Dispatch<
            SetStateAction<{ left: string; right: string }>
          >,
          thumb: HTMLElement,
          badgeLeft: HTMLElement | null
        ) =>
        (event: MouseEvent) => {
          let { clientX } = event;

          if (btnPriceLeft !== null) {
            (event.target as HTMLDivElement).addEventListener(
              "mousemove",
              (evt) => {
                if (
                  (event.target as HTMLDivElement).dataset.priceChange ===
                  "left"
                ) {
                  let clientXX = evt.clientX;

                  btnPriceLeft.style.left = `${clientXX - clientX}px`;
                  btnPriceLeft.style.right = `${clientXX - clientX}px`;
                  setElemLeftBadgeposition({
                    left: `${clientXX - clientX}px`,
                    right: `${clientX - clientXX}px`,
                  });

                  setElemPosition({
                    left: btnPriceLeft.style.left,
                    right: btnPriceRigth?.style.right.substring(1) || "0px",
                  });

                  if (
                    btnPriceRigth != null &&
                    btnPriceRigth.style.left !== undefined
                  ) {
                    if (
                      btnPriceLeft.getBoundingClientRect().right >=
                      btnPriceRigth.getBoundingClientRect().left
                    ) {
                      btnPriceLeft.style.right = btnPriceRigth.style.left;
                      return;
                    }
                  }

                  if (badgeLeft && thumb) {
                    const step = thumb.offsetWidth / priceArr.length;
                    let arrIndex =
                      Math.abs(Math.floor((clientXX - 62) / step) - 1) - 1;

                    if (arrIndex <= 0) {
                      arrIndex = 0;
                    }
                    if (arrIndex > priceArr.length - 1) {
                      arrIndex = priceArr.length - 1;
                    }

                    btnPriceLeft.textContent = `${priceArr[arrIndex]}`;
                    if (
                      btnPriceRigth !== null &&
                      btnPriceLeft.textContent !== null &&
                      btnPriceLeft.textContent !== "" &&
                      btnPriceRigth.textContent !== null &&
                      btnPriceRigth.textContent !== null &&
                      btnPriceLeft.textContent !== undefined &&
                      btnPriceRigth.textContent !== undefined
                    ) {
                      getInputValueHandler(
                        {
                          minPrice: btnPriceLeft.textContent,
                          maxPrice: btnPriceRigth.textContent,
                        },
                        CustomReducerStateValue.PRICE
                      );
                    }

                    if (btnPriceLeft.style.left <= "0px") {
                      btnPriceLeft.style.left = "0px";
                      setElemLeftBadgeposition({
                        left: `0px`,
                        right: `${clientX - clientXX}px`,
                      });

                      setElemPosition({
                        left: elemLeftBadgePosition.left,
                        right: btnPriceRigth?.style.right.substring(1) || "0px",
                      });
                    }
                  }
                }
              }
            );
          }
        },
      [btnPriceLeft, btnPriceRigth, priceArr]
    );
    const handleRightDivision = useCallback(
      (
          badgeRight: HTMLElement,
          btnPriceLeft: HTMLElement,
          setElemPosition: Dispatch<
            SetStateAction<{ left: string; right: string }>
          >,
          setElemRightBadgeposition: Dispatch<
            SetStateAction<{ left: string; right: string }>
          >,
          thumb: HTMLElement
        ) =>
        (event: MouseEvent) => {
          let { clientX } = event;

          if (btnPriceRigth !== null) {
            (event.target as HTMLDivElement).addEventListener(
              "mousemove",
              (evt) => {
                if (
                  (event.target as HTMLDivElement).dataset.priceChange ===
                    "right" &&
                  btnPriceRigth.parentElement !== null &&
                  badgeLeft
                ) {
                  let clientXX = evt.clientX;

                  btnPriceRigth.style.right = `${
                    btnPriceRigth.offsetWidth * 2 -
                    btnPriceRigth.parentElement.offsetWidth -
                    clientXX +
                    clientX
                  }px`;

                  setElemRightBadgeposition({
                    left: "",
                    right: clientX - clientXX + "px",
                  });

                  setElemPosition({
                    right: clientX - clientXX + "px",
                    left: badgeLeft?.style.right.substring(1),
                  });

                  if (
                    badgeRight &&
                    thumb &&
                    btnPriceLeft &&
                    btnPriceRigth.parentElement
                  ) {
                    const step = thumb.offsetWidth / priceArr.length;

                    btnPriceRigth.textContent = `${
                      priceArr[
                        Math.abs(
                          Math.floor((clientX - 62 - clientXX - 62) / step)
                        )
                      ]
                    }`;
                    if (
                      btnPriceRigth.textContent !== null &&
                      btnPriceRigth.textContent !== "" &&
                      btnPriceLeft.textContent !== null &&
                      btnPriceLeft.textContent !== ""
                    ) {
                      getInputValueHandler(
                        {
                          minPrice: btnPriceLeft.textContent,
                          maxPrice: btnPriceRigth.textContent,
                        },
                        CustomReducerStateValue.PRICE
                      );
                    }
                    if (
                      btnPriceRigth.getBoundingClientRect().right >=
                      btnPriceRigth.parentElement?.getBoundingClientRect().right
                    ) {
                      btnPriceRigth.style.right =
                        -btnPriceRigth.parentElement?.offsetWidth +
                        btnPriceRigth.offsetWidth * 2 +
                        "px";
                      setElemRightBadgeposition({
                        left: "",
                        right: "0px",
                      });
                    }

                    if (
                      btnPriceLeft.getBoundingClientRect().right >=
                      btnPriceRigth?.getBoundingClientRect().left
                    ) {
                      btnPriceRigth.style.right =
                        -btnPriceLeft?.getBoundingClientRect().left +
                        btnPriceRigth.offsetWidth +
                        "px";
                    }
                  }
                }
              }
            );
          }
        },
      [btnPriceRigth, badgeLeft, priceArr]
    );
    useEffect(() => {
      if (
        btnPriceRigth !== null &&
        btnPriceLeft !== null &&
        btnPriceLeft.textContent !== undefined &&
        btnPriceRigth.textContent !== undefined
      ) {
        dispatch(
          fetchLoadingSelectProducts(
            `${pathDel}/list?maxprice=${btnPriceRigth?.textContent}&minprice=${btnPriceLeft?.textContent}`
          )
        );
      }
    }, [
      btnPriceRigth?.textContent,
      btnPriceLeft?.textContent,
    ]);

    useEffect(() => {
      if (
        thumb != null &&
        badgeLeft !== null &&
        btnPriceLeft != null &&
        badgeRight != null
      ) {
        btnPriceLeft?.addEventListener(
          "mousedown",
          handleLeftDivision(
            elemLeftBadgePosition,
            setElemLeftBadgeposition,
            setElemPosition,
            thumb,
            badgeLeft
          )
        );

        btnPriceRigth?.addEventListener(
          "mousedown",
          handleRightDivision(
            badgeRight,
            btnPriceLeft,
            setElemPosition,
            setElemRightBadgeposition,
            thumb
          )
        );
      }
    }, [btnPriceLeft, btnPriceRigth, dispatch]);
    return (
      <div className="panel-filter collapsed">
        <div
          className="panel-catalog--filter df-fc"
          style={{ paddingTop: "20px" }}
        >
          <div className="filter__info df">
            <SectionTitle text="Price" className="panel-filter--text" />
            <span
              className="filters__drop bg--image minus"
              data-dropdown
            ></span>
          </div>
        </div>
        <div className="price-indicators--panel price">
          <div className="price-indicators--tracker">
            <span
              className="price-indicators--thumb"
              style={{ ...elemPosition }}
            ></span>
            <span
              className="price-indicators--badge__left"
              style={{ ...elemLeftBadgePosition }}
            ></span>
            <span
              className="price-indicators--badge__rigth"
              style={{ ...elemRightBadgePosition }}
            ></span>
          </div>
          <div
            className="price-indicators--division df"
            data-indicators--parent
          >
            <div
              className="price-division--left c--point"
              data-price
              data-price-change="left"
            >
              {data[0]}
            </div>
            <div
              className="price-division--right c--point"
              data-price-change="right"
              data-price
            >
              {data[data.length - 1]}
            </div>
          </div>
        </div>
      </div>
    );
  }
);
