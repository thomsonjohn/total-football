import React, { Component } from "react";
// import PropTypes from 'prop-types'

import "./ControlPanel.css";

import eplLogo from "../../assets/img/epl.png";
import bundesliga from "../../assets/img/bundesliga.png";
import calcioA from "../../assets/img/calcio-a.png";
import ligue1 from "../../assets/img/ligue-1.png";
import laLiga from "../../assets/img/la-liga.png";
import ucl from "../../assets/img/ucl.png";

import leagues from "../../data/leagues";

export default class ControlPanel extends Component {
  render() {
    const {
      selectedLeague,
      selectedMonth,
      onLeagueChange,
      monthsInLeague,
      onMonthChange
    } = this.props;
    let leagueLogo;

    if (selectedLeague === "2021") {
      leagueLogo = eplLogo;
    } else if (selectedLeague === "2002") {
      leagueLogo = bundesliga;
    } else if (selectedLeague === "2019") {
      leagueLogo = calcioA;
    } else if (selectedLeague === "2014") {
      leagueLogo = laLiga;
    } else if (selectedLeague === "2015") {
      leagueLogo = ligue1;
    } else if (selectedLeague === "2001") {
      leagueLogo = ucl;
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
          <select onChange={e => onLeagueChange(e.target.value)}>
            {leagues &&
              leagues.map((league, index) => {
                return (
                  <option key={index} value={league.code}>{`${league.name} (${
                    league.country
                  })`}</option>
                );
              })}
          </select>
          <label>Matches:</label>
          <select
            value={selectedMonth}
            onChange={e => onMonthChange(e.target.value)}
          >
            <option value="current">Current</option>
            {monthsInLeague &&
              monthsInLeague.map((option, index) => {
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
  }
}
