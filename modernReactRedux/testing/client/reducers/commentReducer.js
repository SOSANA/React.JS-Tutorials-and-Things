import { SAVE_COMMENT } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      // remember that ..state same as state.concat([action.payload])
      return [...state, action.payload];

    default:
      return state;
  }
}
