import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/actions";
import PropTypes from "prop-types";

import "./ControlPanel.css";

import eplLogo from "../../assets/img/epl.png";
import bundesliga from "../../assets/img/bundesliga.png";
import calcioA from "../../assets/img/calcio-a.png";
import ligue1 from "../../assets/img/ligue-1.png";
import laLiga from "../../assets/img/la-liga.png";
import ucl from "../../assets/img/ucl.png";

class ControlPanel extends Component {
  handleMonthChange(event) {
    this.props.actions.changeMonth(event.target.value);
  }

  render() {
    const { leagueCode, leagues, monthsInLeague } = this.props.matches;

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
    } else if (leagueCode == 2001) {
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
          <select>
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
          <select onChange={event => this.handleMonthChange(event)}>
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

ControlPanel.propTypes = {
  actions: PropTypes.object,
  matches: PropTypes.object
};

function mapStateToProps(state) {
  return {
    matches: state.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlPanel);
