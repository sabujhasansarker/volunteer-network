import React from "react";

import card from "../../images/card.png";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <Link to="/" className="single-card br-10">
      <img src={card} alt="" />
      <div
        className="content"
        style={{
          background: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        }}
      >
        <h2 className="text-center  text-white f-600 fs-22">Food Charity</h2>
      </div>
    </Link>
  );
};

export default Card;
