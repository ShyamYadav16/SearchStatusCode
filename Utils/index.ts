import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import {AppState, rootReducer} from "../src/store/configureStore";
import {AppActions} from "../src/types/actions";

import {User} from "../src/types/User";
import {Expense} from "../src/types/Expense";

// interface obj {
//   expense: Expense;
//   user: User;
//   users: User[]
// }

export const findByTestComponent = (component: any, componentName: string) => {
  const wrapper = component.find(componentName);
  return wrapper;
};

export const findByTestAttr = (component: any, attr: string) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const testStore = () => {
  return createStore(
    rootReducer,
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
  );
}