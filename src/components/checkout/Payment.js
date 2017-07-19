import React from 'react';
import {
  Row,
  Col,
  Panel,
  FormGroup,
  FormControl,
  ControlLabel,
  Alert
} from 'react-bootstrap';

const Payment = () => (
  <Panel header={<h3> Payment Method </h3>}>
    <FormGroup>
      <ControlLabel>
        Credit / Debit Card Type
      </ControlLabel>
      <FormControl componentClass="select">
        <option value="none">please select</option>
        <option value="visa">visa</option>
        <option value="mastercard">mastercard</option>
      </FormControl>
    </FormGroup>

    <FormGroup>
      <ControlLabel>
        Credit / Debit Card Number
      </ControlLabel>
      <FormControl type="text" placeholder="123"/>
    </FormGroup>

    <Row>
      <Col xs={6}>
        <FormGroup>
          <ControlLabel>
            Expiration Month
          </ControlLabel>
          <FormControl componentClass="select">
            <option value="none">please select</option>
            <option value="none">january</option>
          </FormControl>
        </FormGroup>
      </Col>
      <Col xs={6}>
        <FormGroup>
          <ControlLabel>
            Expiration Year
          </ControlLabel>
          <FormControl componentClass="select">
            <option value="none">please select</option>
            <option value="none">1995</option>
          </FormControl>
        </FormGroup>
      </Col>
    </Row>

    <FormGroup>
      <ControlLabel>
        Card Verification Number
      </ControlLabel>
      <FormControl type="text" placeholder="123"/>
    </FormGroup>

    <Alert>
      You will be enrolled in Auto Pay
    </Alert>
  </Panel>
);

export default Payment
