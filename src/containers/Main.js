import React from "react";
import { connect } from "react-redux";
import { createRouteNodeSelector } from "redux-router5";

import Scores from "../components/Scores/Scores";
import Profile from "../components/Profile/Profile";
import ComingSoon from "../components/ComingSoon/ComingSoon";
import NotFound from "../components/NotFound/NotFound";

const Main = ({
  route,
  selectedLeague,
  selectedMonth,
  onLeagueChange,
  onMonthChange,
  monthsInLeague,
  matchdaysToShow,
  isSignedIn
}) => {
  const topRouteName = route.name.split(".")[0];

  if (topRouteName === "scores") {
    return (
      <Scores
        selectedLeague={selectedLeague}
        selectedMonth={selectedMonth}
        onLeagueChange={onLeagueChange}
        onMonthChange={onMonthChange}
        monthsInLeague={monthsInLeague}
        matchdaysToShow={matchdaysToShow}
      />
    );
  }

  if (topRouteName === "league-table") {
    return <ComingSoon name="League table" />;
  }

  if (topRouteName === "account") {
    return <Profile isSignedIn={isSignedIn} />;
  }

  return <NotFound />;
};

export default connect(createRouteNodeSelector(""))(Main);
