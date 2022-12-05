import React, { Dispatch, SetStateAction } from "react";

// export function showModal(refTarget: RefObject<HTMLUListElement>) {
//   const bottomHeigth = refTarget.current?.getBoundingClientRect().bottom;
//   const modal = document.querySelector(".modal") as HTMLDivElement;

//   if (refTarget.current) {
//     refTarget.current.querySelectorAll("li").forEach((elem, idx, arr) => {
//       const currentElem = elem as HTMLLIElement;
//       currentElem.addEventListener("click", (e: MouseEvent): void => {
//         arr.forEach((_, index) => {
//           if (arr[index].classList.contains("active")) {
//             arr[index].classList.remove("active");
//           }
//           if (arr[index] === e.target) {
//             arr[index].classList.add("active");
//             if (arr[index].classList.contains("active")) {
//               modal.classList.add("header--modal");
//               modal.style.top = `${bottomHeigth}px`;
//             }
//           }
//           if (!modal.classList.contains("header--modal")) {
//             arr.forEach((_, index) => {
//               if (arr[index].classList.contains("active")) {
//                 arr[index].classList.remove("active");
//               }
//             });
//           }
//         });
//         return;
//       });
//       return;
//     });
//   }
// }

// export const showAndHideDropdown = (
//   toggleCollapsedIcon: NodeListOf<HTMLSpanElement>
// ) => {
//   toggleCollapsedIcon.forEach((spanElem, index, spanArr) => {
//     spanElem.addEventListener("click", (e: MouseEvent) => {
//       const neighbouringElem = (e.target as HTMLSpanElement).parentElement
//         ?.parentElement?.nextSibling as HTMLUListElement;

//       if ((e.target as HTMLSpanElement).classList.contains("minus")) {
//         console.log((e.target as HTMLSpanElement).classList.contains("minus"));

//         (e.target as HTMLSpanElement).classList.replace("minus", "plus");
//         if (neighbouringElem !== null) {
//           neighbouringElem.style.height = "100%";
//           neighbouringElem.style.overflow = "auto";
//         }

//         return;
//       }

//       if ((e.target as HTMLSpanElement).classList.contains("plus")) {
//         (e.target as HTMLSpanElement).classList.replace("plus", "minus");
//         if (neighbouringElem !== null) {
//           neighbouringElem.style.height = "0";
//           neighbouringElem.style.overflow = "hidden";
//         }
//         console.log((e.target as HTMLSpanElement).classList.contains("minus"));

//         return;
//       }
//     });
//   });
// };

export const showAndhideContent = (setTextBtn: (text: string) => void) => {
  const hideElem = document.querySelector("[data-dropdown]");
  const changeElem = document.querySelector("[data-add-grid]");
  const parentElem = document.querySelector("[data-parent-target]");

  if (changeElem?.classList.contains("catalog--grid-content")) {
    hideElem?.classList.remove("d-none");
    changeElem.classList.add("catalog-content");
    changeElem.classList.remove("catalog--grid-content");
    parentElem?.classList.add("catalog-container");
    setTextBtn("hide filters");
    return;
  }
  if (hideElem !== null && changeElem !== null) {
    hideElem?.classList.add("d-none");
    changeElem.classList.remove("catalog-content");
    changeElem.classList.add("catalog--grid-content");
    parentElem?.classList.remove("catalog-container");
    setTextBtn("show filters");
    return;
  }
};

// export const showAndHideDropdown = (
//   toggleCollapsedIcon: NodeListOf<HTMLSpanElement>
// ) => {
//   toggleCollapsedIcon.forEach((spanElem, index, spanArr) => {
//     spanElem.addEventListener("click", (e: MouseEvent) => {
//       const neighbouringElem = (e.target as HTMLSpanElement).parentElement
//         ?.parentElement?.nextSibling as HTMLUListElement;

//       if ((e.target as HTMLSpanElement).classList.contains("minus")) {
//         console.log((e.target as HTMLSpanElement).classList.contains("minus"));

//         (e.target as HTMLSpanElement).classList.replace("minus", "plus");
//         if (neighbouringElem !== null) {
//           neighbouringElem.style.height = "100%";
//           neighbouringElem.style.overflow = "auto";
//         }
//         return;
//       }

//       if ((e.target as HTMLSpanElement).classList.contains("plus")) {
//         (e.target as HTMLSpanElement).classList.replace("plus", "minus");
//         if (neighbouringElem !== null) {
//           neighbouringElem.style.height = "0";
//           neighbouringElem.style.overflow = "hidden";
//         }

//         return;
//       }
//     });
//   });
// };

export const showAndHideDropdown = (e: React.MouseEvent) => {
  const neighbouringElem = (e.target as HTMLSpanElement).parentElement
    ?.parentElement?.nextSibling as HTMLUListElement;
  if ((e.target as HTMLSpanElement).classList.contains("minus")) {
    (e.target as HTMLSpanElement).classList.replace("minus", "plus");
    if (neighbouringElem !== null) {
      neighbouringElem.style.height = "100%";
      neighbouringElem.style.overflow = "auto";
    }
    return;
  }

  if ((e.target as HTMLSpanElement).classList.contains("plus")) {
    (e.target as HTMLSpanElement).classList.replace("plus", "minus");
    if (neighbouringElem !== null) {
      neighbouringElem.style.height = "0";
      neighbouringElem.style.overflow = "hidden";
    }

    return;
  }
};

export function handleString(str: string): void {}

export function $(selector: string): HTMLElement | null {
  return document.querySelector(selector);
}
export function $$(selector: string): NodeListOf<HTMLElement> | null {
  return document.querySelectorAll(selector);
}
export function MyMin(myarr: number[]) {
  var al = myarr.length;
  let minimum = myarr[al - 1];
  while (al--) {
    if (myarr[al] < minimum) {
      minimum = myarr[al];
    }
  }
  return minimum;
}
export function MyMax(myarr: number[]) {
  var al = myarr.length;
  let minimum = myarr[al - 1];
  while (al--) {
    if (myarr[al] > minimum) {
      minimum = myarr[al];
    }
  }
  return minimum;
}

interface AddAndRemoveActiveHandleProps {
  leftArrow: HTMLElement | null;
  rightArrow: HTMLElement | null;
  imageGroup: NodeListOf<HTMLImageElement> | null;
  imageCounter: number;
  mainImage: HTMLImageElement | null;
  setImageCounter: Dispatch<SetStateAction<number>>;
}

export const addAndRemoveActiveHandle = ({
  leftArrow,
  rightArrow,
  imageCounter,
  imageGroup,
  mainImage,
  setImageCounter,
}: AddAndRemoveActiveHandleProps) => {
  return (e: MouseEvent) => {
    if (e.target === rightArrow && imageGroup !== null && mainImage) {
      if (imageGroup.length > 0) {
        if (imageCounter === imageGroup.length) {
          mainImage.src = imageGroup[imageGroup.length - 1].src;

          if (imageCounter > imageGroup.length - 1) return;

          return;
        }
        imageGroup.forEach((image) => {
          if (image.classList.contains("actived")) {
            image.classList.remove("actived");
          }
        });
        imageGroup[imageCounter].classList.add("actived");
        setImageCounter(imageCounter++);

        return;
      }
    }
    if (e.target === leftArrow && imageGroup !== null && mainImage !== null) {
      if (imageGroup.length > 0) {
        if (imageCounter > 0) {
          if (imageCounter >= imageGroup.length) {
            setImageCounter((imageCounter = imageGroup.length - 1));
            mainImage.src = imageGroup[imageCounter].src;

            return;
          }
          if (imageCounter >= 0) {
            setImageCounter(imageCounter--);
            mainImage.src = imageGroup[imageCounter].src;
            imageGroup.forEach((image) => {
              if (image.classList.contains("actived")) {
                image.classList.remove("actived");
              }
            });
            imageGroup[imageCounter].classList.add("actived");

            return;
          }

          if (imageCounter <= 0) {
            setImageCounter(0);
            mainImage.src = imageGroup[imageCounter].src;
          }

          return;
        }
      }
    }
  };
};
// export const showModalAndHideHandle = (
//   overlay: HTMLElement | null,
//   close: HTMLElement | null
// ) => {
//   return (e: unknown) => {
//     const event = e as React.MouseEvent;
//     if (overlay && (event.target as HTMLElement) === close) {
//       overlay.style.display = "none";
//       return;
//     }
//     if (overlay && !(event.target as HTMLElement).closest(".modal")) {
//       overlay.style.display = "none";
//       return;
//     }
//   };
// };
export const showHandleModal = (
  overlay: HTMLElement | null,
  close: HTMLElement
) => {
  return (e: MouseEvent) => {
    if (overlay !== null && close) {
      if (e.target === overlay || e.target === close) {
        overlay.style.display = "none";
      }
    }
  };
};
export const localStorageGetItem = (field: string) => {
  return JSON.parse(localStorage.getItem(field) || "[]");
};
