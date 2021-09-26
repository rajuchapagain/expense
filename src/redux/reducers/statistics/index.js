import StatisticsActionTypes from "./statistics.actionTypes";

const initialState = {
  expenses: [],
};

const statisticsReducer = (state = initialState, action) => {
  switch (action.type) {
    case StatisticsActionTypes.SET_STATISTICS:
      return { ...state, expenses: [...action.payload] };
    default:
      return state;
  }
};

export default statisticsReducer;
