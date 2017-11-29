// @flow
import { ADD_ITEM, REMOVE_ITEM } from '../actions/playlist';

type actionType = {
  +type: string
};

export default function counter(state: { playlist: [] }, action: actionType) {
  switch (action.type) {
    case ADD_ITEM:
      return state + 1;
    case REMOVE_ITEM:
      return state - 1;
    default:
      return state;
  }
}
