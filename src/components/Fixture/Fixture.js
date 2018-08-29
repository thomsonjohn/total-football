import React from "react";

import "./Fixture.css";

import defaultBadge from "../../assets/img/shield.png";

import getTeamData from "../../utils/get-team-data";

const Fixture = props => {
  const { match, index } = props;
  const homeTeam = getTeamData(match.homeTeam);
  const awayTeam = getTeamData(match.awayTeam);
  return (
    <div className="fixture" key={index}>
      <div className="fixture__team fixture__team--home">
        <p className="fixture__team-name">{homeTeam.shortName}</p>
      </div>
      <div className="fixture__badge-container">
        <img
          className="fixture__badge"
          src={homeTeam.crestUrl ? homeTeam.crestUrl : defaultBadge}
          alt="badge"
        />
      </div>
      <div className="fixture__score">
        <div className="fixture__goals">
          <p>
            <span>{match.score.fullTime.homeTeam}</span>:
            <span>{match.score.fullTime.awayTeam}</span>
          </p>
        </div>
      </div>
      <div className="fixture__badge-container">
        <img
          className="fixture__badge"
          src={awayTeam.crestUrl ? awayTeam.crestUrl : defaultBadge}
          alt="badge"
        />
      </div>
      <div className="fixture__team fixture__team--away">
        <p className="fixture__team-name">{awayTeam.shortName}</p>
      </div>
    </div>
  );
};

export default Fixture;
