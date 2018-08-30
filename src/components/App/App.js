import React, { Component } from "react";
import "./App.css";

import Header from "../Header/Header";
import FixtureList from "../FixtureList/FixtureList";
import LoaderSpinner from "../LoadingSpinner/LoadingSpinner";
import Error from "../Error/Error";

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
    const result = fetch(`https://api.football-data.org/v2/competitions/2021`, {
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
          `https://api.football-data.org/v2/competitions/2021/matches?matchday=${currentMatchday}`,
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
      .then(result => {
        this.setState({
          matchday: result,
          loading: false,
          fetched: true,
          error: false
        });
      })
      .catch(err => {
        console.log("Fucking request failed", err);
        this.setState({
          error: true,
          fetched: false,
          loading: false
        });
      });
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
