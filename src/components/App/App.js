import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/actions";
import PropTypes from "prop-types";

import "./App.css";

import Header from "../Header/Header";
import ControlPanel from "../ControlPanel/ControlPanel";
import FixturesView from "../../containers/FixturesView/FixturesView";
import Footer from "../Footer/Footer";

class App extends Component {
  componentWillMount() {
    this.props.actions.fetchMatches(
      this.props.matches.leagueCode,
      this.props.matches.selectedMatchday
    );
  }
  render() {
    return (
      <div className="app">
        <Header />
        <ControlPanel />
        <FixturesView />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
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
)(App);
