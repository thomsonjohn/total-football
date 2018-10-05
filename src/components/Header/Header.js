import React from "react";
import { connect } from "react-redux";
import { BaseLink } from "react-router5";

import "./Header.css";

import logo from "../../assets/img/football-badge.png";

const Header = props => {
  const { profilePic, router } = props;
  return (
    <header>
      <div className="header__left">
        <BaseLink
          router={router}
          routeName="scores"
          routeOptions={{ reload: true }}
        >
          <img className="header__logo" src={logo} alt="logo" />
          <h1 className="header__title">Total Football</h1>
        </BaseLink>
      </div>
      <div className="header__right">
        <BaseLink router={router} routeName="account">
          <img className="header__profile-pic" src={profilePic} alt="profile" />
        </BaseLink>
      </div>
    </header>
  );
};

export default connect(state => state.router.route)(Header);
