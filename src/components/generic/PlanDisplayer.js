import { connect } from 'react-redux';
import { getPlanName, getPlanPrice } from '../../reducers/plan';

const mapStateToProps = state => ({
  planName: getPlanName(state),
  planPrice: getPlanPrice(state)
});

export default ComponentToWrap => connect(mapStateToProps)(ComponentToWrap);
