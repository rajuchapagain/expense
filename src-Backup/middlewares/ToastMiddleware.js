import {
  addExpense,
  editExpense,
  deleteExpense,
  addExpenseError,
  setExpensesError,
  editExpenseError,
  deleteExpenseError,
} from "../redux/expensesSlice";
import { toast } from "react-toastify";

const ToastMiddleware = () => (next) => (action) => {
  switch (action.type) {
    case addExpense.type:
      toast.success("New expense added successfully");
      break;

    case editExpense.type:
      toast.success("Expense updated successfully");
      break;
    case deleteExpense.type:
      toast.success("Expense deleted successfully");
      break;
    case setExpensesError.type:
      toast.error("Error while setting the expenses list");
      break;
    case addExpenseError.type:
      toast.error("Error while adding the expense");
      break;
    case editExpenseError.type:
      toast.error("Error while edition the expense");
      break;
    case deleteExpenseError.type:
      toast.error("Error while deleting the expense");
      break;

    default:
      break;
  }

  return next(action);
};

export default ToastMiddleware;
