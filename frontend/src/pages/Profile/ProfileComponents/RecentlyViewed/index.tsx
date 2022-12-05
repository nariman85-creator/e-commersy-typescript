import React, { useEffect } from "react";
import { Card } from "../../../../components/Card/Card";
import "./RecentlyViewed.scss";
import bag from "../../../../assets/images/sale/bag.png";
import jeans from "../../../../assets/images/sale/jeans.png";
import boots from "../../../../assets/images/sale/boots.png";

export const RecentlyViewed = () => {
  return (
    <div className="recently-viewed__wrap recently-viewed">
      <div className="recently-viewed__card--body">
        <Card
          imageUrl=""
          productName=""
          saleProduct={true}
          productImage={[bag, jeans, boots]}
          collapsed={false}
          key={`${Math.random() * Date.now()}`}
        />{" "}
        <Card
          imageUrl=""
          productName=""
          saleProduct={true}
          productImage={[bag, jeans, boots]}
          collapsed={false}
          key={`${Math.random() * Date.now()}`}
        />{" "}
        <Card
          imageUrl=""
          productName=""
          saleProduct={true}
          productImage={[bag, jeans, boots]}
          collapsed={false}
          key={`${Math.random() * Date.now()}`}
        />{" "}
        <Card
          imageUrl=""
          productName=""
          saleProduct={true}
          productImage={[bag, jeans, boots]}
          collapsed={false}
          key={`${Math.random() * Date.now()}`}
        />{" "}
      </div>
    </div>
  );
};
