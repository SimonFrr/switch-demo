import React from 'react';
import { connect } from 'react-redux';
import {
  Row,
  Col,
  PageHeader
} from 'react-bootstrap';
import Addresses from './Addresses';
import Payment from './Payment';
import Review from './Review';

const Checkout = () => (
  <Col xs={12}>
    <Row>
      <Col xs={12} sm={8} smOffset={2} md={12} mdOffset={0}>
        <PageHeader>Checkout</PageHeader>
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
