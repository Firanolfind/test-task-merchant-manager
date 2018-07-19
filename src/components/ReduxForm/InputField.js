import React, { Component } from 'react';
import { Input, Alert, FormGroup, Label } from 'reactstrap';
import { Field } from 'redux-form';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  console.log(input) || <FormGroup>
    {touched
      && ((error
        && <Alert color="danger">{error}</Alert>)
        || (warning
          && <Alert color="warning">{warning}</Alert>))}
    <Label for={input.id}>{label}</Label>
    <Input
      {...input}
      id={input.id}
      placeholder={label}
      type={type}
    />
  </FormGroup>
);

const InputField = props => <Field {...props} component={renderField}/>;

export default InputField;
