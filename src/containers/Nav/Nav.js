import React from "react";
import { connect } from "react-redux";
import { BaseLink } from "react-router5";

import "./Nav.css";

const Nav = props => {
  const { router } = props;
  return (
    <nav>
      <BaseLink
        router={router}
        routeName="scores"
        routeOptions={{ reload: true }}
      >
        Matches
      </BaseLink>
      <BaseLink router={router} routeName="league-table">
        League Table
      </BaseLink>
      <BaseLink router={router} routeName="account">
        Account
      </BaseLink>
    </nav>
  );
};

export default connect(state => state.router.route)(Nav);
