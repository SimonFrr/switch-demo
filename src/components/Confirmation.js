import React from 'react';
import {
  Col,
  Glyphicon
} from 'react-bootstrap';
import tickIcon from '../tick.svg';

const imgStyle = {
  width: 100,
  marginTop: 50
}

export default () => (
  <Col xs={12} sm={8} smOffset={2} md={6} mdOffset={3} className="text-center">
    <img src={tickIcon} style={imgStyle}></img>
    <h3>Thank you for your order!</h3>
    <p>You will receive an order confirmation email with details of your order and a link to track its progress.</p>
    <p>You will receive your SIM card within 3 days. You can then port in a number for free when you activate your SIM.</p>
  </Col>
);
