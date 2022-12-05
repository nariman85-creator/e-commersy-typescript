
export function showModalAndToggleActive<
  T extends {
    position: { top: number };
    className: string;
    text: string | undefined;
  }
>(
  headerListShop: HTMLUListElement | null,
  textRef: string | undefined,
  setFn: (initialState: T | null) => void,
  obj: T
) {
  document.addEventListener("click", (event: MouseEvent) => {
    const modal = document.querySelector(".modal") as HTMLDivElement;

    const anyElem = event.target as HTMLElement;
    const liCollection: NodeListOf<HTMLLIElement> | undefined =
      headerListShop?.querySelectorAll("[data-shop]");
    if (
      !anyElem.closest(".header--modal") &&
      !anyElem.classList.contains(".shop-product__item") &&
      liCollection !== undefined
    ) {
      setFn(null);
      liCollection.forEach((elem, idx, arr) => {
        if (!modal.classList.contains("header--modal")) {
          arr.forEach((_, index) => {
            if (arr[index].classList.contains("active")) {
              arr[index].classList.remove("active");
            }
          });
        }
      });
    }

    if (anyElem && liCollection) {
      liCollection.forEach(
        (elem: HTMLLIElement, idx: number, arr: NodeListOf<HTMLLIElement>) => {
          if (anyElem === arr[idx]) {
            arr.forEach((_, index) => {
              if (arr[index].classList.contains("active")) {
                arr[index].classList.remove("active");
              }
            });
            arr[idx].classList.add("active");

            textRef = arr[idx].dataset.shop;
            setFn({ ...obj, text: textRef });
          }
        }
      );
    }
  });
}
