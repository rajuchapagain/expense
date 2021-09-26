import axios from "axios";
import { toast } from "react-toastify";
import StatisticsActions from "../redux/reducers/statistics/statistics.actions";

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/api/statistics`,
});

axiosInstance.interceptors.request.use((config) => {
  const userToken = JSON.parse(sessionStorage.getItem("user"));
  config.headers = {
    authorization: "Bearer " + userToken.token,
  };
  return config;
});

export const GetExpensesByCategory = async (dispatch) => {
  try {
    const result = await axiosInstance.get();
    dispatch(StatisticsActions.setStatistics(result.data));
  } catch (error) {
    toast.error(error);
  }
};
