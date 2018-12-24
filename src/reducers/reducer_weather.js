import { FETCH_WEATHER } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return action.payload.status === 200
        ? [action.payload.data, ...state]
        : state;
    default:
      return state;
  }
}
