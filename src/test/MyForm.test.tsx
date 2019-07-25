import React from "react";
import { shallow } from 'enzyme';
import EnhancedForm from '../components/MyForm';
import {User} from '../types/User';


describe('Form test', () => {

  it('should test form', (done) => {
    const onSubmitFn = jest.fn();
    const wrapper = shallow(<EnhancedForm onSubmit={onSubmitFn()}/>)

    const form = wrapper.find('Formik');

    form.simulate('submit', { preventDefault: () => {}});
    expect(onSubmitFn).toHaveBeenCalledTimes(1);
    done();
  });

  it('should validate form', (done) => {
    const onSubmitFn = jest.fn();
    const wrapper = shallow(<EnhancedForm onSubmit={onSubmitFn()}/>)

    const form = wrapper.find(`Field`);

    console.log(form.debug());
    done();
  });

});
