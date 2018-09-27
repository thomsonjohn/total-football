import React from "react";

import ControlPanel from "../ControlPanel/ControlPanel";
import FixtureView from "../FixtureView/FixtureView";

const Scores = ({
  selectedLeague,
  selectedMonth,
  onLeagueChange,
  onMonthChange,
  monthsInLeague,
  matchdaysToShow
}) => {
  return (
    <div className="main-scores">
      <ControlPanel
        selectedLeague={selectedLeague}
        selectedMonth={selectedMonth}
        onLeagueChange={onLeagueChange}
        onMonthChange={onMonthChange}
        monthsInLeague={monthsInLeague}
      />
      <FixtureView
        matchdaysToShow={matchdaysToShow}
        selectedLeague={selectedLeague}
      />
    </div>
  );
};

export default Scores;
