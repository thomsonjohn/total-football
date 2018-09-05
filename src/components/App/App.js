import React, { Component } from "react";
import "./App.css";

import Header from "../Header/Header";
import LoaderSpinner from "../LoadingSpinner/LoadingSpinner";
import FixtureView from "../FixtureView/FixtureView";
import ControlPanel from "../ControlPanel/ControlPanel";
import Error from "../Error/Error";

import teams from "../../data/teams";
import leagues from "../../data/leagues";
import { getMatches } from "../../utils/get-football-data";
import { matchdayByMonth, monthsInLeague } from "../../utils/matchday-by-month";

class App extends Component {
  constructor() {
    super();

    this.state = {
      leagueCode: 2021,
      loading: true,
      fetched: false,
      leagues,
      teams,
      selectedMatchday: "current"
    };

    this.handleMatchesChange = this.handleMatchesChange.bind(this);
    this.handleLeagueChange = this.handleLeagueChange.bind(this);
    this.fetchMatchDataForLeague = this.fetchMatchDataForLeague.bind(this);
  }

  fetchMatchDataForLeague = code => {
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
    getMatches(code).then(success, failure);
  };

  componentWillMount() {
    this.fetchMatchDataForLeague(this.state.leagueCode);
  }

  handleMatchesChange = event => {
    this.setState({
      selectedMatchday: event.target.value
    });
  };

  handleLeagueChange = event => {
    this.setState({
      loading: true,
      fetched: false,
      leagueCode: event.target.value
    });
    this.fetchMatchDataForLeague(event.target.value);
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
          leagueCode={this.state.leagueCode}
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
            leagueOptions={this.state.leagues}
            matchOptions={this.state.monthsInLeague}
            handleMatchesChange={this.handleMatchesChange}
            handleLeagueChange={this.handleLeagueChange}
            leagueCode={this.state.leagueCode}
          />
        )}
        {content}
      </div>
    );
  }
}

export default App;
