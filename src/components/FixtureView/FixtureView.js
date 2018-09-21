import React, { Component } from "react";
import PropTypes from "prop-types";

import FixtureList from "../FixtureList/FixtureList";

export default class FixtureView extends Component {
  render() {
    const { matchdaysToShow, selectedLeague } = this.props;
    return (
      <div className="fixture-view">
        {matchdaysToShow.map((matchday, i) => {
          return (
            <FixtureList
              key={i}
              matchday={matchday}
              selectedLeague={selectedLeague}
            />
          );
        })}
      </div>
    );
  }
}

FixtureView.propTypes = {
  matchdaysToShow: PropTypes.array.isRequired,
  selectedLeague: PropTypes.string.isRequired
};
