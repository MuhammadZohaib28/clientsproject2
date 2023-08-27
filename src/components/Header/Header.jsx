import React from "react";
import "./header.scss";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="tagline">
        <h1>revlutionize retail with 'ontheway's Autonomous shopping</h1>
      </div>
    </header>
  );
};

export default Header;
