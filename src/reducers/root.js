import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import progress from './progress'
import loading from './loading'
import planId from './plan'

const rootReducer = combineReducers({
  progress,
  loading,
  planId,
  form
})

export default rootReducer;
