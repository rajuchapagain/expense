import AuthenticationActionTypes from "./authentication.actionTypes";

const initialState = {
  token: "",
  isLoggedIn: false,
  isAdmin: false,
  fullName: "",
  id: "",
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthenticationActionTypes.SIGN_IN:
      sessionStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        ...{
          token: action.payload.token,
          isLoggedIn: true,
          isAdmin: action.payload.isAdmin,
          fullName: action.payload.fullName,
          id: action.payload.id,
        },
      };
    case AuthenticationActionTypes.SIGN_UP:
      sessionStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        ...{
          token: action.payload.token,
          isLoggedIn: true,
          isAdmin: action.payload.isAdmin,
          fullName: action.payload.fullName,
          id: action.payload.id,
        },
      };
    case AuthenticationActionTypes.SIGN_OUT:
      sessionStorage.clear();
      return {
        ...state,
        ...{ token: "", isLoggedIn: false, isAdmin: false, fullName: "" },
      };
    case AuthenticationActionTypes.SET_AUTHENTICATED:
      return {
        ...state,
        ...{
          token: action.payload.token,
          isLoggedIn: true,
          isAdmin: action.payload.isAdmin,
          fullName: action.payload.fullName,
          id: action.payload.id,
        },
      };
    default:
      return state;
  }
};

export default authenticationReducer;
