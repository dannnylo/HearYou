// @flow
import ElectronStore from 'electron-store'
import { ADD_ITEM, REMOVE_ITEM, LOAD_PLAYLIST } from '../actions/playlist';

export type playlistStateType = {
  +playlist: array
};

type actionType = {
  +type: string,
  playlist: array,
};

export default function playlistReducer(state = [], action: actionType) {
  switch (action.type) {
    case LOAD_PLAYLIST:
      return action.playlist
    case ADD_ITEM:
      var newPlaylist = [].concat(state);
      if (action.start){
        newPlaylist = newPlaylist.map((item) => {
          return Object.assign(item, { play: false })
        })
      }
      newPlaylist.push(Object.assign(action.item, { play: action.play }));
      (new ElectronStore()).set('playlist', newPlaylist);
      return newPlaylist;
    // case REMOVE_ITEM:
      // var newPlaylist = [].concat(state.playlist)
      // newPlaylist.reduce((item) => { return (item.id != action.itemId); })
      // electronStore.set('playlist', newPlaylist)
      // return newPlaylist;
    default:
      return [];
  }
}
