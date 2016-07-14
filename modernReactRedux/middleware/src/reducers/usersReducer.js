import { FETCH_USERS } from '../actions/constants';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_USERS:
      // shows are action.payload object with data array
      // console.log(action.payload);
      // spread operator takes existing state and concats on our new list of users
      return [...state, ...action.payload.data];
    default:
      return state;
  }
}
