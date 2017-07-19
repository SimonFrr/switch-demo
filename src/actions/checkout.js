export function submitCheckout (values) {
  return function(dispatch) {
    dispatch({ type: 'USER_SUBMITTED_CHECKOUT' });
    setTimeout(() => dispatch({ type: 'API_VALIDATED_PAYMENT' }), 5000);
  }
}
