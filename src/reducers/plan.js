export default function(state = null, action) {
  switch (action.type) {
    case 'SAVE_QUERY_PARAMS':
      return action.plan;
    default:
      return state;
  }
}
