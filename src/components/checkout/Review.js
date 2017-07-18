import React from 'react';
import {connect} from 'react-redux';
import {
  Panel,
  Button
} from 'react-bootstrap';

const Review = ({ onCheckoutSubmit }) => (
  <Panel header={< h3 > Checkout Review < /h3>}>
    <p>
      Selected Plan
      <span className="pull-right">$39</span>
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
        <span className="pull-right">$39</span>
      </strong>
    </p>
    <br/>
    <Button bsStyle="primary" bsSize="large" block onClick={onCheckoutSubmit}>
      Place Order
    </Button>
  </Panel>
);

const ConnectedReview = connect()(Review)

export default ConnectedReview