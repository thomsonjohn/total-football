import fetch from "cross-fetch";

import {
  getMatchdaysToShow,
  getMonthsInLeague,
  sortMatchesByMonth
} from "../utils/get-football-data";

const API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;

export const REQUEST_MATCHES = "REQUEST_MATCHES";
export const RECEIVE_MATCHES = "RECEIVE_MATCHES";
export const SELECT_LEAGUE = "SELECT_LEAGUE";
export const SELECT_MONTH = "SELECT_MONTH";
export const INVALIDATE_LEAGUE = "INVALIDATE_LEAGUE";
export const UPDATE_MATCHES_TO_SHOW = "UPDATE_MATCHES_TO_SHOW";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const AUTH_STATE_CHANGE = "AUTH_STATE_CHANGE";
export const ADD_USER_TO_STATE = "ADD_USER_TO_STATE";

export function addUserToState(user) {
  return {
    type: ADD_USER_TO_STATE,
    user
  };
}

export function authStateChange(user) {
  return {
    type: AUTH_STATE_CHANGE,
    user
  };
}

export function fetchFailure(error) {
  return {
    type: FETCH_FAILURE,
    error
  };
}

export function updateMatchesToShow(leagueCode, matches) {
  return {
    type: UPDATE_MATCHES_TO_SHOW,
    matches,
    leagueCode
  };
}

export function selectLeague(leagueCode) {
  return {
    type: SELECT_LEAGUE,
    leagueCode
  };
}

export function selectMonth(month) {
  return {
    type: SELECT_MONTH,
    month
  };
}

export function invalidateLeague(leagueCode) {
  return {
    type: INVALIDATE_LEAGUE,
    leagueCode
  };
}

function requestMatches(leagueCode) {
  return {
    type: REQUEST_MATCHES,
    leagueCode
  };
}

function receiveMatches(
  leagueCode,
  json,
  matchesByMonth,
  monthsInLeague,
  matchdaysToShow
) {
  return {
    type: RECEIVE_MATCHES,
    leagueCode,
    leagueData: json,
    matchesByMonth,
    monthsInLeague,
    matchdaysToShow,
    receivedAt: Date.now()
  };
}

function fetchMatches(leagueCode, selectedMonth) {
  return dispatch => {
    dispatch(requestMatches(leagueCode));
    return fetch(
      `https://api.football-data.org/v2/competitions/${leagueCode}/matches`,
      {
        method: "GET",
        headers: {
          "X-Auth-Token": API_KEY,
          "Content-Type": "text/plain"
        },
        cache: "default"
      }
    )
      .then(response => response.json())
      .then(json => {
        const monthsInLeague = getMonthsInLeague(json);
        const matchesByMonth = sortMatchesByMonth(json);
        const matchesToShow = getMatchdaysToShow(json, selectedMonth);
        dispatch(
          receiveMatches(
            leagueCode,
            json,
            matchesByMonth,
            monthsInLeague,
            matchesToShow,
            selectedMonth
          )
        );
        dispatch(updateMatchesToShowIfNeeded(json, selectedMonth, leagueCode));
      })
      .catch(err => {
        console.log(err);
        dispatch(fetchFailure(err.message));
      });
  };
}

function shouldFetchLeagues(state, leagueCode) {
  const matches = state.matchesByLeague[leagueCode];
  if (!matches) {
    return true;
  } else if (matches.isFetching) {
    return false;
  } else {
    return matches.didInvalidate;
  }
}

export function updateMatchesToShowIfNeeded(leagueData, month, leagueCode) {
  const matchesToShow = getMatchdaysToShow(leagueData, month);
  return dispatch => {
    return dispatch(updateMatchesToShow(leagueCode, matchesToShow));
  };
}

export function fetchMatchesIfNeeded(leagueCode, selectedMonth, leagueData) {
  return (dispatch, getState) => {
    if (shouldFetchLeagues(getState(), leagueCode)) {
      return dispatch(fetchMatches(leagueCode, selectedMonth));
    } else {
      return dispatch(
        updateMatchesToShowIfNeeded(leagueData, selectedMonth, leagueCode)
      );
    }
  };
}
