import React from "react";
import { connect } from "react-redux";
import { createRouteNodeSelector } from "redux-router5";

import Scores from "../components/Scores/Scores";
import Test from "../components/Test";
import NotFound from "../components/NotFound";

const Main = ({
  route,
  selectedLeague,
  selectedMonth,
  onLeagueChange,
  onMonthChange,
  monthsInLeague,
  matchdaysToShow
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

  if (topRouteName === "test") {
    return <Test />;
  }

  return <NotFound />;
};

export default connect(createRouteNodeSelector(""))(Main);
