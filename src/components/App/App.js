import React, { Component } from "react";
import "./App.css";

import Header from "../Header/Header";
import FixtureList from "../FixtureList/FixtureList";

import matchday from "../../data/matches";
import teams from "../../data/teams";

class App extends Component {
  constructor() {
    super();

    this.state = {
      matchday,
      teams
    };
  }

  render() {
    return (
      <div className="app">
        <Header />
        <FixtureList matchday={this.state.matchday} teams={this.state.teams} />
      </div>
    );
  }
}

export default App;
