import React from "react";

import "./Header.css";

import logo from "../../assets/img/football-badge.png";

const Header = () => {
  return (
    <header>
      <img className="header__logo" src={logo} alt="logo" />
      <h1 className="header__title">Total Football</h1>
    </header>
  );
};

export default Header;
