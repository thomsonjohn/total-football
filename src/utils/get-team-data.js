import teams from "../data/teams";

const getTeamData = match => {
  const result = teams.teams.find(obj => {
    return obj.id === match.id;
  });
  return result;
};

export default getTeamData;
