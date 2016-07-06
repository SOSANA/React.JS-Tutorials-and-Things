import { combineReducers } from 'redux';
import authenticationReducer from './authenticationReducer';

const rootReducer = combineReducers({
  authenticated: authenticationReducer,
});

export default rootReducer;
