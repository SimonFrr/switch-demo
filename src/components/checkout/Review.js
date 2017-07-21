import React from 'react';
import { compose } from 'redux';
import {
  Panel,
  Button
} from 'react-bootstrap';
import PlanDisplayer from '../generic/PlanDisplayer';

const Review = ({ planName, planPrice }) => (
  <Panel header={< h3 > Checkout Review < /h3>}>
    <p>
      {planName}
      <span className="pull-right">${planPrice}</span>
    </p>
    <p>
      Taxes
      <span className="pull-right">incl.</span>
    </p>
    <hr/>
    <p>
      SIM Card
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
        Grand Total
        <span className="pull-right">${planPrice}</span>
      </strong>
    </p>
    <br/>
    <Button type="submit" bsStyle="success" bsSize="large" block>
      Place Order
    </Button>
  </Panel>
);

const ConnectedReview = compose(
  PlanDisplayer
)(Review);

export default ConnectedReview
