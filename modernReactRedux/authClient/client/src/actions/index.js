import axios from 'axios';
import { browserHistorhy } from 'react-router';
import { AUTH_USER } from './constants';

const ROOT_URL = 'http://localhost:8089';

export function signinUser({ email, password }) {
  return (dispatch) => {
    // submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password })
    .then(res => {
      // if request is good...
      // update to state to indicate user is authenticated
      dispatch({ type: AUTH_USER });
      // save the JWT token
      // redirect to the route '/feature'
      browserHistorhy.push('/feature');
    })
    .catch(() => {
      // if request is bad...ls

      // show an error to the user
    });
  };
}
