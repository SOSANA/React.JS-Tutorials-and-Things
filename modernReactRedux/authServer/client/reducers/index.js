import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './authReducer';

export default combineReducers({
  form,
  auth: authReducer,
});
