import React from "react";

import LeaguePos from "../LeaguePos/LeaguePos";

import "./LeagueTable.css";

const LeagueTable = props => {
  const { leagueTable } = props;
  return (
    <div className="league-table">
      <h2 className="league-table-head">Standings</h2>
      <div className="league-table-main">
        <div className="league-pos league-pos-head">
          <div className="league-pos__team">
            <p className="league-pos__team-title">Team</p>
          </div>
          <div className="league-pos__stat">
            <p>P</p>
          </div>
          <div className="league-pos__stat">
            <p>W-D-L</p>
          </div>
          <div className="league-pos__stat">
            <p>Goals</p>
          </div>
          <div className="league-pos__stat">
            <p>GD</p>
          </div>
          <div className="league-pos__pts">
            <p>Pts.</p>
          </div>
        </div>
        {leagueTable.standings[0].table.map((leaguePos, index) => {
          return <LeaguePos key={index} index={index + 1} team={leaguePos} />;
        })}
      </div>
    </div>
  );
};

export default LeagueTable;
