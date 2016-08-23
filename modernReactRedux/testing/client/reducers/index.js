import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  comments: (state = []) => state,
});

export default rootReducer;
