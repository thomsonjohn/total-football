import React from "react";

import Fixture from "../Fixture/Fixture";

import "./FixtureList.css";

const FixtureList = props => {
  const { matchday, teams, matchdayId, leagueCode } = props;
  const fixtures = matchday.map((match, index) => {
    return (
      <Fixture
        key={index}
        match={match}
        teams={teams}
        index={index}
        leagueCode={leagueCode}
      />
    );
  });
  return (
    matchday && (
      <section className="fixture-list">
        <h2 className="fixture-list-head">Matchday {matchdayId}</h2>
        {fixtures}
      </section>
    )
  );
};

export default FixtureList;
