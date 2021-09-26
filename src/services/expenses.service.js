import axios from "axios";
import expensesActions from "../redux/reducers/expense/expenses.actions";
import { toast } from "react-toastify";
const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/api/expenses`,
});

axiosInstance.interceptors.request.use((config) => {
  const userToken = JSON.parse(sessionStorage.getItem("user"));
  config.headers = {
    authorization: "Bearer " + userToken.token,
  };
  return config;
});

export const GetExpenses = async (dispatch, user) => {
  try {
    const { data } = await axiosInstance.get(`/${user}`);
    dispatch(expensesActions.setExpenses(data));
  } catch (error) {
    toast.error(error);
  }
};

export const NewExpense = async (dispatch, expense) => {
  try {
    const { data } = await axiosInstance.post("", expense);
    dispatch(expensesActions.addExpense(data));
    toast.success("Expense added successfully");
  } catch (error) {
    toast.error(error);
  }
};

export const DeleteExpense = async (dispatch, id) => {
  try {
    await axiosInstance.delete(`/${id}`);
    dispatch(expensesActions.deleteExpense(id));
    toast.success("Expense deleted successfully");
  } catch (error) {
    toast.error(error);
  }
};

export const EditExpense = async (dispatch, expense) => {
  try {
    const { data } = await axiosInstance.put(`/${expense.id}`, expense);
    dispatch(expensesActions.editExpense(data));
    toast.success("Expense updated successfully");
  } catch (error) {
    toast.error(error);
  }
};
