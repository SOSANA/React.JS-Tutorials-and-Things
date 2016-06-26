import axios from 'axios';
import { API_KEY, ROOT_URL } from '../../misc/API_KEY';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  // search query
  const url = `${ROOT_URL}&q=${city},us`;
  // creating an axios ajax request in the form a 'get' request and returns a
  // promise, than we pass that promise into the actions payload property
  const REQUEST = axios.get(url);

  // also uncomment in weatherReducer to see action creator cycle
  // console.log('Request:', REQUEST);
  return {
    type: FETCH_WEATHER,
    // returning the promise as the payload
    payload: REQUEST,
  };
}
