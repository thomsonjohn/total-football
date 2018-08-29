import React, { Component } from "react";
import "./App.css";

import Header from "../Header/Header";
import FixtureList from "../FixtureList/FixtureList";

import teams from "../../data/teams";

const API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;

class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      fetched: false,
      teams
    };
  }

  componentWillMount() {
    const result = fetch(`http://api.football-data.org/v2/competitions/2021`, {
      method: "GET",
      headers: {
        "X-Auth-Token": API_KEY,
        "Content-Type": "text/plain"
      },
      cache: "default"
    })
      .then(res => res.json())
      .then(data => {
        const currentMatchday = data.currentSeason.currentMatchday;

        console.log(currentMatchday);

        return fetch(
          `http://api.football-data.org/v2/competitions/2021/matches?matchday=${currentMatchday}`,
          {
            method: "GET",
            headers: {
              "X-Auth-Token": API_KEY,
              "Content-Type": "text/plain"
            },
            cache: "default"
          }
        );
      })
      .then(res => res.json())
      .catch(err => console.log("Fucking request failed", err));

    result.then(r =>
      this.setState({
        matchday: r,
        loading: false,
        fetched: true
      })
    );
  }

  render() {
    return (
      <div className="app">
        <Header />
        {this.state.loading ? (
          <p>loading...</p>
        ) : (
          <FixtureList
            matchday={this.state.matchday}
            teams={this.state.teams}
          />
        )}
      </div>
    );
  }
}

export default App;
