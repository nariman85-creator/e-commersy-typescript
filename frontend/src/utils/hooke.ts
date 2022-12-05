import React, {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useLocation } from "react-router-dom";

export const usePositionHooks = (
  target: HTMLElement | null,
  left: string,
  right: string
): [
  { left: string; right: string },
  Dispatch<SetStateAction<{ left: string; right: string }>>
] => {
  const [state, setState] = React.useState<{ left: string; right: string }>({
    left: "0px",
    right: "0px",
  });
  useEffect(() => {
    setState({
      left,
      right,
    });
  }, []);
  return [state, setState];
};

export const useLocations = (text: string = "") => {
  const { pathname } = useLocation();

  const pathDel = pathname.slice(10);

  const pathArr = pathDel.split("/");

  if (pathArr.length > 0) {
    pathArr.push(text);
    localStorage.setItem("pathArr", JSON.stringify(pathArr));
  }
  const pathArray: string[] = JSON.parse(
    localStorage.getItem("pathArr") || "[]"
  );
  return { pathArr, pathDel, pathArray };
};
export const useFadePage = (): [
  number,
  (
    keyObj: number,
    btnList: MutableRefObject<HTMLUListElement | null>,
    childElementCount:string
  ) => (e: React.MouseEvent) => void
] => {
  let [pageFadetext, setPagefadetext] = useState<number>(0);

  const fadeInPage =
    (keyobj: number, btnList: MutableRefObject<HTMLUListElement | null>,childSelector:string) =>
    (e: React.MouseEvent): void => {
      setPagefadetext((pageFadetext = keyobj));

      if (btnList?.current?.childElementCount === 0)
        return setPagefadetext((pageFadetext = 0));

      if (btnList !== null) {
        btnList.current
          ?.querySelectorAll(childSelector)
          .forEach((btn: Element) => {
            if (btn.classList.contains("single--btn__select")) {
              btn.classList.remove("single--btn__select");
            }
            btnList.current?.children[keyobj]
              .querySelector("button")
              ?.classList.add("single--btn__select");
          });
      }
    };

  return [pageFadetext, fadeInPage];
};
