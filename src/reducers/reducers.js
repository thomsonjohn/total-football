import { combineReducers } from "redux";
import {
  SELECT_LEAGUE,
  INVALIDATE_LEAGUE,
  REQUEST_MATCHES,
  RECEIVE_MATCHES
} from "../actions/actions";

function selectedLeague(state = "2021", action) {
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
    items: []
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
        items: action.matches,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}

function matchesByLeague(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_LEAGUE:
    case RECEIVE_MATCHES:
    case REQUEST_MATCHES:
      return Object.assign({}, state, {
        [action.leagueCode]: matches(state[action.leagueCode], action)
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  matchesByLeague,
  selectedLeague
});

export default rootReducer;
