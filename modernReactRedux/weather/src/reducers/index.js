import { combineReducers } from 'redux';
import WeatherReducer from './weatherReducer';

const rootReducer = combineReducers({
  weather: WeatherReducer,
});

export default rootReducer;
