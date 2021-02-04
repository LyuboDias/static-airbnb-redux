//  impoert the const set_flat
import { SET_FLATS } from '../actions';

export default function(state, action) {
// compute and return the new state
  if (state === undefined) {
    return []
  }
  // handle actions
  // if (action.type === 'SET_FLATS') {
  //   return action.payload;
  // } else {
  //   return state;
  // }

  // switch statement
  switch(action.type) {
    case SET_FLATS:
      return action.payload;
    default:
      return state;
  }
}
