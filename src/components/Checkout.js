import React from 'react';
import { connect } from 'react-redux';
import {
  Row,
  Col,
  PageHeader,
  Alert
} from 'react-bootstrap';
import Addresses from './checkout/Addresses';
import Payment from './checkout/Payment';
import Review from './checkout/Review';

const Checkout = () => (
  <Col xs={12}>
    <Row>
      <Col xs={12} sm={8} smOffset={2} md={12} mdOffset={0}>
        <PageHeader>Checkout</PageHeader>
        <Alert>Complete your order of --selected plan-- (price) and you will receive your SIM card within two days. You can then port in a number for free when you activate your sim.</Alert>
      </Col>
    </Row>
    <Row>
      <Col xs={12} sm={8} smOffset={2} md={4} mdOffset={0}>
        <Addresses/>
      </Col>
      <Col xs={12} sm={8} smOffset={2} md={4} mdOffset={0}>
        <Payment/>
      </Col>
      <Col xs={12} sm={8} smOffset={2} md={4} mdOffset={0}>
        <Review/>
      </Col>
    </Row>
  </Col>
);

const ConnectedCheckout = connect()(Checkout)

export default ConnectedCheckout
