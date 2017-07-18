import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import progress from './progress'
import plan from './plan'

const rootReducer = combineReducers({
  progress,
  plan,
  form
})

export default rootReducer;
