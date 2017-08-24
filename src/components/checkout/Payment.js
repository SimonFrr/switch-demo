import React from 'react';
import {
  Row,
  Col,
  Panel,
  FormGroup,
  ControlLabel
} from 'react-bootstrap';
import { Field, FormSection } from 'redux-form';
import { FieldCompatibleSelect, FieldCompatibleFormControl } from '../generic/FieldCompatibleControls';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const years = [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028];

const Payment = () => (
  <Panel header={<h3> Payment Method </h3>}>
    <FormSection name="payment">
      <FormGroup>
        <ControlLabel>
          Credit / Debit Card Type
        </ControlLabel>
        <Field component={FieldCompatibleSelect} name="cardType" autoComplete="cc-type">
          <option disabled value="placeholder"> -- select -- </option>
          <option value="visa">visa</option>
          <option value="mastercard">mastercard</option>
          <option value="amex">amex</option>
        </Field>
      </FormGroup>

      <FormGroup>
        <ControlLabel>
          Name On The Card
        </ControlLabel>
        <Field component={FieldCompatibleFormControl} name="cardHolderName" type="text" autoComplete="cc-name" placeholder="John Doe"/>
      </FormGroup>

      <FormGroup>
        <ControlLabel>
          Credit / Debit Card Number
        </ControlLabel>
        <Field component={FieldCompatibleFormControl} name="cardNumber" type="tel" autoComplete="cc-number" placeholder="xxxx xxxx xxxx xxxx"/>
      </FormGroup>

      <Row>
        <Col xs={8}>
          <FormGroup>
            <ControlLabel>
              Exp. date
            </ControlLabel>
            <Field component={FieldCompatibleFormControl} name="expirationDate" type="month" autoComplete="cc-exp"/>
          </FormGroup>
        </Col>
        <Col xs={4}>
          <FormGroup>
            <ControlLabel>
              CVV
            </ControlLabel>
            <Field component={FieldCompatibleFormControl} name="verificationNumber" type="tel" autoComplete="cc-csc" placeholder="xxx"/>
          </FormGroup>
        </Col>
      </Row>
    </FormSection>
  </Panel>
);

export default Payment;
