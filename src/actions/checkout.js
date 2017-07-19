export function submitCheckout (values) {
  console.log(values);
  // API call
  return {
    type: 'API_VALIDATED_PAYMENT'
  }
}
