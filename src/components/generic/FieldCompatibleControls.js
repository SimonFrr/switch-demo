import React from 'react';
import { FormControl, Checkbox } from 'react-bootstrap';

// These components wrap react-bootstrap's and make them
// compatible with redux-form's. Usage:
// <Field component={CustomComponent} ... />

export const FieldCompatibleFormControl = ({input, meta, ...props}) => {
  return <FormControl {...props} {...input} />
};

export const FieldCompatibleCheckbox = ({input, meta, ...props}) => {
  // the checked attribute fixes a checkbox display bug
  // when the initial value is set to true with redux-form
  return <Checkbox {...props} {...input} checked={input.value}/>
};
