import ExpensesActionTypes from "./expenses.actionTypes";

const ExpenseActions = {
  setExpenses: (payload) => ({
    type: ExpensesActionTypes.SET_EXPENSES,
    payload,
  }),
  addExpense: (payload) => ({
    type: ExpensesActionTypes.ADD_EXPENSE,
    payload,
  }),
  editExpense: (payload) => ({
    type: ExpensesActionTypes.EDIT_EXPENSE,
    payload,
  }),
  deleteExpense: (payload) => ({
    type: ExpensesActionTypes.DELETE_EXPENSE,
    payload,
  }),
};

export default ExpenseActions;
