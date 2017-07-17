export default function(state = 'checkout', action) {
  switch (action.type) {
    case 'API_VALIDATED_REGISTRATION':
      return 'checkout';
    case 'API_VALIDATED_PAYMENT':
      return 'confirmation';
    default:
      return state;
  }
}

export const getProgress = state => state.progress;
