import React from "react";

import "./ControlPanel.css";

import eplLogo from "../../assets/img/epl.png";
import bundesliga from "../../assets/img/bundesliga.png";
import calcioA from "../../assets/img/calcio-a.png";
import ligue1 from "../../assets/img/ligue-1.png";
import laLiga from "../../assets/img/la-liga.png";

const ControlPanel = props => {
  const {
    leagueCode,
    leagueOptions,
    matchOptions,
    handleLeagueChange,
    handleMatchesChange
  } = props;

  let leagueLogo;

  if (leagueCode == 2021) {
    leagueLogo = eplLogo;
  } else if (leagueCode == 2002) {
    leagueLogo = bundesliga;
  } else if (leagueCode == 2019) {
    leagueLogo = calcioA;
  } else if (leagueCode == 2014) {
    leagueLogo = laLiga;
  } else if (leagueCode == 2015) {
    leagueLogo = ligue1;
  } else {
    leagueLogo = eplLogo;
  }

  return (
    <section className="control-panel">
      <div className="control-panel__logo-container">
        <img
          className="control-panel__logo"
          src={leagueLogo}
          alt="league logo"
        />
      </div>
      <form className="control-panel__form">
        <label>League:</label>
        <select onChange={handleLeagueChange}>
          {leagueOptions.map((league, index) => {
            return (
              <option key={index} value={league.code}>{`${league.name} (${
                league.country
              })`}</option>
            );
          })}
        </select>
        <label>Matches:</label>
        <select onChange={handleMatchesChange}>
          <option value="current">Current</option>
          {matchOptions.map((option, index) => {
            return (
              <option value={option} key={index}>
                {option}
              </option>
            );
          })}
        </select>
      </form>
    </section>
  );
};

export default ControlPanel;
