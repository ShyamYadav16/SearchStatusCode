import { userReducer } from "../reducers/user";
import {User} from "../types/User";
import {CHECK_LOGIN, CheckLogin} from "../types/actions";

describe('User Reducer', function () {

  it('should return default state', () => {
    const userReducerDefaultState: User = {name: "", email: "", password: ""};
    const checkLogin: CheckLogin = {
      type:  CHECK_LOGIN,
      user:  userReducerDefaultState
    };
    const newState = userReducer(undefined, checkLogin);
    expect(newState).toEqual(userReducerDefaultState);
  });

  it('should return new state if receiving type', () => {
    const user: User = {name: "abc", email: "abc@gmail.com", password: "sjhsjkfhg"};

    const newState = userReducer(undefined, {
      type: CHECK_LOGIN,
      user: user
    });
    expect(newState).toEqual(user);
  });

});