import React from "react";

import "./FixtureView.css";
import FixtureList from "../FixtureList/FixtureList";

const FixtureView = props => {
  const {
    matchday,
    matchdays,
    selectedMatchday,
    teams,
    currentMatchday,
    leagueCode
  } = props;
  let content;

  if (selectedMatchday === "current") {
    content = (
      <FixtureList
        matchdayId={currentMatchday}
        matchday={matchday}
        teams={teams}
        leagueCode={leagueCode}
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
            leagueCode={leagueCode}
          />
        );
      }
    });
  }

  return <section className="fixture-view">{content}</section>;
};

export default FixtureView;
