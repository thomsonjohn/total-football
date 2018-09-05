import React from "react";

import "./LeaguePos.css";

import badge from "../../assets/img/shield.png";

const LeaguePos = props => {
  const { team, index } = props;
  return (
    <div className="league-pos">
      <div className="league-pos__team">
        <div className="league-pos__rank">
          <p>{index}</p>
        </div>
        <div className="league-pos__badge">
          <img
            className="league-table-badge-img"
            src={team.team.crestUrl ? team.team.crestUrl : badge}
            alt="badge"
          />
        </div>
        <div className="league-pos__name">
          <p>{team.team.name}</p>
        </div>
      </div>
      <div className="league-pos__stat">
        <p>{team.playedGames}</p>
      </div>
      <div className="league-pos__stat">
        <p>
          {team.won}-{team.draw}-{team.lost}
        </p>
      </div>
      <div className="league-pos__stat">
        <p>
          {team.goalsFor}:{team.goalsAgainst}
        </p>
      </div>
      <div className="league-pos__stat">
        <p>{team.goalDifference}</p>
      </div>
      <div className="league-pos__pts">
        <p>{team.points}</p>
      </div>
    </div>
  );
};

export default LeaguePos;
