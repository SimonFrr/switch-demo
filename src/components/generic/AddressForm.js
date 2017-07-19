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

export default ({ namespace }) => {
  const namespaced = name => `${namespace}.${name}`;
  return (
    <div>
      <Row>
        <Col xs={6}>
          <FormGroup>
            <ControlLabel>
              First Name
            </ControlLabel>
            <Field component={FieldCompatibleFormControl} name={namespaced('firstName')} type="text" placeholder="John"/>
          </FormGroup>
        </Col>
        <Col xs={6}>
          <FormGroup>
            <ControlLabel>
              Middle Name / Initials
            </ControlLabel>
            <Field component={FieldCompatibleFormControl} name={namespaced('middleName')} type="text" placeholder="A."/>
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col xs={6}>
          <FormGroup>
            <ControlLabel>
              Last Name
            </ControlLabel>
            <Field component={FieldCompatibleFormControl} name={namespaced('lastName')} type="text" placeholder="Doe"/>
          </FormGroup>
        </Col>
      </Row>

      <FormGroup>
        <ControlLabel>
          Email Address
        </ControlLabel>
        <Field component={FieldCompatibleFormControl} name={namespaced('emailAddress')} type="email" placeholder="you@world.com"/>
      </FormGroup>

      <FormGroup>
        <ControlLabel>
          Address
        </ControlLabel>
        <Field component={FieldCompatibleFormControl} name={namespaced('addressLine1')} type="text" placeholder="123 Sesame Street"/>
      </FormGroup>

      <FormGroup>
        <Field component={FieldCompatibleFormControl} name={namespaced('addressLine2')} type="text" placeholder="Building A"/>
      </FormGroup>

      <Row>
        <Col xs={6}>
          <FormGroup>
            <ControlLabel>
              Zip
            </ControlLabel>
            <Field component={FieldCompatibleFormControl} name={namespaced('zipCode')} type="text" placeholder="10001"/>
          </FormGroup>
        </Col>
        <Col xs={6}>
          <FormGroup>
            <ControlLabel>
              City
            </ControlLabel>
            <Field component={FieldCompatibleFormControl} name={namespaced('city')} type="text" placeholder="NYC"/>
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
            <Field component={FieldCompatibleFormControl} name={namespaced('stateOrProvince')} type="text" placeholder="Delaware"/>
          </FormGroup>
        </Col>
      </Row>

      <FormGroup>
        <ControlLabel>
          Telephone (to receive updates on your order)
        </ControlLabel>
        <Field component={FieldCompatibleFormControl} name={namespaced('phoneNumber')} type="tel" placeholder="234323432"/>
      </FormGroup>
    </div>
  )
};
