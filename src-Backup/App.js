import React from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import ExpenseForm from "./components/expense-form";
import ExpenseList from "./components/expense-list";

const App = () => {
  return (
    <div style={{ width: "60%", margin: "auto" }}>
      <ToastContainer />
      <h3>New Expense</h3>
      <ExpenseForm />
      <hr />
      <h3>Your Expenses</h3>
      <ExpenseList />
    </div>
  );
};

export default App;
