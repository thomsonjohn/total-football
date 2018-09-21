import React, { Component } from "react";
import PropTypes from "prop-types";

import "./FixtureList.css";

import Fixture from "../Fixture/Fixture";

export default class FixtureList extends Component {
  render() {
    const { matchday, selectedLeague } = this.props;
    return (
      <div className="fixture-list">
        <h2 className="fixture-list-head">Matchday {matchday.matchday}</h2>
        {matchday &&
          matchday.matches.map((match, i) => {
            return (
              <Fixture key={i} match={match} selectedLeague={selectedLeague} />
            );
          })}
      </div>
    );
  }
}

FixtureList.propTypes = {
  matchday: PropTypes.object.isRequired,
  selectedLeague: PropTypes.string.isRequired
};
