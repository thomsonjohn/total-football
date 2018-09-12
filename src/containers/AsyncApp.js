import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  selectLeague,
  fetchMatchesIfNeeded,
  invalidateLeague
} from "../actions/actions";
import Picker from "../components/Picker";
import Matches from "../components/Matches";

class AsyncApp extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
  }

  componentDidMount() {
    const { dispatch, selectedLeague } = this.props;
    dispatch(fetchMatchesIfNeeded(selectedLeague));
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedLeague !== prevProps.selectedLeague) {
      const { dispatch, selectedLeague } = this.props;
      dispatch(fetchMatchesIfNeeded(selectedLeague));
    }
  }

  handleChange(nextLeague) {
    this.props.dispatch(selectLeague(nextLeague));
    this.props.dispatch(fetchMatchesIfNeeded(nextLeague));
  }

  handleRefreshClick(e) {
    e.preventDefault();

    const { dispatch, selectedLeague } = this.props;
    dispatch(invalidateLeague(selectedLeague));
    dispatch(fetchMatchesIfNeeded(selectedLeague));
  }

  render() {
    const { selectedLeague, matches, isFetching, lastUpdated } = this.props;
    return (
      <div>
        <Picker
          value={selectedLeague}
          onChange={this.handleChange}
          options={["2021", "2014", "2015"]}
        />
        <p>
          {lastUpdated && (
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
            </span>
          )}
          {!isFetching && (
            <button onClick={this.handleRefreshClick}>Refresh</button>
          )}
        </p>
        {isFetching && matches.length === 0 && <h2>Loading...</h2>}
        {!isFetching && matches.length === 0 && <h2>Empty.</h2>}
        {matches.length > 0 && (
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Matches matches={matches} />
          </div>
        )}
      </div>
    );
  }
}

AsyncApp.propTypes = {
  selectedLeague: PropTypes.string.isRequired,
  matches: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { selectedLeague, matchesByLeague } = state;
  const { isFetching, lastUpdated, items: matches } = matchesByLeague[
    selectedLeague
  ] || {
    isFetching: true,
    items: []
  };

  return {
    selectedLeague,
    matches,
    isFetching,
    lastUpdated
  };
}

export default connect(mapStateToProps)(AsyncApp);
