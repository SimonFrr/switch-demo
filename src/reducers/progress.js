export const progressDict = {
  REGISTRATION: 'REGISTRATION',
  CHECKOUT: 'CHECKOUT',
  CONFIRMATION: 'CONFIRMATION'
}

export default function(state = progressDict.REGISTRATION, action) {
  switch (action.type) {
    case 'API_VALIDATED_REGISTRATION':
      return progressDict.CHECKOUT;
    case 'API_VALIDATED_CHECKOUT':
      return progressDict.CONFIRMATION;
    default:
      return state;
  }
}

export const getProgress = state => state.progress;
