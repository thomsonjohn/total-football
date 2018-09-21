import moment from "moment";

let months;
let arrayOfMatchdays = [];
let matchdays = [];
let monthlyMatches = [];
let matchdaysToShow = [];

export function getMatchdaysToShow(data, selectedMonth) {
  matchdaysToShow = [];
  if (selectedMonth !== "current") {
    monthlyMatches.map(month => {
      if (month.month === selectedMonth) {
        matchdaysToShow = month.matchdays;
      }
      return matchdaysToShow;
    });
  } else {
    matchdays.map(matchday => {
      if (matchday.matchday === data.matches[0].season.currentMatchday) {
        matchdaysToShow.push(matchday);
      }
      return matchdaysToShow;
    });
  }
  return matchdaysToShow;
}

export function getMonthsInLeague(data) {
  months = [];
  data.matches.map(match => {
    const month = moment(match.utcDate).format("MMMM");
    var foundMonth = months.some(el => {
      return el === month;
    });
    if (!foundMonth) {
      months.push(month);
    }
    return months;
  });
  return months;
}

export function sortMatchesByMonth(data) {
  matchdays = [];
  arrayOfMatchdays = [];
  monthlyMatches = [];
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
  matchdays.map(matchday => {
    var foundMonth = monthlyMatches.some(el => {
      return el.month === matchday.month;
    });
    if (!foundMonth) {
      monthlyMatches.push({ month: matchday.month, matchdays: [matchday] });
    } else {
      monthlyMatches.map(month => {
        if (month.month === matchday.month) {
          month.matchdays.push(matchday);
        }
        return monthlyMatches;
      });
    }
    return monthlyMatches;
  });
  return monthlyMatches;
}
