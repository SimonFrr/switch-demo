export default function(state = false, action) {
  switch (action.type) {
    case 'USER_SUBMITTED_CHECKOUT':
      return true;
    case 'API_VALIDATED_CHECKOUT':
    case 'API_REJECTED_CHECKOUT':
    case 'CHECKOUT_FAILED':
      return false;
    default:
      return state;
  }
};

export const isLoading = state => state.loading;
