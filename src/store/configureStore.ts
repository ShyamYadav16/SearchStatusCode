import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { expenseReducer } from "../reducers/expenses";
import { userReducer } from "../reducers/user";
import { AppActions } from "../types/actions";

export const rootReducer = combineReducers({
  expenses: expenseReducer,
  user: userReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
);
