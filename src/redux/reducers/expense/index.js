import expensesActionTypes from "./expenses.actionTypes";

const initialState = {
  expenses: [],
};

const expensesReducer = (state = initialState, action) => {
  switch (action.type) {
    case expensesActionTypes.SET_EXPENSES:
      return { ...state, expenses: [...action.payload] };
    case expensesActionTypes.ADD_EXPENSE:
      return { ...state, expenses: [action.payload, ...state.expenses] };
    case expensesActionTypes.EDIT_EXPENSE:
      var expenses = state.expenses.map((expense) => {
        if (expense.id === action.payload.id) {
          expense = action.payload;
        }
        return expense;
      });
      return { ...state, expenses: [...expenses] };

    case expensesActionTypes.DELETE_EXPENSE:
      var newExpenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
      return { ...state, expenses: [...newExpenses] };
    default:
      return state;
  }
};

export default expensesReducer;
