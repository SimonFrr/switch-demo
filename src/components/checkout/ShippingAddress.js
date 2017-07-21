import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, formValueSelector, FormSection } from 'redux-form';
import {
  Panel,
  FormGroup
} from 'react-bootstrap';
import { FieldCompatibleCheckbox } from '../generic/FieldCompatibleControls';
import AdressForm from '../generic/AddressForm';

const ShippingAddress = ({ isShippingSameAsBilling }) => {
  const content = isShippingSameAsBilling || (
    <FormSection name="shipping">
      <AdressForm/>
    </FormSection>
  );

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
};

const mapStateToProps = state => ({
  isShippingSameAsBilling: formValueSelector('checkout')(state, 'isShippingSameAsBilling')
});

const ConnectedShippingAddress = compose(
  connect(mapStateToProps)
)(ShippingAddress);

export default ConnectedShippingAddress;
