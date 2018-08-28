import React from "react";

const FixtureList = props => {
  const { matchday } = props;
  const fixtures = matchday.matches.map((match, index) => {
    return (
      <div key={index}>
        <p>{match.homeTeam.name}</p>
        <p>{match.awayTeam.name}</p>
      </div>
    );
  });
  return <section className="fixture-list">{fixtures}</section>;
};

export default FixtureList;
