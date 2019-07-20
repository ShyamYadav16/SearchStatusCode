import { User } from '../types/User';
import axios from 'axios';
import {AppActions, CHECK_LOGIN} from "../types/actions";
import { Dispatch } from "redux";
import { AppState } from "../store/configureStore";

const BASE_URL = "http://localhost:3500";

export const submitMessage = (user: User): AppActions => ({
  type: CHECK_LOGIN,
  user: user
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