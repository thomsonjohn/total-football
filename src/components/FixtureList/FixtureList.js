import React from "react";

import Fixture from "../Fixture/Fixture";

import "./FixtureList.css";

const FixtureList = props => {
  const { matchday, teams, matchdayId } = props;
  const fixtures = matchday.map((match, index) => {
    return <Fixture key={index} match={match} teams={teams} index={index} />;
  });
  return (
    <section className="fixture-list">
      <h2 className="fixture-list-head">Matchday {matchdayId}</h2>
      {fixtures}
    </section>
  );
};

export default FixtureList;
