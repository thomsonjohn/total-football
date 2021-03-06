import React, { Component } from "react";
import moment from "moment";

import "./Fixture.css";

import defaultBadge from "../../assets/img/shield.png";

import { getTeamData } from "../../utils/get-team-data";

export default class Fixture extends Component {
  render() {
    const { match, selectedLeague } = this.props;
    const homeTeam = getTeamData(match.homeTeam, selectedLeague);
    const awayTeam = getTeamData(match.awayTeam, selectedLeague);
    const kickOff = moment(match.utcDate).calendar();

    return (
      <div className="fixture-container">
        {homeTeam.shortName && (
          <div>
            <div className="fixture">
              <div className="fixture__team fixture__team--home">
                <p className="fixture__team-name">
                  {homeTeam.shortName ? homeTeam.shortName : homeTeam.name}
                </p>
              </div>
              <div className="fixture__badge-container">
                <img
                  className="fixture__badge"
                  src={homeTeam.crestUrl ? homeTeam.crestUrl : defaultBadge}
                  alt="badge"
                />
              </div>
              <div className="fixture__score">
                <div className="fixture__goals">
                  <p>
                    <span>
                      {match.score.fullTime.homeTeam
                        ? match.score.fullTime.homeTeam
                        : 0}
                    </span>
                    :
                    <span>
                      {match.score.fullTime.awayTeam
                        ? match.score.fullTime.awayTeam
                        : 0}
                    </span>
                  </p>
                </div>
              </div>
              <div className="fixture__badge-container">
                <img
                  className="fixture__badge"
                  src={awayTeam.crestUrl ? awayTeam.crestUrl : defaultBadge}
                  alt="badge"
                />
              </div>
              <div className="fixture__team fixture__team--away">
                <p className="fixture__team-name">
                  {awayTeam.shortName ? awayTeam.shortName : awayTeam.name}
                </p>
              </div>
            </div>
            <div className="fixture-date">{kickOff}</div>
          </div>
        )}
      </div>
    );
  }
}
