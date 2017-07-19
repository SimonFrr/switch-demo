import React from 'react';
import { compose } from 'redux';
import {connect} from 'react-redux';
import {Panel} from 'react-bootstrap';
import AddressForm from '../generic/AddressForm';
import { reduxForm } from 'redux-form';

const BillingAddress = () => (
  <Panel header={< h3 > Billing Address < /h3>}>
    <form>
      <AddressForm/>
    </form>
  </Panel>
);

const ConnectedBillingAddress = compose(
  connect(),
  reduxForm({
    form: 'billingAddress',
    destroyOnUnmount: false
  })
)(BillingAddress);

export default ConnectedBillingAddress;
