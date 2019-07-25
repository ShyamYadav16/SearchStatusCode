import * as React from 'react';
import {Formik, Form, Field, ErrorMessage, withFormik, InjectedFormikProps, FormikErrors} from "formik";
import {Button} from '@material-ui/core';
import {MyField} from './formControls/MyField';
import * as Yup from 'yup';

import { User } from '../types/User';

interface Props {
  onSubmit: (user: User) => void;
}

const MyForm: React.FC<InjectedFormikProps<Props, User>> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={user => {
        onSubmit(user);
      }}
      validate={(values: User) => {
        const errors: FormikErrors<User> = {};
        if (!values.name) {
          errors.name = "Required";
        }
        if (!values.email) {
          errors.email = "Required";
        }
        if (!values.password) {
          errors.password = "Required";
        }
        return errors;
      }}
    >
      {({values, errors}) => (
        <Form>
          <div>
            <Field
              data-test="name"
              name="name"
              placeholder="Name"
              component={MyField}
            />
          </div>
          {errors.name}
          <div>
            <Field
              name="email"
              placeholder="Email"
              component={MyField}
            />
          </div>
          {errors.email}
          <div>
            <Field
              name="password"
              placeholder="Password"
              component={MyField}
            />
          </div>
          {errors.password}
          <Button type="submit">Submit</Button>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
}

// const formikEnhancer = withFormik<Props, User>({
//   mapPropsToValues: () => ({name: "", email: "", password: ""}),
//
//   validationSchema: Yup.object().shape({
//     email: Yup.string()
//       .email('Invalid email address')
//       .required('Email is required!'),
//     name: Yup.string()
//       .required('Name is required.'),
//   }),
//   handleSubmit: (values, { setSubmitting, setStatus }) => {
//     console.log("handleSubmit ---> ");
//     setStatus(undefined);
//     setTimeout(() => {
//       // eslint-disable-next-line no-alert
//       alert(JSON.stringify(values, null, 2)); // eslint-disable-line no-undef
//       setSubmitting(false);
//       // to set the custom error after submission.
//       setStatus({ name: 'Username already exists.' });
//     }, 1000);
//   },
//   displayName: 'MyForm', // helps with React DevTools
// });


const formikEnhancer = withFormik<Props, User>({
  mapPropsToValues: () => ({name: "", email: "", password: ""}),

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string().required("Password is required")
  }),

  handleSubmit(
    { email, password }: User,
    { props, setSubmitting, setErrors }
  ) {
  }
})(MyForm);

const MyEnhancedForm = formikEnhancer;

export default MyEnhancedForm;