import { combineReducers } from 'redux';
import WeatherReducer from './weatherReducer';

const rootReducer = combineReducers({
  Weather: WeatherReducer,
});

export default rootReducer;
