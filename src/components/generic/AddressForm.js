import React from 'react';
import {
  Row,
  Col,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap';
import { Field } from 'redux-form';
import { FieldCompatibleFormControl } from './FieldCompatibleControls';

export default () => {
  return (
    <div>
      <Row>
        <Col xs={6}>
          <FormGroup>
            <ControlLabel>
              First Name
            </ControlLabel>
            <Field component={FieldCompatibleFormControl} name="firstName" type="text" placeholder="John"/>
          </FormGroup>
        </Col>
        <Col xs={6}>
          <FormGroup>
            <ControlLabel>
              Middle Name
            </ControlLabel>
            <Field component={FieldCompatibleFormControl} name="middleName" type="text" placeholder="A."/>
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col xs={6}>
          <FormGroup>
            <ControlLabel>
              Last Name
            </ControlLabel>
            <Field component={FieldCompatibleFormControl} name="lastName" type="text" placeholder="Doe"/>
          </FormGroup>
        </Col>
      </Row>

      <FormGroup>
        <ControlLabel>
          Email Address
        </ControlLabel>
        <Field component={FieldCompatibleFormControl} name="emailAddress" type="email" placeholder="you@world.com"/>
      </FormGroup>

      <FormGroup>
        <ControlLabel>
          Address
        </ControlLabel>
        <Field component={FieldCompatibleFormControl} name="addressLine1" type="text" placeholder="123 Sesame Street"/>
      </FormGroup>

      <FormGroup>
        <Field component={FieldCompatibleFormControl} name="addressLine2" type="text" placeholder="Building A"/>
      </FormGroup>

      <Row>
        <Col xs={6}>
          <FormGroup>
            <ControlLabel>
              Zip
            </ControlLabel>
            <Field component={FieldCompatibleFormControl} name="zipCode" type="text" placeholder="10001"/>
          </FormGroup>
        </Col>
        <Col xs={6}>
          <FormGroup>
            <ControlLabel>
              City
            </ControlLabel>
            <Field component={FieldCompatibleFormControl} name="city" type="text" placeholder="New York City"/>
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col xs={6}>
          <FormGroup>
            <ControlLabel>
              Country
            </ControlLabel>
            <FormControl.Static type="text">United States</FormControl.Static>
          </FormGroup>
        </Col>
        <Col xs={6}>
          <FormGroup>
            <ControlLabel>
              State / Province
            </ControlLabel>
            <Field component={FieldCompatibleFormControl} name="stateOrProvince" type="text" placeholder="NY"/>
          </FormGroup>
        </Col>
      </Row>

      <FormGroup>
        <ControlLabel>
          Telephone (to receive updates on your order)
        </ControlLabel>
        <Field component={FieldCompatibleFormControl} name="phoneNumber" type="tel" placeholder="1234567890"/>
      </FormGroup>
    </div>
  )
};
