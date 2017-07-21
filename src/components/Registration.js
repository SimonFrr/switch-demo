import React, { Component } from 'react';
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
import PlanDisplayer from './generic/PlanDisplayer';
import { pageView } from '../gaHelper';

class Registration extends Component {
  componentDidMount() {
    pageView('registration');
  }

  render() {
    return (
      <Col xs={12} sm={8} smOffset={2} md={6} mdOffset={3}>
        <p className="text-center header-p">
          You have selected the <strong>{this.props.planName} (${this.props.planPrice}/month)</strong>
        </p>
        <p className="text-center header-p">
          <strong>Step 1/2 - Register</strong>
        </p>
        <Panel>
          <form onSubmit={this.props.handleSubmit}>
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
              <Button type="submit" bsStyle="success" bsSize="large" block>
                Join Switch!
              </Button>
            </FormGroup>
          </form>
        </Panel>
      </Col>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(submitRegistration(values))
});

const ConnectedRegistration = compose(
  connect(null, mapDispatchToProps),
  reduxForm({
    form: 'registration',
    destroyOnUnmount: false
  }),
  PlanDisplayer
)(Registration);

export default ConnectedRegistration;
