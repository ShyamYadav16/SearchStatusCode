import { User } from "../types/User";
import { UserActionTypes } from "../types/actions";

const userReducerDefaultState: User = {name: "", email: "", password: ""};

const userReducer = (
  state = userReducerDefaultState,
  action: UserActionTypes
): any => {
  switch (action.type) {
    case "CHECK_LOGIN":
      return action.user;
    default:
      return state;
  }
};

const usersReducerDefaultState: User[] = [];

const usersReducer = (
  state = usersReducerDefaultState,
  action: UserActionTypes
): any => {
  switch (action.type) {
    case "FETCH_USERS":
      return action.users;
    default:
      return state;
  }
}

export { userReducer, usersReducer };
