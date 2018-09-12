import fetch from "cross-fetch";

const API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;

export const REQUEST_MATCHES = "REQUEST_MATCHES";
export const RECEIVE_MATCHES = "RECEIVE_MATCHES";
export const SELECT_LEAGUE = "SELECT_LEAGUE";
export const INVALIDATE_LEAGUE = "INVALIDATE_LEAGUE";

export function selectLeague(leagueCode) {
  return {
    type: SELECT_LEAGUE,
    leagueCode
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

function receiveMatches(leagueCode, json) {
  return {
    type: RECEIVE_MATCHES,
    leagueCode,
    matches: json,
    receivedAt: Date.now()
  };
}

function fetchMatches(leagueCode) {
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
      .then(json => dispatch(receiveMatches(leagueCode, json)));
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

export function fetchMatchesIfNeeded(leagueCode) {
  return (dispatch, getState) => {
    if (shouldFetchLeagues(getState(), leagueCode)) {
      return dispatch(fetchMatches(leagueCode));
    }
  };
}
