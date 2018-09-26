import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import moment from "moment";
import {
  selectLeague,
  fetchMatchesIfNeeded,
  invalidateLeague,
  selectMonth
} from "../actions/actions";
import Header from "../components/Header/Header";
import Main from "./Main";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import Footer from "../components/Footer/Footer";
import Error from "../components/Error/Error";

import "../components/App/App.css";

class AsyncApp extends Component {
  constructor(props) {
    super(props);
    this.handleLeagueChange = this.handleLeagueChange.bind(this);
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
  }

  componentDidMount() {
    const { dispatch, selectedLeague, selectedMonth } = this.props;
    dispatch(fetchMatchesIfNeeded(selectedLeague, selectedMonth));
  }

  handleLeagueChange(nextLeague) {
    this.props.dispatch(invalidateLeague(nextLeague));
    this.props.dispatch(selectLeague(nextLeague));
    this.props.dispatch(
      fetchMatchesIfNeeded(
        nextLeague,
        this.props.selectedMonth,
        this.props.leagueData
      )
    );
  }

  handleMonthChange(nextMonth) {
    this.props.dispatch(selectMonth(nextMonth));
    this.props.dispatch(
      fetchMatchesIfNeeded(
        this.props.selectedLeague,
        nextMonth,
        this.props.leagueData
      )
    );
  }

  handleRefreshClick(e) {
    e.preventDefault();

    const { dispatch, selectedLeague, selectedMonth } = this.props;
    dispatch(invalidateLeague(selectedLeague));
    dispatch(fetchMatchesIfNeeded(selectedLeague, selectedMonth));
  }

  render() {
    const {
      selectedLeague,
      selectedMonth,
      leagueData,
      isFetching,
      lastUpdated,
      monthsInLeague,
      matchdaysToShow,
      error
    } = this.props;
    return (
      <div>
        <Header />
        <p>
          {lastUpdated && (
            <span className="last-updated">
              Last updated at {moment(lastUpdated).fromNow()}.
            </span>
          )}
        </p>
        {isFetching && !leagueData.matches && !error && <LoadingSpinner />}
        {error && <Error message={error} />}
        {!isFetching && !leagueData.matches && <h2>Empty.</h2>}
        {matchdaysToShow.length > 0 && (
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Main
              selectedLeague={selectedLeague}
              selectedMonth={selectedMonth}
              onLeagueChange={this.handleLeagueChange}
              onMonthChange={this.handleMonthChange}
              monthsInLeague={monthsInLeague}
              matchdaysToShow={matchdaysToShow}
            />
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

AsyncApp.propTypes = {
  selectedMonth: PropTypes.string.isRequired,
  selectedLeague: PropTypes.string.isRequired,
  leagueData: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
  matchdaysToShow: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  const { selectedMonth, selectedLeague, matchesByLeague, error } = state;
  const {
    isFetching,
    lastUpdated,
    leagueData,
    monthsInLeague,
    matchdaysToShow
  } = matchesByLeague[selectedLeague] || {
    isFetching: true,
    leagueData: {},
    monthsInLeague: [],
    matchdaysToShow: []
  };

  return {
    selectedMonth,
    selectedLeague,
    leagueData,
    monthsInLeague,
    isFetching,
    lastUpdated,
    matchdaysToShow,
    error
  };
}

export default connect(mapStateToProps)(AsyncApp);
