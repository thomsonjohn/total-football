/*eslint-disable*/

import teams from "../data/teams";

export const getTeamData = (match, league) => {
  const leagueData = teams.find(obj => {
    return obj.competition.id == league;
  });
  const teamData = leagueData.teams.find(obj => {
    return obj.id === match.id;
  });
  return teamData;
};
