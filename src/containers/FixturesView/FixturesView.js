/*eslint-disable*/

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/actions";
import PropTypes from "prop-types";
import React, { Component } from "react";
import FixtureList from "../../components/FixtureList/FixtureList";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import "./FixtureView.css";

class FixturesView extends Component {
  componentWillMount() {
    this.props.actions.fetchMatches();
  }
  renderData() {
    return (
      <div>
        {this.props.matches.matchdays.data.map((matchday, index) => {
          if (matchday.matchday === this.props.matches.currentMatchday) {
            return (
              <FixtureList
                key={index}
                matchday={matchday.matches}
                teams={this.props.matches.teams}
                leagueCode={this.props.matches.leagueCode}
                matchdayId={this.props.matches.currentMatchday}
              />
            );
          }
        })}
      </div>
    );
  }

  render() {
    const { error, loading } = this.props.matches;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <LoadingSpinner />;
    }
    return (
      <div className="fixture-view">
        {this.props.matches.matchdays ? (
          this.renderData()
        ) : (
          <div className="">No data</div>
        )}
      </div>
    );
  }
}

FixturesView.propTypes = {
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
)(FixturesView);
