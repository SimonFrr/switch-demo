import React from 'react';
import {Panel} from 'react-bootstrap';
import AddressForm from '../generic/AddressForm';

const BillingAddress = () => (
  <Panel header={<h3> Billing Address </h3>}>
    <AddressForm namespace="billing"/>
  </Panel>
);

export default BillingAddress;
