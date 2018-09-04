import React, { Component } from "react";
import "./App.css";

import Header from "../Header/Header";
import FixtureList from "../FixtureList/FixtureList";
import LoaderSpinner from "../LoadingSpinner/LoadingSpinner";
import Error from "../Error/Error";

import teams from "../../data/teams";
import { getMatches } from "../../utils/get-football-data";

class App extends Component {
  constructor() {
    super();

    this.state = {
      leagueCode: "2021",
      loading: true,
      fetched: false,
      teams
    };
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
        matchday
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

  render() {
    let content;

    if (this.state.error) {
      content = <Error />;
    } else if (this.state.loading) {
      content = <LoaderSpinner />;
    } else if (!this.state.loading && !this.state.error && this.state.fetched) {
      content = (
        <FixtureList matchday={this.state.matchday} teams={this.state.teams} />
      );
    } else {
      content = <p>Nothing to see here!</p>;
    }

    return (
      <div className="app">
        <Header />
        {content}
      </div>
    );
  }
}

export default App;
