import { configureStore } from "@reduxjs/toolkit";
import ExpensesSlice from "./expensesSlice";
import ToastMiddleware from "../middlewares/ToastMiddleware";
export const store = configureStore({
  reducer: {
    expensesSlice: ExpensesSlice,
  },
  middleware: [ToastMiddleware],
});
