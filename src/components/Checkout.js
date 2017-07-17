import React from 'react';
import { connect } from 'react-redux';
import {
  Col,
  PageHeader,
  Panel
} from 'react-bootstrap';
import Addresses from './Addresses';
import Payment from './Payment';
import Review from './Review';

const Checkout = ({ }) => (
  <div>
    <Col xs={12}>
      <PageHeader>Checkout</PageHeader>
    </Col>
    <Col lg={4}>
      <Addresses/>
    </Col>
    <Col lg={4}>
      <Payment/>
    </Col>
    <Col lg={4}>
      <Review/>
    </Col>
  </div>
);

const ConnectedCheckout = connect()(Checkout)

export default ConnectedCheckout
