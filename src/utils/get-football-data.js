const API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;

export const getLeagueData = code => {
  const result = fetch(
    `https://api.football-data.org/v2/competitions/${code}`,
    {
      method: "GET",
      headers: {
        "X-Auth-Token": API_KEY,
        "Content-Type": "text/plain"
      },
      cache: "default"
    }
  )
    .then(res => res.json())
    .then(data => {
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
      ).then(res => res.json());
    })
    .catch(err => console.log("Failed to get league data, son", err));
  return result;
};

export const getMatches = code => {
  const result = fetch(
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
    .then(res => res.json())
    .catch(err => console.log("Failed to get matches, son", err));
  return result;
};
