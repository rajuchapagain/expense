import React from "react";
import { ToastContainer } from "react-toastify";
import ExpenseForm from "./Expenses/ExpenseForm";
import ExpenseList from "./Expenses/ExpenseList";
// import { FaUserCircle } from "react-icons/fa";

export default function HomePage() {
  return (
    <div style={{ width: "60%", margin: "auto" }}>
      <ToastContainer position="bottom-center" />
      <h3>New Expense</h3>
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
}
