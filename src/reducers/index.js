import { combineReducers } from 'redux';
import userReducer from './userReducer';
import recordReducer from './recordReducer';

const rootReducer = combineReducers({
  userReducer,
  recordReducer,
});

export default rootReducer;
