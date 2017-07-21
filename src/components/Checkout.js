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
import ErrorMessage from './checkout/ErrorMessage';
import { submitCheckout } from '../actions/checkout';
import PlanDisplayer from './generic/PlanDisplayer';
import { reduxForm } from 'redux-form';

const Checkout = ({ handleSubmit, planName, planPrice }) => (
  <Col xs={12}>
    <Row>
      <Col xs={12} sm={8} smOffset={2} md={12} mdOffset={0}>
        <p className="text-center header-p">
          Complete your order of <strong>{planName} (${planPrice}/m)</strong> and you will receive your SIM card within two days.
          <br/>
          You can then port in a number for free when you activate your SIM.
        </p>
        <p className="text-center header-p">
          <strong>Step 2/2 - Checkout</strong>
        </p>
        <ErrorMessage/>
      </Col>
    </Row>
    <Row>
      <form onSubmit={handleSubmit}>
        <Col xs={12} sm={8} smOffset={2} md={4} mdOffset={0}>
          <BillingAddress/>
          <ShippingAddress/>
        </Col>
        <Col xs={12} sm={8} smOffset={2} md={4} mdOffset={0}>
          <Payment/>
        </Col>
        <Col xs={12} sm={8} smOffset={2} md={4} mdOffset={0}>
          <Review/>
        </Col>
      </form>
    </Row>
  </Col>
);

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(submitCheckout(values))
});

const ConnectedCheckout = compose(
  connect(null, mapDispatchToProps),
  PlanDisplayer,
  reduxForm({
    form: 'checkout',
    destroyOnUnmount: false,
    initialValues: {
      isShippingSameAsBilling: true,
      payment: {
        cardType: 'placeholder',
        expirationMonth: 'placeholder',
        expirationYear: 'placeholder'
      }
    }
  })
)(Checkout);

export default ConnectedCheckout
