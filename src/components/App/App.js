import React, { Component } from "react";
import "./App.css";

import Header from "../Header/Header";
import FixtureList from "../FixtureList/FixtureList";

import matchday from "../../data/matches";

class App extends Component {
  constructor() {
    super();

    this.state = {
      matchday
    };
  }

  render() {
    return (
      <div className="app">
        <Header />
        <FixtureList matchday={this.state.matchday} />
      </div>
    );
  }
}

export default App;
