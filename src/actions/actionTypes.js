export const FETCH_MATCHES_BEGIN = "FETCH_MATCHES_BEGIN";
export const FETCH_MATCHES_SUCCESS = "FETCH_MATCHES_SUCCESS";
export const FETCH_MATCHES_FAILURE = "FETCH_MATCHES_FAILURE";
export const SORT_MATCHES_INTO_GAMEWEEKS = "SORT_MATCHES_INTO_GAMEWEEKS";

export const fetchMatchesBegin = () => ({
  type: FETCH_MATCHES_BEGIN
});

export const fetchMatchesSuccess = matches => ({
  type: FETCH_MATCHES_SUCCESS,
  payload: { matches }
});

export const fetchMatchesFailure = error => ({
  type: FETCH_MATCHES_FAILURE,
  payload: { error }
});

export const sortMatchesIntoGameweeks = data => ({
  type: SORT_MATCHES_INTO_GAMEWEEKS,
  payload: { data }
});
