import { FETCH_USERS } from './constants';

export function fetchUsers() {
  return {
    type: FETCH_USERS,
    // hard coding user data
    payload: [
      { name: 'Jane' },
      { name: 'Alex' },
      { name: 'Jim' },
    ],
  };
}
