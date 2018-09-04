import React, { Component } from "react";
import "./App.css";

import Header from "../Header/Header";
import LoaderSpinner from "../LoadingSpinner/LoadingSpinner";
import FixtureView from "../FixtureView/FixtureView";
import ControlPanel from "../ControlPanel/ControlPanel";
import Error from "../Error/Error";

import teams from "../../data/teams";
import { getMatches } from "../../utils/get-football-data";
import { matchdayByMonth, monthsInLeague } from "../../utils/matchday-by-month";

class App extends Component {
  constructor() {
    super();

    this.state = {
      leagueCode: "2021",
      loading: true,
      fetched: false,
      teams,
      selectedMatchday: "current"
    };

    this.handleMatchesChange = this.handleMatchesChange.bind(this);
  }

  componentWillMount() {
    const success = result => {
      const matchday = [];
      result.matches.map(match => {
        if (match.matchday === match.season.currentMatchday) {
          matchday.push(match);
        }
        return matchday;
      });
      this.setState({
        matches: result,
        loading: false,
        fetched: true,
        matchday,
        currentMatchday: result.matches[0].season.currentMatchday,
        matchdays: matchdayByMonth(result),
        monthsInLeague: monthsInLeague(result)
      });
    };
    const failure = result => {
      this.setState({
        loading: false,
        error: true
      });
    };
    getMatches(this.state.leagueCode).then(success, failure);
  }

  handleMatchesChange = event => {
    this.setState({
      selectedMatchday: event.target.value
    });
  };

  render() {
    let content;

    if (this.state.error) {
      content = <Error />;
    } else if (this.state.loading) {
      content = <LoaderSpinner />;
    } else if (!this.state.loading && !this.state.error && this.state.fetched) {
      content = (
        <FixtureView
          matchday={this.state.matchday}
          matchdays={this.state.matchdays}
          selectedMatchday={this.state.selectedMatchday}
          teams={teams}
          currentMatchday={this.state.currentMatchday}
        />
      );
    } else {
      content = <p>Nothing to see here!</p>;
    }

    return (
      <div className="app">
        <Header />
        {this.state.monthsInLeague && (
          <ControlPanel
            matchOptions={this.state.monthsInLeague}
            handleMatchesChange={this.handleMatchesChange}
          />
        )}
        {content}
      </div>
    );
  }
}

export default App;
