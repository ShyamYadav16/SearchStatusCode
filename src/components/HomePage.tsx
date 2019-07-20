import React from "react";
import { connect } from "react-redux";
import { startRemoveExpense, startEditExpense } from "../actions/expenses";
import { submitLogin } from '../actions/user';
import { Expense } from "../types/Expense";
import { AppState } from "../store/configureStore";
import { Dispatch, bindActionCreators } from "redux";
import { AppActions } from "../types/actions";
import { ThunkDispatch } from "redux-thunk";
import {MyForm} from "./MyForm";
import {User} from "../types/User";

interface HomePageProps {
  id?: string;
  color?: string;
}

interface HomePageState {}

type Props = HomePageProps & LinkStateProps & LinkDispatchProps;

export class HomePagePage extends React.Component<Props, HomePageState> {
  onEdit = (expense: Expense) => {
    this.props.startEditExpense(expense);
  };
  onRemove = (id: string) => {
    this.props.startRemoveExpense(id);
  };

  render() {
    const { expenses, user } = this.props;
    return (
      <div>
        {/*<h1>Expense Page</h1>*/}
        {/*<div>*/}
          {/*{expenses.map(expense => (*/}
            {/*<div>*/}
              {/*<p>{expense.description}</p>*/}
              {/*<p>{expense.amount}</p>*/}
              {/*<p>{expense.note}</p>*/}
              {/*<button onClick={() => this.onRemove(expense.id)}>*/}
                {/*Remove Expense*/}
              {/*</button>*/}
              {/*<button onClick={() => this.onEdit(expense)}>Edit Expense</button>*/}
            {/*</div>*/}
          {/*))}*/}
        {/*</div>*/}
        <div style={{ textAlign: "center" }}>
          <MyForm
            onSubmit={({ name, email, password }) => {
              let user = new User(name, email, password);
              this.props.submitLogin(user);
            }}
          />
          <p>User name is: {user.name}</p>
        </div>
      </div>
    );
  }
}

interface LinkStateProps {
  expenses: Expense[];
  user: User
}
interface LinkDispatchProps {
  startEditExpense: (expense: Expense) => void;
  startRemoveExpense: (id: string) => void;
  submitLogin: (user: User) => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: HomePageProps
): LinkStateProps => ({
  expenses: state.expenses,
  user: state.user
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: HomePageProps
): LinkDispatchProps => ({
  startEditExpense: bindActionCreators(startEditExpense, dispatch),
  startRemoveExpense: bindActionCreators(startRemoveExpense, dispatch),
  submitLogin: bindActionCreators(submitLogin, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePagePage);
