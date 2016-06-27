import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
  // also uncomment reducer to see action creator cycle
  // console.log('Action received', action);
  switch (action.type) { // eslint-disable-line
    case FETCH_WEATHER:
      // returning a new instance of our state, not mutating our state
      // return state.concat([action.payload.data]);
      // insteaed of writing state.concat we use new es6 spread operator
      return [action.payload.data, ...state];
  }
  return state;
}
