import { User } from '../types/User';
import axios from 'axios';
import {AppActions, CHECK_LOGIN, FETCH_USERS} from "../types/actions";
import { Dispatch } from "redux";
import { AppState } from "../store/configureStore";

const BASE_URL = "http://localhost:3500";

export const submitMessage = (user: User): AppActions => ({
  type: CHECK_LOGIN,
  user: user
});

export const fetchMessage = (users: User[]): AppActions => ({
  type: FETCH_USERS,
  users: users
});

export const submitLogin = (user: User) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    axios.post(`${BASE_URL}/login`, user).then((res) => {
      console.log(res.data);
      let message = res.data.data;
      dispatch(submitMessage(message));
    }).catch((err) => {
      console.log(err);
    });
  };
}

export const fetchUsers = () => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    return axios(`${BASE_URL}/user/all`).then((res) => {
      console.log(res.data.data);
      let message = res.data.data;
      dispatch(fetchMessage(message));
    }).catch((err) => {
      console.log(err);
    });
  };
}