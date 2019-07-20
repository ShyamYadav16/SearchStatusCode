import * as React from 'react';
import {Formik, Form, Field} from "formik";
import {Button} from '@material-ui/core';
import {MyField} from './formControls/MyField';

interface Values {
  name: string;
  email: string;
  password: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

export const MyForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={values => {
        onSubmit(values);
      }}
    >
      {({values}) => (
        <Form>
          <div>
            <Field
              name="name"
              placeholder="Name"
              component={MyField}
            />
          </div>
          <div>
            <Field
              name="email"
              placeholder="Email"
              component={MyField}
            />
          </div>
          <div>
            <Field
              name="password"
              placeholder="Password"
              component={MyField}
            />
          </div>
          <Button type="submit">Submit</Button>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
}