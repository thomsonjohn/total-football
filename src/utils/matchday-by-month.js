import moment from "moment";

const arrayOfMatchdays = [];
const matchdays = [];
const months = [];

export const matchdayByMonth = data => {
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
      });
    }
  });
  return matchdays;
};

export const monthsInLeague = data => {
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
};
