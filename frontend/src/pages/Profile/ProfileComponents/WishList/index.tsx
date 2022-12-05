import React from 'react';
import { Card } from '../../../../components/Card/Card';
import "./WishList.scss";
import bag from "../../../../assets/images/sale/bag.png";
import jeans from "../../../../assets/images/sale/jeans.png";
import boots from "../../../../assets/images/sale/boots.png";


export const WishList = () => {
  return (
    <div className="wishlist-wrap wishlist">
      <div className="wishlist-content df">
        <div className="wishlist-item__wrap df">
          <div
            className="wishlist-carousel__item"
            key={Math.random() * Date.now()}
          >
            <Card
              imageUrl=""
              productName=""
              success
              saleProduct={true}
              productImage={[bag, jeans, boots]}
              collapsed={false}
              key={`${Math.random() * Date.now()}`}
            />{" "}
          </div>
          <div
            className="wishlist-carousel__item"
            key={Math.random() * Date.now()}
          >
            <Card
              imageUrl=""
              productName=""
              success
              saleProduct={true}
              productImage={[bag, jeans, boots]}
              collapsed={false}
              key={`${Math.random() * Date.now()}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
