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
  renderData() {
    if (this.props.matches.selectedMatchday !== "current") {
      this.props.matches.matchdays.map((day, index) => {
        if (day.month === this.props.matches.selectedMatchday.month) {
          console.log("try to change month");
          return (
            <FixtureList
              key={index}
              matchday={day.matches}
              matchdayId={day.matchday}
              teams={this.props.matches.teams}
              leagueCode={this.props.matches.leagueCode}
            />
          );
        }
      });
    } else {
      console.log("try to go current");
      return (
        <div>
          {this.props.matches.matchdays.map((matchday, index) => {
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
  }

  render() {
    const {
      error,
      loading,
      selectedMatchday,
      currentMatchday,
      matchdays,
      teams,
      leagueCode
    } = this.props.matches;

    let content;

    if (matchdays && selectedMatchday === "current") {
      matchdays.map((matchday, index) => {
        matchday.matchday === currentMatchday
          ? (content = (
              <FixtureList
                key={index}
                matchday={matchday.matches}
                team={teams}
                leagueCode={leagueCode}
                matchdayId={currentMatchday}
              />
            ))
          : null;
      });
    }

    console.log(content);

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
