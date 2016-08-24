import { combineReducers } from 'redux';
import commentReducer from './commentReducer';

const rootReducer = combineReducers({
  comments: commentReducer,
});

export default rootReducer;
