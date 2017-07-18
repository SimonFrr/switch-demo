import React from 'react';
import {connect} from 'react-redux';
import {Panel} from 'react-bootstrap';
import AddressForm from '../generic/AddressForm';

const BillingAddress = () => (
  <Panel header={< h3 > Billing Address < /h3>}>
    <form>
      <AddressForm/>
    </form>
  </Panel>
);

const ConnectedBillingAddress = connect()(BillingAddress)

export default ConnectedBillingAddress
