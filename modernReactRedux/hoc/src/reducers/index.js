import { combineReducers } from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  authenticated: authReducer,
});

export default rootReducer;
