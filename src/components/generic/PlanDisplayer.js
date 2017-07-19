// This HOC wraps the provided component in a component that fetches
// the plan info to be displayed, and passed it down as props

import { connect } from 'react-redux';
import { getPlanName, getPlanPrice } from '../../reducers/plan';

const mapStateToProps = state => ({
  planName: getPlanName(state),
  planPrice: getPlanPrice(state)
});

export default ComponentToWrap => connect(mapStateToProps)(ComponentToWrap);
