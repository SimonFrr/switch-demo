import React from 'react';
import { connect } from 'react-redux';
import {
  Col,
  PageHeader,
  Panel,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from 'react-bootstrap';
import { submitRegistration } from '../actions/registration';

const Registration = ({ onRegistrationSubmit }) => (
  <Col xs={12} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
    <PageHeader>Registration</PageHeader>
    <Panel>
      <form>
        <FormGroup>
          <ControlLabel> First Name </ControlLabel>
          <FormControl type="text" placeholder="John"/>
        </FormGroup>

        <FormGroup>
          <ControlLabel> Last Name </ControlLabel>
          <FormControl type="text" placeholder="Doe"/>
        </FormGroup>

        <FormGroup>
          <ControlLabel> Email Address </ControlLabel>
          <FormControl type="email" placeholder="you@world.com"/>
        </FormGroup>

        <FormGroup>
          <Button bsStyle="success" onClick={onRegistrationSubmit}>
            Submit
          </Button>
        </FormGroup>
      </form>
    </Panel>
  </Col>
);

const mapDispatchToProps = dispatch => ({
  onRegistrationSubmit: () => dispatch(submitRegistration())
});

const ConnectedRegistration = connect(
  null,
  mapDispatchToProps
)(Registration)

export default ConnectedRegistration
