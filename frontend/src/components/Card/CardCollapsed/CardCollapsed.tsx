import React, { useState } from 'react'
import { localStorageGetItem } from '../../../utils/helpers';
import { Buttons } from '../../Buttons';

export const CardCollapsed = () => {
      const [showCardModal, setShowCardModal] = useState<boolean>(false);

      const addCardHandle = (id: string) => {
        const cardId: string[] = localStorageGetItem("addToCard");
        setShowCardModal((prev) => {
          if (!prev) {
            return true;
          }
          if (prev) return false;
          return false;
        });
        const arrСheck = cardId.some((elem) => {
          return elem === id;
        });
        if (arrСheck) return;

        cardId.push(id);
        localStorage.setItem("addToCard", JSON.stringify(cardId));
      };

  return (
    <div className="collapsed card-collapsed">
      <div className="card-feature">
        <div className="product-properties df">
          <div className="product-size">
            <ul className="product-size__list list list--reset df">
              <li className="product-list__item">
                <input type="checkbox" name="color" id="color" value={36} />
              </li>
              <li className="product-list__item">
                <input
                  type="checkbox"
                  name="color"
                  id="color"
                  value={37}
                  className="active"
                />
              </li>
              <li className="product-list__item">
                <input type="checkbox" name="color" id="color" value={38} />
              </li>
              <li className="product-list__item">
                <input type="checkbox" name="color" id="color" value={39} />
              </li>
              <li className="product-list__item">
                <input type="checkbox" name="color" id="color" value={40} />
              </li>
            </ul>
          </div>
          <div className="product-color">
            <ul className="list list--reset product-color__list df">
              <li className="product-color__item active">
                <input type="radio" name="color" id="" value={"black"} />
              </li>
              <li className="product-color__item">
                <input type="radio" name="color" id="" value={"brown"} />
              </li>
              <li className="product-color__item">
                <input type="radio" name="color" id="" value={"ligth-blue"} />
              </li>
            </ul>
          </div>
        </div>
        <div className="card-btn__box">
          <Buttons
            text="Add to cart"
            clasname="btn-add card-btn--basket__icon"
            onClick={addCardHandle}
          />
        </div>
      </div>
    </div>
  );
}
