export default function(state = 'registration', action) {
  switch (action.type) {
    case 'USER_SUBMITTED_REGISTRATION':
      return 'checkout';
    default:
      return state;
  }
}

export const getProgress = state => state.progress;
