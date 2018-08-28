import React from "react";

const Fixture = props => {
  const { match, index } = props;
  return (
    <div className="fixture" key={index}>
      <div className="fixture__team">
        <p>{match.homeTeam.name}</p>
      </div>
      <div className="fixture__team">
        <p>{match.awayTeam.name}</p>
      </div>
    </div>
  );
};

export default Fixture;
