import React from 'react';
import {connect} from "react-redux";
import {AppState} from "../store/configureStore";
import {ThunkDispatch} from "redux-thunk";
import {AppActions} from "../types/actions";
import MyTable from './MyTable';
import {SharedBtn} from "./SharedBtn";
import { bindActionCreators } from "redux";
import {User} from "../../../CreateReactApp/my-app/src/types/User";
import {fetchUsers} from "../actions/user";

interface DashboardPageProps {
  id?: string;
  color?: string;
}

interface DashboardPageState {}

type Props = DashboardPageProps & LinkStateProps & LinkDispatchProps;

export class Dashboard extends React.Component<Props, DashboardPageState> {

  render() {
    const configureBtn = {
      buttonText: "Submit",
      emitEvent: this.props.fetchUsers
    }

    const users: User[] = this.props.users;

    let userExist: boolean;

    userExist = (!users) ? false : true;

    return (
      <div data-test="dashboard">
        Dashboard
        <SharedBtn {...configureBtn}/>
        { userExist &&
          users.map((user, index) => {
          const { name, email } = user;
          return <div>{name}</div>
        })}
        <MyTable/>
      </div>
    );
  }
}

interface LinkStateProps {
  users: User[];
}
interface LinkDispatchProps {
  fetchUsers: () => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: DashboardPageProps
): LinkStateProps => ({
  users: state.users
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: DashboardPageProps
): LinkDispatchProps => ({
  fetchUsers: bindActionCreators(fetchUsers, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);