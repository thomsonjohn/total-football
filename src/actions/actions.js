import * as types from "./actionTypes";
import moment from "moment";

const API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;

const url = "https://api.football-data.org/v2/competitions/2021/matches";
let arrayOfMatchdays = [];
let matchdays = [];
let months = [];

export function fetchMatches(code, selectedMonth) {
  return dispatch => {
    dispatch(types.fetchMatchesBegin());
    return fetch(
      `https://api.football-data.org/v2/competitions/${code}/matches`,
      {
        method: "GET",
        headers: {
          "X-Auth-Token": API_KEY,
          "Content-Type": "text/plain"
        },
        cache: "default"
      }
    )
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(types.fetchMatchesSuccess(json));
        dispatch(types.sortMatchesIntoGameweeks(sortData(json)));
        dispatch(types.getMonthsInLeague(getMonthsInLeague(json)));
        return json.matches;
      })
      .catch(error => dispatch(types.fetchMatchesFailure(error)));
  };
}

export function changeMonth(month) {
  return dispatch => {
    dispatch(types.changeMonth(month));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

function sortData(data) {
  matchdays = [];
  arrayOfMatchdays = [];
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
  return matchdays;
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
  });
  return months;
}
