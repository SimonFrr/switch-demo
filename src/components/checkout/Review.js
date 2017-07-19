import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  Panel,
  Button
} from 'react-bootstrap';
import PlanDisplayer from '../generic/PlanDisplayer';

const Review = ({ onCheckoutSubmit, planName, planPrice }) => (
  <Panel header={< h3 > Checkout Review < /h3>}>
    <p>
      {planName}
      <span className="pull-right">${planPrice}</span>
    </p>
    <p>
      SIM Card
      <span className="pull-right">$0</span>
    </p>
    <p>
      Taxes
      <span className="pull-right">$0</span>
    </p>
    <p>
      Shipping
      <span className="pull-right">$0</span>
    </p>
    <p>
      Activation Fee
      <span className="pull-right">$0</span>
    </p>
    <hr/>
    <p>
      <strong>
        Total
        <span className="pull-right">${planPrice}</span>
      </strong>
    </p>
    <br/>
    <Button bsStyle="primary" bsSize="large" block onClick={onCheckoutSubmit}>
      Place Order
    </Button>
  </Panel>
);

const ConnectedReview = compose(
  connect(),
  PlanDisplayer
)(Review);

export default ConnectedReview
