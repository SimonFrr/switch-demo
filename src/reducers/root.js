import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import progress from './progress'
import planId from './plan'

const rootReducer = combineReducers({
  progress,
  planId,
  form
})

export default rootReducer;
