import fetch from "cross-fetch";
import moment from "moment";

let months;
let arrayOfMatchdays = [];
let matchdays = [];
let monthlyMatches = [];
let matchdaysToShow = [];

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
      .then(json => {
        const monthsInLeague = getMonthsInLeague(json);
        const matchesByMonth = sortMatchesByMonth(json);
        const getMatchdaysToShowFunc = getMatchdaysToShow(json, "current");
        dispatch(
          receiveMatches(
            leagueCode,
            json,
            matchesByMonth,
            monthsInLeague,
            getMatchdaysToShowFunc
          )
        );
      });
  };
}

function getMatchdaysToShow(data, selectedMonth) {
  matchdaysToShow = [];
  if (selectedMonth !== "current") {
    monthlyMatches.map(month => {
      if (month.month === selectedMonth) {
        matchdaysToShow.push(month.matchdays);
      }
      return matchdaysToShow;
    });
  } else {
    matchdays.map(matchday => {
      if (matchday.matchday === data.matches[0].season.currentMatchday) {
        matchdaysToShow.push(matchday);
      }
      return matchdaysToShow;
    });
  }
  return matchdaysToShow;
}

function getMonthsInLeague(data) {
  months = [];
  data.matches.map(match => {
    const month = moment(match.utcDate).format("MMMM");
    var foundMonth = months.some(el => {
      return el === month;
    });
    if (!foundMonth) {
      months.push(month);
    }
    return months;
  });
  return months;
}

function sortMatchesByMonth(data) {
  matchdays = [];
  arrayOfMatchdays = [];
  monthlyMatches = [];
  data.matches.map(match => {
    var foundMatchday = arrayOfMatchdays.some(el => {
      return el === match.matchday;
    });
    if (!foundMatchday) {
      arrayOfMatchdays.push(match.matchday);
      matchdays.push({
        matchday: match.matchday,
        month: moment(match.utcDate).format("MMMM"),
        matches: [match]
      });
    } else {
      matchdays.map(day => {
        if (day.matchday === match.matchday) {
          day.matches.push(match);
        }
        return matchdays;
      });
    }
    return matchdays;
  });
  matchdays.map(matchday => {
    var foundMonth = monthlyMatches.some(el => {
      return el.month === matchday.month;
    });
    if (!foundMonth) {
      monthlyMatches.push({ month: matchday.month, matchdays: [matchday] });
    } else {
      monthlyMatches.map(month => {
        if (month.month === matchday.month) {
          month.matchdays.push(matchday);
        }
        return monthlyMatches;
      });
    }
    return monthlyMatches;
  });
  return monthlyMatches;
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
