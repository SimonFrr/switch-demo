import React from 'react';
import { connect } from 'react-redux';
import { getPlanName, getPlanPrice } from '../../reducers/plan';

const HOC = ComponentToWrap => ({ planName, planPrice }) => {
  return <ComponentToWrap planName={planName} planPrice={planPrice}/>
};

const mapStateToProps = state => ({
  planName: getPlanName(state),
  planPrice: getPlanPrice(state)
});

export default ComponentToWrap => connect(mapStateToProps)(HOC(ComponentToWrap));
