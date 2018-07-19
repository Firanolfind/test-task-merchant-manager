import React from 'react';
import { Form, Button } from 'reactstrap';
import { reduxForm } from 'redux-form';
import InputField from '~/components/ReduxForm/InputField';
import { required, minLength, maxLength, email, phone } from '~/utils/fieldValidation';

const min2 = minLength(2);
const max14 = maxLength(14);

const SubmitForm = props => (
  <Form onSubmit={props.handleSubmit}>
    <InputField
      id="firstname"
      type="text"
      name="firstname"
      component="input"
      placeholder="enter first name"
      label="First Name"
      disabled={props.disabled}
      validate={[ required, min2, max14 ]}
    />
    <InputField
      id="lastname"
      type="text"
      name="lastname"
      component="input"
      placeholder="enter last name"
      label="Last Name"
      disabled={props.disabled}
      validate={[ required, min2, max14 ]}
    />
    <InputField
      id="avatarUrl"
      type="text"
      name="avatarUrl"
      placeholder="enter url to your avatar"
      label="Avatart Url"
      disabled={props.disabled}
      validate={[ required ]}
    />
    <InputField
      id="email"
      type="email"
      name="email"
      placeholder="enter email"
      label="Email Address"
      disabled={props.disabled}
      validate={[ email ]}
    />
    <InputField
      id="phone"
      type="phone"
      name="phone"
      placeholder="enter phone number"
      label="Phone number"
      disabled={props.disabled}
      validate={[ phone ]}
    />
    <InputField
      id="hasPremium"
      type="checkbox"
      name="hasPremium"
      placeholder=""
      label="Premium"
      disabled={props.disabled}
    />
    <Button
      disabled={props.invalid || props.pristine || props.submitting}
      color="primary"
      type="submit">
      {'Submit'}
    </Button>
    <br/>
    <br/>
    <br/>
  </Form>
);

export default reduxForm({
  form: 'merchant_edit'
})(SubmitForm);

