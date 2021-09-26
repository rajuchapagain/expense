import UserActionTypes from "./user.actionTypes";

const UserActions = {
  setUsers: (payload) => ({
    type: UserActionTypes.SET_USERS,
    payload,
  }),
  removeUser: (payload) => ({
    type: UserActionTypes.REMOVE_USER,
    payload,
  }),
};

export default UserActions;
