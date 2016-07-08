import { FETCH_USERS } from './constants';

export function fetchUsers() {
  return {
    type: FETCH_USERS,
    // hard coding user data
    payload: [
      {
        name: 'Jane',
        work: 'Cheese Factory',
      },
      {
        name: 'Alex',
        work: 'ACME Anvil',
      },
      {
        name: 'Jim',
        work: 'Road Warrior Construction',
      },
    ],
  };
}
