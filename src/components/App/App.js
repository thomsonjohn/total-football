import React, { Component } from "react";
import "./App.css";

import Header from "../Header/Header";
import FixturesView from "../../containers/FixturesView/FixturesView";
import Footer from "../Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <FixturesView />
        <Footer />
      </div>
    );
  }
}

export default App;
