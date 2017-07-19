import React from 'react';
import {Panel} from 'react-bootstrap';
import AddressForm from '../generic/AddressForm';
import { FormSection } from 'redux-form';

const BillingAddress = () => (
  <Panel header={<h3> Billing Address </h3>}>
    <FormSection name="billing">
      <AddressForm/>
    </FormSection>
  </Panel>
);

export default BillingAddress;
