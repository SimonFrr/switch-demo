// Uses redux-thunk
export function submitCheckout (values) {
  return function(dispatch) {
    dispatch({ type: 'USER_SUBMITTED_CHECKOUT' });
    // Make async requests
    setTimeout(() => dispatch({ type: 'API_VALIDATED_PAYMENT' }), 5000);
  }
}
