import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, formValueSelector } from 'redux-form';
import {
  Panel,
  FormGroup
} from 'react-bootstrap';
import { FieldCompatibleCheckbox } from '../generic/FieldCompatibleControls';
import AdressForm from '../generic/AddressForm';

const ShippingAddress = ({ isShippingSameAsBilling }) => {
  const content = isShippingSameAsBilling || <AdressForm namespace="shipping"/>;

  return (
    <Panel header={<h3> Shipping Address </h3>}>
      <FormGroup>
        <Field component={FieldCompatibleCheckbox} name="isShippingSameAsBilling">
          Same as billing
        </Field>
      </FormGroup>

      {content}
    </Panel>
  );
}

const selector = formValueSelector('checkout');

const mapStateToProps = state => ({
  isShippingSameAsBilling: selector(state, 'isShippingSameAsBilling')
});

const ConnectedShippingAddress = compose(
  connect(mapStateToProps)
)(ShippingAddress);

export default ConnectedShippingAddress;
