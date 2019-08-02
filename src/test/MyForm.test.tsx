import React from "react";
import { shallow, mount } from 'enzyme';
import EnhancedForm from '../components/MyForm';
import { findByTestComponent } from "../../Utils";
import {Formik} from "formik";

// import { JSDOM } from 'jsdom';
// const { window } = new JSDOM('<!doctype html><html><body></body></html>');
//
// // Save these two objects in the global space so that libraries/tests
// // can hook into them, using the above doc definition.
// const globalAny:any = global;
//
// globalAny.document = window.document;
// globalAny.window = window;

const setUp = (onSubmitFn: any) => {
  const component = shallow(<EnhancedForm onSubmit={onSubmitFn()}/>)
  return component;
}

describe('Form test', () => {

  let component: any, onSubmitFn: any;
  beforeEach(() => {
    onSubmitFn = jest.fn();
    component = setUp(onSubmitFn);
  });

  it('should test form', (done) => {
    const form = findByTestComponent(component, "Formik");
    form.simulate('submit', { preventDefault: () => {}});
    expect(onSubmitFn).toHaveBeenCalledTimes(1);
    done();
  });

  // it('should validate form', (done) => {
  //   let onSubmitFn = jest.fn();
  //
  //   const form = mount(<EnhancedForm onSubmit={onSubmitFn()} />);
  //   const input = form.find("[data-test='name']");
  //   // input.simulate('change', {
  //   //   target: {
  //   //     value: "adkhfa"
  //   //   }
  //   // });
  //   //
  //   // input.update();
  //   // const newValue = form.dive().find("MyForm").dive().find("Formik").dive().find("[data-test='name']").props();
  //   console.log(input);
  //
  //   // const wrapper = shallow(<EnhancedForm onSubmit={onSubmitFn()}/>);
  //   //
  //   // const myForm = wrapper.dive().find("MyForm");
  //   //
  //   // myForm.dive().find("Formik").dive().find("[data-test='name']").simulate('change', {
  //   //   // you must add this next line as (Formik calls e.persist() internally)
  //   //   persist: () => {},
  //   //   // simulate changing e.target.name and e.target.value
  //   //   target: {
  //   //     name: 'name',
  //   //     value: 'ian',
  //   //   },
  //   // })
  //   //
  //   // const newValue = myForm.dive().find("Formik").dive().find("[data-test='name']").props();
  //   // console.log(newValue);
  //   // const newValue = input.props();
  //
  //   // expect(newValue).toEqual('ian');
  //
  //   // // set the inputs
  //   // const instance = wrapper.find('[data-test="myForm"]').instance();
  //   //   const changeState = new Promise((resolve) => {
  //   //     instance.setState({
  //   //       values: {
  //   //        name: 'skjfns',
  //   //        email: 'adg',
  //   //        password: 'adfad'
  //   //       }
  //   //     }, () => resolve())
  //   //   });
  //   // await changeState;
  //   // const form = wrapper.find('form');
  //   // form.simulate('submit');
  //   // setTimeout(() => {
  //   //   const alerts = wrapper.find('Formik')
  //   //     .update()
  //   //     .find('.alert');
  //   //   expect(alerts.length).toBe(1);
  //   //   done();
  //   // });
  //   done();
  // }, 30000);

});
