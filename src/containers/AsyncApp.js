import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  selectLeague,
  fetchMatchesIfNeeded,
  invalidateLeague
} from "../actions/actions";
import Header from "../components/Header/Header";
import FixtureView from "../components/FixtureView/FixtureView";
import Picker from "../components/Picker";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import Footer from "../components/Footer/Footer";

import "../components/App/App.css";

class AsyncApp extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
  }

  componentDidMount() {
    const { dispatch, selectedLeague } = this.props;
    dispatch(fetchMatchesIfNeeded(selectedLeague));
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedLeague !== prevProps.selectedLeague) {
      const { dispatch, selectedLeague } = this.props;
      dispatch(fetchMatchesIfNeeded(selectedLeague));
    }
  }

  handleChange(nextLeague) {
    this.props.dispatch(selectLeague(nextLeague));
    this.props.dispatch(fetchMatchesIfNeeded(nextLeague));
  }

  handleRefreshClick(e) {
    e.preventDefault();

    const { dispatch, selectedLeague } = this.props;
    dispatch(invalidateLeague(selectedLeague));
    dispatch(fetchMatchesIfNeeded(selectedLeague));
  }

  render() {
    const {
      selectedLeague,
      leagueData,
      isFetching,
      lastUpdated,
      matchdaysToShow
    } = this.props;
    return (
      <div>
        <Header />
        <Picker
          value={selectedLeague}
          onChange={this.handleChange}
          options={["2021", "2014", "2015"]}
        />
        <p>
          {lastUpdated && (
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
            </span>
          )}
          {!isFetching && (
            <button onClick={this.handleRefreshClick}>Refresh</button>
          )}
        </p>
        {isFetching && !leagueData.matches && <LoadingSpinner />}
        {!isFetching && !leagueData.matches && <h2>Empty.</h2>}
        {matchdaysToShow && (
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <FixtureView
              matchdaysToShow={matchdaysToShow}
              selectedLeague={selectedLeague}
            />
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

AsyncApp.propTypes = {
  selectedLeague: PropTypes.string.isRequired,
  leagueData: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
  matchdaysToShow: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  const { selectedLeague, matchesByLeague } = state;
  const {
    isFetching,
    lastUpdated,
    leagueData,
    matchdaysToShow
  } = matchesByLeague[selectedLeague] || {
    isFetching: true,
    leagueData: {},
    matchdaysToShow: []
  };

  return {
    selectedLeague,
    leagueData,
    isFetching,
    lastUpdated,
    matchdaysToShow
  };
}

export default connect(mapStateToProps)(AsyncApp);
