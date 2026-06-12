import React from "react";
import "./header.css";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div
      className="header"
      style={{ backgroundImage: `url(${assets.header_img})` }}
    >
      <div className="header-brand">
        <img src={assets.logo} alt="Cafe's Katta" className="header-logo" />
        <span>Your Cozy Gathering Spot</span>
      </div>
      <div className="header-contents">
        <h2>order your favourite food</h2>
        <p>
          choose from a diverse menu featuring a delecatable array of dishes
          creaffed with the finest ingredients and culinary expertise our
          mission is to satisfy your cravings and elevate your dining experience
          , one delicious meals at a time
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
