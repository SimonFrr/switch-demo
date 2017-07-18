import React from 'react';
import { FormControl } from 'react-bootstrap';

// This component wraps react-bootstrap's FormControl and makes it
// compatible with redux-form's Field component. Usage:
// <Field component={CustomFormControl} ... />

export default ({input, meta, ...props}) => {
  return <FormControl {...props} {...input} />
};
