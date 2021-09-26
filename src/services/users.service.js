import axios from "axios";
import { toast } from "react-toastify";
import UserActions from "../redux/reducers/user/user.actions";
const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/api/Authentication`,
});

export const GetRegisteredUsers = async (dispatch) => {
  try {
    const { data } = await axiosInstance.get();
    dispatch(UserActions.setUsers(data));
  } catch (error) {
    toast.error(error);
  }
};
