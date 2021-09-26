import { createSlice, createAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const setExpensesError = createAction("setExpensesError");
export const addExpenseError = createAction("addExpenseError");
export const editExpenseError = createAction("editExpenseError");
export const deleteExpenseError = createAction("deleteExpenseError");

export const ExpensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: [],
  },
  reducers: {
    setExpenses: (state, action) => {
      toast.success("Data loaded successfully");
      return {
        ...state,
        expenses: [...action.payload],
      };
    },
    addExpense: (state, action) => {
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    },
    editExpense: (state, action) => {
      const expenses = state.expenses.map((expense) => {
        if (expense.id === action.payload.id) {
          expense = action.payload;
        }
        return expense;
      });
      return {
        ...state,
        expenses: [...expenses],
      };
    },
    deleteExpense: (state, action) => {
      const newExpenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
      return { ...state, expenses: [...newExpenses] };
    },
  },
});

export const { setExpenses, addExpense, editExpense, deleteExpense } =
  ExpensesSlice.actions;

export default ExpensesSlice.reducer;
