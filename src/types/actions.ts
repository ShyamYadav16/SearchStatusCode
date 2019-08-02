import { Expense } from "./Expense";
import {User} from "./User";

// action strings
export const ADD_EXPENSE = "ADD_EXPENSE";
export const EDIT_EXPENSE = "EDIT_EXPENSE";
export const REMOVE_EXPENSE = "REMOVE_EXPENSE";
export const SET_EXPENSES = "SET_EXPENSES";
export const CHECK_LOGIN = "CHECK_LOGIN";
export const FETCH_USERS = "FETCH_USERS";

export interface SetExpenseAction {
  type: typeof SET_EXPENSES;
  expenses: Expense[];
}

export interface EditExpenseAction {
  type: typeof EDIT_EXPENSE;
  expense: Expense;
}

export interface RemoveExpenseAction {
  type: typeof REMOVE_EXPENSE;
  id: string;
}

export interface AddExpenseAction {
  type: typeof ADD_EXPENSE;
  expense: Expense;
}

export interface CheckLogin {
  type: typeof CHECK_LOGIN;
  user: User
}

export interface FetchUsers {
  type: typeof FETCH_USERS;
  users: User[]
}

export type ExpenseActionTypes =
  | SetExpenseAction
  | EditExpenseAction
  | RemoveExpenseAction
  | AddExpenseAction;

export type UserActionTypes = CheckLogin | FetchUsers;

export type AppActions = ExpenseActionTypes | UserActionTypes;
