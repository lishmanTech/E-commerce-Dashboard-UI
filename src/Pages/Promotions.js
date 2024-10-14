import React from "react";
import "./Promotions.css"; // Import the CSS file for styling
import arrowdonw from "../Asset/ArrowRight.svg";

const promotions = [
  {
    title: "Top Ads",
    description: "Make your product be the first line on the searching result",
  },
  {
    title: "Free Delivery",
    description: "Give a free delivery voucher for your customer",
  },
  {
    title: "Cashback Voucher",
    description: "Give a cashback voucher for your customer",
  },
  {
    title: "Top Items",
    description: "Set your top items on the your display store",
  },
  {
    title: "Top Ads",
    description: "Make your product be the first line on the searching result",
  },
  {
    title: "Free Delivery",
    description: "Give a free delivery voucher for your customer",
  },
  {
    title: "Cashback Voucher",
    description: "Give a cashback voucher for your customer",
  },
  {
    title: "Top Items",
    description: "Set your top items on the your display store",
  },
];

const Promotions = () => {
  return (
    <div className="promotions-container">
      <h2 style={{fontFamily: "mulish", color: "#11142D"}}>Promotions</h2>
      <p>Use this feature to increase your store performance</p>

      <div className="promotions-grid">
        {promotions.map((promotion, index) => (
          <div className="promotion-card" key={index}>
            <div className="promotion-info">
              <div className="product-rect"></div>
              <div>
                <h3>{promotion.title}</h3>
                <p>{promotion.description}</p>
              </div>
            </div>
            <div className="promotion-arrow"><img src={arrowdonw} alt="down" /></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promotions;
