import React from 'react';
import {connect} from "react-redux";
import {AppState} from "../store/configureStore";
import {ThunkDispatch} from "redux-thunk";
import {AppActions} from "../types/actions";
import MyTable from './MyTable';

interface DashboardPageProps {
  id?: string;
  color?: string;
}

interface DashboardPageState {}

type Props = DashboardPageProps & LinkStateProps & LinkDispatchProps;

export class Dashboard extends React.Component<Props, DashboardPageState> {

  render() {
    return (
      <div className="dashboard">
        Dashboard
        <MyTable/>
      </div>
    );
  }
}

interface LinkStateProps {}
interface LinkDispatchProps {}

const mapStateToProps = (
  state: AppState,
  ownProps: DashboardPageProps
): LinkStateProps => ({});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: DashboardPageProps
): LinkDispatchProps => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);