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
        <Field component={FieldCompatibleSelect} name="cardType">
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
        <Field component={FieldCompatibleFormControl} name="cardHolderName" placeholder="John Doe"/>
      </FormGroup>

      <FormGroup>
        <ControlLabel>
          Credit / Debit Card Number
        </ControlLabel>
        <Field component={FieldCompatibleFormControl} name="cardNumber" placeholder="xxxx xxxx xxxx xxxx"/>
      </FormGroup>

      <Row>
        <Col xs={4}>
          <FormGroup>
            <ControlLabel>
              Exp. Month
            </ControlLabel>
            <Field component={FieldCompatibleSelect} name="expirationMonth">
              <option disabled value="placeholder"> -- </option>
              {months.map((month, index) => <option key={index} value={month}>{month}</option>)}
            </Field>
          </FormGroup>
        </Col>
        <Col xs={4}>
          <FormGroup>
            <ControlLabel>
              Exp. Year
            </ControlLabel>
            <Field component={FieldCompatibleSelect} name="expirationYear">
              <option disabled value="placeholder"> -- </option>
              {years.map((year, index) => <option key={index} value={year}>{year}</option>)}
            </Field>
          </FormGroup>
        </Col>
        <Col xs={4}>
          <FormGroup>
            <ControlLabel>
              CVV
            </ControlLabel>
            <Field component={FieldCompatibleFormControl} name="verificationNumber" placeholder="123"/>
          </FormGroup>
        </Col>
      </Row>
    </FormSection>
  </Panel>
);

export default Payment;
