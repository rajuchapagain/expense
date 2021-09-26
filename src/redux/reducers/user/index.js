import UserActionTypes from "./user.actionTypes";

const initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.SET_USERS:
      return { ...state, users: [...action.payload] };
    case UserActionTypes.REMOVE_USER:
      var newUserList = state.users.filter(
        (user) => user.id !== action.payload
      );
      return { ...state, users: [...newUserList] };
    default:
      return state;
  }
};

export default usersReducer;
