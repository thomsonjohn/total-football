import React from "react";

import Fixture from "../Fixture/Fixture";

import "./FixtureList.css";

const FixtureList = props => {
  const { matchday, teams } = props;
  const fixtures = matchday.map((match, index) => {
    return <Fixture key={index} match={match} teams={teams} index={index} />;
  });
  return <section className="fixture-list">{fixtures}</section>;
};

export default FixtureList;
