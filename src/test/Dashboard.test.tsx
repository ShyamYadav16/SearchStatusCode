import React from "react";
import { shallow } from 'enzyme';
import {Dashboard} from '../components/Dashboard';
import { findByTestAttr } from "../../Utils";
import {User} from "../types/User";

interface LinkStateProps {
  users: User[];
}
interface LinkDispatchProps {
  fetchUsers: () => void;
}

type Props = LinkStateProps & LinkDispatchProps;

const setUp = () => {
  const configureBtn = {
    users: [],
    fetchUsers: () => {

    }
  }
  const component = shallow(<Dashboard {...configureBtn}/>);
  return component;
}

describe('Dashboard ', () => {

  let component: any;
  beforeEach(() => {
    component = setUp();
  });

  it('Dashboard class name', () => {
    const wrapper = findByTestAttr(component, 'dashboard');
    expect(wrapper.length).toBe(1);
  });

});