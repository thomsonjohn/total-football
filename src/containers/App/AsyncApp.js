import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import firebase from "firebase";
import {
  selectLeague,
  fetchMatchesIfNeeded,
  invalidateLeague,
  selectMonth,
  authStateChange
} from "../../actions/actions";
import Header from "../../components/Header/Header";
import Main from "../Main";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Footer from "../../components/Footer/Footer";
import Error from "../../components/Error/Error";

import defaultProfilePic from "../../assets/img/user.png";

import "./App.css";

firebase.initializeApp({
  apiKey: "AIzaSyCwNzYK-dqakMMLvZfWjAT9EkFjLkjjanc",
  authDomain: "total-football-90b6f.firebaseapp.com",
  databaseURL: "https://total-football-90b6f.firebaseio.com"
});

const database = firebase.database();

class AsyncApp extends Component {
  constructor(props) {
    super(props);
    this.handleLeagueChange = this.handleLeagueChange.bind(this);
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
  }

  componentDidMount() {
    const { dispatch, selectedLeague, selectedMonth } = this.props;
    firebase.auth().onAuthStateChanged(user => {
      dispatch(authStateChange(user));
      if (user) {
        console.log("writing to database with data" + user.displayName);
        firebase
          .database()
          .ref("users/" + user.uid)
          .set({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photo: user.photoURL,
            provider: user.providerData[0].providerId
          });
      }
    });
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
      // lastUpdated,
      monthsInLeague,
      matchdaysToShow,
      error,
      isSignedIn
    } = this.props;

    const profilePic = isSignedIn
      ? firebase.auth().currentUser.photoURL
      : defaultProfilePic;

    const usersFirstName = isSignedIn
      ? firebase
          .auth()
          .currentUser.displayName.split(" ")
          .slice(0, -1)
          .join(" ")
      : "";

    return (
      <div className="app">
        <div className="content">
          <Header profilePic={profilePic} name={usersFirstName} />
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
                isSignedIn={isSignedIn}
              />
            </div>
          )}
        </div>
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
  const {
    selectedMonth,
    selectedLeague,
    matchesByLeague,
    error,
    isSignedIn
  } = state;
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
    error,
    isSignedIn
  };
}

export default connect(mapStateToProps)(AsyncApp);
