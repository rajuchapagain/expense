import AuthenticationActionTypes from "./authentication.actionTypes";

const AuthenticationActions = {
  signUp: (payload) => ({
    type: AuthenticationActionTypes.SIGN_UP,
    payload,
  }),
  signIn: (payload) => ({
    type: AuthenticationActionTypes.SIGN_IN,
    payload,
  }),
  setAuthenticated: (payload) => ({
    type: AuthenticationActionTypes.SET_AUTHENTICATED,
    payload,
  }),
  signOut: () => ({
    type: AuthenticationActionTypes.SIGN_OUT,
    payload: null,
  }),
};

export default AuthenticationActions;
