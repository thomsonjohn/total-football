import initialState from "./initialState";

import {
  FETCH_MATCHES_BEGIN,
  FETCH_MATCHES_SUCCESS,
  FETCH_MATCHES_FAILURE,
  SORT_MATCHES_INTO_GAMEWEEKS,
  GET_MONTHS_IN_LEAGUE,
  CHANGE_MONTH
} from "../actions/actionTypes";

export default function matchReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MATCHES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_MATCHES_SUCCESS:
      return {
        ...state,
        loading: false,
        matches: action.payload.matches,
        currentMatchday:
          action.payload.matches.matches[0].season.currentMatchday
      };

    case FETCH_MATCHES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        matches: {}
      };

    case SORT_MATCHES_INTO_GAMEWEEKS:
      return {
        ...state,
        matchdays: action.payload.data
      };

    case GET_MONTHS_IN_LEAGUE:
      return {
        ...state,
        monthsInLeague: action.payload.data
      };

    case CHANGE_MONTH:
      return {
        ...state,
        selectedMatchday: action.payload.month
      };

    default:
      return state;
  }
}
