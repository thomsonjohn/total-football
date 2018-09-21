import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Matches extends Component {
  render() {
    return (
      <ul>
        {this.props.leagueData.matches.map((match, i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    );
  }
}

Matches.propTypes = {
  leagueData: PropTypes.object.isRequired
};
