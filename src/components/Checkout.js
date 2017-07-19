import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  Row,
  Col,
  PageHeader,
  Alert
} from 'react-bootstrap';
import BillingAddress from './checkout/BillingAddress';
import ShippingAddress from './checkout/ShippingAddress';
import Payment from './checkout/Payment';
import Review from './checkout/Review';
import { submitCheckout } from '../actions/checkout';
import PlanDisplayer from './generic/PlanDisplayer';

const Checkout = ({ onCheckoutSubmit, planName, planPrice }) => (
  <Col xs={12}>
    <Row>
      <Col xs={12} sm={8} smOffset={2} md={12} mdOffset={0}>
        <PageHeader>Checkout</PageHeader>
        <Alert>Complete your order of {planName} (${planPrice}/m) and you will receive your SIM card within two days. You can then port in a number for free when you activate your SIM.</Alert>
      </Col>
    </Row>
    <Row>
      <Col xs={12} sm={8} smOffset={2} md={4} mdOffset={0}>
        <BillingAddress/>
        <ShippingAddress/>
      </Col>
      <Col xs={12} sm={8} smOffset={2} md={4} mdOffset={0}>
        <Payment/>
      </Col>
      <Col xs={12} sm={8} smOffset={2} md={4} mdOffset={0}>
        <Review onCheckoutSubmit={onCheckoutSubmit}/>
      </Col>
    </Row>
  </Col>
);

const mapDispatchToProps = dispatch => ({
  onCheckoutSubmit: () => dispatch(submitCheckout())
});

const ConnectedCheckout = compose(
  connect(null, mapDispatchToProps),
  PlanDisplayer
)(Checkout);

export default ConnectedCheckout
