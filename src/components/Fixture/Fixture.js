import React from "react";

import "./Fixture.css";

import defaultBadge from "../../assets/img/shield.png";

const Fixture = props => {
  const { match, index } = props;
  return (
    <div className="fixture" key={index}>
      <div className="fixture__badge-container">
        <img className="fixture__badge" src={defaultBadge} alt="badge" />
      </div>
      <div className="fixture__team fixture__team--home">
        <p className="fixture__team-name">{match.homeTeam.name}</p>
      </div>
      <div className="fixture__score">
        <div className="fixture__goals">
          <p>
            <span>{match.score.fullTime.homeTeam}</span>:
            <span>{match.score.fullTime.awayTeam}</span>
          </p>
        </div>
      </div>
      <div className="fixture__team fixture__team--away">
        <p className="fixture__team-name">{match.awayTeam.name}</p>
      </div>
      <div className="fixture__badge-container">
        <img className="fixture__badge" src={defaultBadge} alt="badge" />
      </div>
    </div>
  );
};

export default Fixture;
