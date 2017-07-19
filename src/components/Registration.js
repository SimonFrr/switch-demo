import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import {
  Col,
  PageHeader,
  Panel,
  FormGroup,
  ControlLabel,
  Button
} from 'react-bootstrap';
import { FieldCompatibleFormControl } from './generic/FieldCompatibleControls';
import { submitRegistration } from '../actions/registration';

const Registration = ({ handleSubmit }) => (
  <Col xs={12} sm={8} smOffset={2} md={6} mdOffset={3}>
    <PageHeader>Registration</PageHeader>
    <Panel>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <ControlLabel> First Name </ControlLabel>
          <Field component={FieldCompatibleFormControl} name="firstName" type="text" placeholder="John"/>
        </FormGroup>

        <FormGroup>
          <ControlLabel> Last Name </ControlLabel>
          <Field component={FieldCompatibleFormControl} name="lastName" type="text" placeholder="Doe"/>
        </FormGroup>

        <FormGroup>
          <ControlLabel> Email Address </ControlLabel>
          <Field component={FieldCompatibleFormControl} name="emailAddress" type="email" placeholder="you@world.com"/>
        </FormGroup>

        <FormGroup>
          <Button type="submit" bsStyle="success">
            Submit
          </Button>
        </FormGroup>
      </form>
    </Panel>
  </Col>
);

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(submitRegistration(values))
});

const ConnectedRegistration = compose(
  connect(null, mapDispatchToProps),
  reduxForm({
    form: 'registration',
    destroyOnUnmount: false
  })
)(Registration);

export default ConnectedRegistration;
