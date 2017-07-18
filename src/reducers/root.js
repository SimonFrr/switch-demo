import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import progress from './progress'

const rootReducer = combineReducers({
  progress,
  form
})

export default rootReducer;
