import { combineReducers } from "redux";
import {
  SELECT_MONTH,
  SELECT_LEAGUE,
  INVALIDATE_LEAGUE,
  REQUEST_MATCHES,
  RECEIVE_MATCHES,
  UPDATE_MATCHES_TO_SHOW,
  FETCH_FAILURE,
  AUTH_STATE_CHANGE
} from "../actions/actions";

export function isSignedIn(state = false, action) {
  switch (action.type) {
    case AUTH_STATE_CHANGE:
      return !!action.user;
    default:
      return state;
  }
}

export function error(state = null, action) {
  switch (action.type) {
    case FETCH_FAILURE:
      return action.error;
    default:
      return state;
  }
}

export function selectedMonth(state = "current", action) {
  switch (action.type) {
    case SELECT_MONTH:
      return action.month;
    default:
      return state;
  }
}

export function selectedLeague(state = "2021", action) {
  switch (action.type) {
    case SELECT_LEAGUE:
      console.log(action);
      return action.leagueCode;
    default:
      return state;
  }
}

function matches(
  state = {
    isFetching: false,
    didInvalidate: false,
    leagueData: {},
    matchdaysToShow: []
  },
  action
) {
  switch (action.type) {
    case INVALIDATE_LEAGUE:
      return Object.assign({}, state, {
        didInvalidate: true
      });
    case REQUEST_MATCHES:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_MATCHES:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        leagueData: action.leagueData,
        lastUpdated: action.receivedAt,
        matchesByMonth: action.matchesByMonth,
        currentMatchday: action.leagueData.matches[0].season.currentMatchday,
        monthsInLeague: action.monthsInLeague,
        matchdaysToShow: action.matchdaysToShow
      });
    case UPDATE_MATCHES_TO_SHOW:
      return Object.assign({}, state, {
        matchdaysToShow: action.matches
      });
    default:
      return state;
  }
}

export function matchesByLeague(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_LEAGUE:
    case RECEIVE_MATCHES:
    case REQUEST_MATCHES:
    case UPDATE_MATCHES_TO_SHOW:
      return Object.assign({}, state, {
        [action.leagueCode]: matches(state[action.leagueCode], action)
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  matchesByLeague,
  selectedLeague,
  selectedMonth,
  error,
  isSignedIn
});

export default rootReducer;
