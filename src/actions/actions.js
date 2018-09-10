import * as types from "./actionTypes";
import moment from "moment";

const API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;

const url = "https://api.football-data.org/v2/competitions/2021/matches";
let arrayOfMatchdays = [];
let matchdays = [];
// let months = [];

export function fetchMatches() {
  return dispatch => {
    dispatch(types.fetchMatchesBegin());
    return fetch(url, {
      method: "GET",
      headers: {
        "X-Auth-Token": API_KEY,
        "Content-Type": "text/plain"
      },
      cache: "default"
    })
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(types.fetchMatchesSuccess(json));
        dispatch(types.sortMatchesIntoGameweeks(sortData(json)));
        return json.matches;
      })
      .catch(error => dispatch(types.fetchMatchesFailure(error)));
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
