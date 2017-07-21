import { event } from '../gaHelper';

// Temp function to mock API calls and their responses
const fetchStub = behavior => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (behavior) {
        case 'success':
          return resolve({ok: true});
        case 'failure':
          return resolve({ok: false});
        case 'exception':
        default:
          return reject();
      }
    }, 3000);
  })
};

// Uses redux-thunk
export function submitCheckout (values) {
  return function(dispatch) {
    event('checkout submitted');
    dispatch({ type: 'USER_SUBMITTED_CHECKOUT' });

    // replace fetchStub(behavior) with API calls
    return fetchStub('success').then(response => {
      if (response.ok) {
        event('checkout successful');
        return dispatch({ type: 'API_VALIDATED_CHECKOUT' });
      }
      event('checkout rejected');
      return dispatch({ type: 'API_REJECTED_CHECKOUT' });
    }).catch(error => {
      event('checkout failed');
      return dispatch({ type: 'CHECKOUT_FAILED' });
    });
  }
};
