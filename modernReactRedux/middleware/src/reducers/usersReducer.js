import { FETCH_USERS } from '../actions/constants';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_USERS:
      // spread operator takes existing state and concats on our new list of users
      return [...state, ...action.payload];
    default:
      return state;
  }
}
