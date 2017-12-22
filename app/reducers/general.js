// @flow
import { LOADING } from '../actions/general';


type actionType = {
  +type: string,
  // loading: boolean,
};

export default function playlistReducer(state = { loading: false }, action: actionType) {
  switch (action.type) {
    case LOADING:
      return {
        loading: action.loading
      }
    default:
      return { loading: false };
  }
}
