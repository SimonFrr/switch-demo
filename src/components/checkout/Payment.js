import React from 'react';
import {
  Row,
  Col,
  Panel,
  FormGroup,
  ControlLabel,
  Alert
} from 'react-bootstrap';
import { Field, FormSection } from 'redux-form';
import { FieldCompatibleSelect, FieldCompatibleFormControl } from '../generic/FieldCompatibleControls';

const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
const years = [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028];

const Payment = () => (
  <Panel header={<h3> Payment Method </h3>}>
    <FormSection name="payment">
      <FormGroup>
        <ControlLabel>
          Credit / Debit Card Type
        </ControlLabel>
        <Field component={FieldCompatibleSelect} name="cardType">
          <option value="visa">visa</option>
          <option value="mastercard">mastercard</option>
          <option value="amex">amex</option>
        </Field>
      </FormGroup>

      <FormGroup>
        <ControlLabel>
          Credit / Debit Card Number
        </ControlLabel>
        <Field component={FieldCompatibleFormControl} name="cardNumber"/>
      </FormGroup>

      <Row>
        <Col xs={6}>
          <FormGroup>
            <ControlLabel>
              Expiration Month
            </ControlLabel>
            <Field component={FieldCompatibleSelect} name="expirationMonth">
              <option disabled selected value> -- select -- </option>
              {months.map((month, index) => <option key={index} value={month}>{month}</option>)}
            </Field>
          </FormGroup>
        </Col>
        <Col xs={6}>
          <FormGroup>
            <ControlLabel>
              Expiration Year
            </ControlLabel>
            <Field component={FieldCompatibleSelect} name="expirationYear">
              <option disabled selected value> -- select -- </option>
              {years.map((year, index) => <option key={index} value={year}>{year}</option>)}
            </Field>
          </FormGroup>
        </Col>
      </Row>

      <FormGroup>
        <ControlLabel>
          Card Verification Number
        </ControlLabel>
        <Field component={FieldCompatibleFormControl} name="verificationNumber"/>
      </FormGroup>

      <Alert>
        You will be enrolled in Auto Pay
      </Alert>
    </FormSection>
  </Panel>
);

export default Payment
