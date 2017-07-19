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
    name: 'Light Plan',
    price: 9
  }, {
    id: 'b',
    name: 'Standard Plan',
    price: 19
  }, {
    id: 'c',
    name: 'Data Hungry Plan',
    price: 39
  }
];

const getPlanFromId = id => planList.find(el => el.id === id);
export const hasPlanWithId = id => !!getPlanFromId(id);

const getPlanId = state => state.planId;
const getPlan = state => getPlanFromId(getPlanId(state));
export const getPlanName = state => getPlan(state).name;
export const getPlanPrice = state => getPlan(state).price;
