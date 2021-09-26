import StatisticsActionTypes from "./statistics.actionTypes";

const StatisticsActions = {
  setStatistics: (payload) => ({
    type: StatisticsActionTypes.SET_STATISTICS,
    payload,
  }),
};

export default StatisticsActions;
