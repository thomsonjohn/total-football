import React from "react";

import "./Header.css";

import logo from "../../assets/img/football-badge.png";

const Header = props => {
  const { profilePic } = props;
  return (
    <header>
      <div className="header__left">
        <img className="header__logo" src={logo} alt="logo" />
        <h1 className="header__title">Total Football</h1>
      </div>
      <div className="header__right">
        <img className="header__profile-pic" src={profilePic} alt="profile" />
      </div>
    </header>
  );
};

export default Header;
