import axios from "axios";

import {
  setExpenses,
  addExpense,
  editExpense,
  deleteExpense,
  setExpensesError,
  addExpenseError,
  editExpenseError,
  deleteExpenseError,
} from "../redux/expensesSlice";
const BASE_URL = "http://localhost:13185/api/";

export const GetExpenses = async (dispatch) => {
  try {
    //Api call
    const { data } = await axios.get(`${BASE_URL}Expenses`);
    dispatch(setExpenses(data));
  } catch (error) {
    dispatch(setExpensesError());
  }
};

export const DeleteExpense = async (dispatch, id) => {
  try {
    //Api call
    await axios.delete(`${BASE_URL}Expenses/${id}`);
    dispatch(deleteExpense(id));
  } catch (error) {
    dispatch(deleteExpenseError());
  }
};

export const EditExpense = async (dispatch, expense) => {
  try {
    //Api call
    const { data } = await axios.put(
      `${BASE_URL}Expenses/${expense.id}`,
      expense
    );

    dispatch(editExpense(data));
  } catch (error) {
    dispatch(addExpenseError());
  }
};

export const NewExpense = async (dispatch, expense) => {
  try {
    //Api call
    const { data } = await axios.post(`${BASE_URL}Expenses`, expense);
    dispatch(addExpense(data));
  } catch (error) {
    dispatch(editExpenseError());
  }
};
