export default function(state = false, action) {
  switch (action.type) {
    case 'API_REJECTED_CHECKOUT':
    case 'CHECKOUT_FAILED':
      return true;
    case 'USER_SUBMITTED_CHECKOUT':
      return false;
    default:
      return state;
  }
}

export const isErrorShown = state => state.error;
