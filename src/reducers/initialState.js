import leagues from "../data/leagues";
import teams from "../data/teams";

export default {
  matches: {},
  currentMatchday: 0,
  matchday: [],
  loading: false,
  fetched: false,
  error: false,
  teams,
  leagues,
  leagueCode: 2021
};
