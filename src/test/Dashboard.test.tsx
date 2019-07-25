import React from "react";
import { shallow } from 'enzyme';
import {Dashboard} from '../components/Dashboard';

describe('Dashboard ', () => {
  it('Dashboard class name', () => {
    const component = shallow(<Dashboard/>);
    const wrapper = component.find('.dashboard');
    expect(wrapper.length).toBe(1);
  });

  // it('Renders link to Google with classname', () => {
  //   const link = shallow(<Dashboard/>);
  //   expect(link).toMatchSnapshot();
  // });
});