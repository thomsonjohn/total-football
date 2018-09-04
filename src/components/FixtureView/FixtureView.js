import React from "react";

import FixtureList from "../FixtureList/FixtureList";

const FixtureView = props => {
  const {
    matchday,
    matchdays,
    selectedMatchday,
    teams,
    currentMatchday
  } = props;
  let content;

  if (selectedMatchday === "current") {
    content = (
      <FixtureList
        matchdayId={currentMatchday}
        matchday={matchday}
        teams={teams}
      />
    );
  } else {
    content = matchdays.map((day, index) => {
      if (day.month === selectedMatchday) {
        return (
          <FixtureList
            key={index}
            matchday={day.matches}
            matchdayId={day.matchday}
            teams={teams}
          />
        );
      }
    });
  }

  return <section className="fixture-view">{content}</section>;
};

export default FixtureView;
