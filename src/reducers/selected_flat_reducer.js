//  impoert the const select_flat
import { SELECT_FLAT } from '../actions';

export default function(state, action) {
  if (state === undefined) {
    return null;
  }
  // handle action

  // if (action.type === 'SELECT_FLAT') {
  //   return action.payload;
  // } else {
  //   return state;
  // }

  switch(action.type) {
    case SELECT_FLAT:
      return action.payload;
    default:
      return state;
  }
}
