import React from "react";

import "./ControlPanel.css";

import eplLogo from "../../assets/img/epl.png";

const ControlPanel = props => {
  const { matchOptions, handleMatchesChange } = props;
  return (
    <section className="control-panel">
      <div className="control-panel__logo-container">
        <img className="control-panel__logo" src={eplLogo} alt="league logo" />
      </div>
      <form className="control-panel__form">
        <label>League:</label>
        <select disabled>
          <option>More leagues coming soon...</option>
          <option>Premier League (ENG)</option>
          <option>Bundesliga (GER)</option>
          <option>Calcio A (ITA)</option>
          <option>La Liga (SPA)</option>
          <option>Ligue 1 (FRA)</option>
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
