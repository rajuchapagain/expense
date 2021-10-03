import axios from "axios";
import { toast } from "react-toastify";
import AuthenticationActions from "../redux/reducers/authentication/authentication.actions";

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/api/Authentication`,
});

export const SignIn = async (dispatch, user) => {
  try {
    const { data } = await axiosInstance.post("/signin", user);
    dispatch(AuthenticationActions.signIn(data));
    toast.success("User logged in successfully");
  } catch (error) {
    console.log(error);
    toast.error(error.Message);
  }
};

export const SignUp = async (dispatch, formData) => {
  try {
    const { data } = await axiosInstance.post("/signup", formData);

    dispatch(AuthenticationActions.signUp(data));
    toast.success("User registered successfully");
  } catch (error) {
    toast.error(error);
  }
};

export const ThirdPartySignIn = async (dispatch, token) => {
  try {
    const { data } = await axiosInstance.post(`/google?token=${token}`);
    dispatch(AuthenticationActions.signIn(data));
  } catch (error) {
    toast.error(error.message);
  }
};

//Non api services, we can directly call the action creator in place of these functions
export const SignOut = async (dispatch) => {
  try {
    dispatch(AuthenticationActions.signOut());
    toast.success("User logged out successfully");
  } catch (error) {
    toast.error(error);
  }
};

export const SetAuthenticated = (dispatch, user) => {
  dispatch(AuthenticationActions.setAuthenticated(user));
};
