import React from 'react';
import { shallow } from 'enzyme';
import { SharedBtn } from '../components/SharedBtn';
import { findByTestAttr } from '../../Utils'

describe('SharedBtn Component', () => {

  let wrapper: any;
  let mockFunc: any;
  beforeEach(() => {
    mockFunc = jest.fn();
    const props = {
      buttonText: "Submit",
      emitEvent: mockFunc
    }
    wrapper = shallow(<SharedBtn {...props}/>)
  });

  it('Should render a button', () => {
    const button = findByTestAttr(wrapper, 'buttonComponent');
    expect(button.length).toBe(1);
  });

  it('Should emit callback on click event', () => {
    const button = findByTestAttr(wrapper, 'buttonComponent');
    button.simulate('click');
    const callback = mockFunc.mock.calls.length;
    expect(callback).toBe(1);
  });

});