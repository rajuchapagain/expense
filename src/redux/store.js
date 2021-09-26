import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./reducers/authentication";
import expensesReducer from "./reducers/expense";
import statisticsReducer from "./reducers/statistics";
import usersReducer from "./reducers/user";
export default configureStore({
  reducer: {
    expensesReducer: expensesReducer,
    authenticationReducer: authenticationReducer,
    statisticsReducer: statisticsReducer,
    usersReducer: usersReducer,
  },
});
