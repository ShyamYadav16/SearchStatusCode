import { User } from "../types/User";
import { UserActionTypes } from "../types/actions";

const userReducerDefaultState: User = {name: "", email: "", password: ""};

const userReducer = (
  state = userReducerDefaultState,
  action: UserActionTypes
): any => {
  switch (action.type) {
    case "CHECK_LOGIN":
      console.log("Reducer ----> "+JSON.stringify(action.user));
      return action.user;
    default:
      return state;
  }
};

export { userReducer };
