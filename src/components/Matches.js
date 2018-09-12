import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Matches extends Component {
  render() {
    return (
      <ul>
        {this.props.matches.map((match, i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    );
  }
}

Matches.propTypes = {
  matches: PropTypes.array.isRequired
};
