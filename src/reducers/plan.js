export default function(state = "a", action) {
  switch (action.type) {
    case 'SAVE_QUERY_PARAMS':
      return action.plan;
    default:
      return state;
  }
}

export const getPlanId = state => state.plan;
const getPlan = state => planDictionary[getPlanId(state)];
export const getPlanName = state => getPlan(state).name;
export const getPlanPrice = state => getPlan(state).price;

const planDictionary = {
  a: {
    name: 'Light plan',
    price: '$9/m'
  },
  b: {
    name: 'Standard plan',
    price: '$19/m'
  },
  c: {
    name: 'Data Hungry plan',
    price: '$39/m'
  }
}
