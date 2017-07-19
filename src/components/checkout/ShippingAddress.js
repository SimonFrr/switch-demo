import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import {
  Panel,
  FormGroup
} from 'react-bootstrap';
import { FieldCompatibleCheckbox } from '../generic/FieldCompatibleControls';
import AdressForm from '../generic/AddressForm';

const ShippingAddress = ({ isSameAsBilling }) => {
  const content = isSameAsBilling || <AdressForm/>;

  return (
    <Panel header={<h3> Shipping Address </h3>}>
      <form>
        <FormGroup>
          <Field component={FieldCompatibleCheckbox} name="isSameAsBilling">
            Same as billing
          </Field>
        </FormGroup>

        {content}
      </form>
    </Panel>
  );
}

const selector = formValueSelector('shippingAddress');

const mapStateToProps = state => ({
  isSameAsBilling: selector(state, 'isSameAsBilling')
});

const ConnectedShippingAddress = compose(
  connect(mapStateToProps),
  reduxForm({
    form: 'shippingAddress',
    initialValues: { isSameAsBilling: true },
    destroyOnUnmount: false
  })
)(ShippingAddress);

export default ConnectedShippingAddress;
