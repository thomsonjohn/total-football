import React from "react";

import Fixture from "../Fixture/Fixture";

import "./FixtureList.css";

const FixtureList = props => {
  const { matchday } = props;
  const fixtures = matchday.matches.map((match, index) => {
    return <Fixture match={match} index={index} />;
  });
  return <section className="fixture-list">{fixtures}</section>;
};

export default FixtureList;
