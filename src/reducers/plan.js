export default function(state = "a", action) {
  switch (action.type) {
    case 'SAVE_QUERY_PARAMS':
      return action.planId;
    default:
      return state;
  }
}

const planList = [{
    id: 'a',
    name: 'Light plan',
    price: '$9/m'
  }, {
    id: 'b',
    name: 'Standard plan',
    price: '$19/m'
  }, {
    id: 'c',
    name: 'Data Hungry plan',
    price: '$39/m'
  }
];

export const getPlanId = state => state.planId;
const getPlanFromId = id => planList.find(el => el.id === id);
const getPlan = state => getPlanFromId(getPlanId(state));
export const getPlanName = state => getPlan(state).name;
export const getPlanPrice = state => getPlan(state).price;
