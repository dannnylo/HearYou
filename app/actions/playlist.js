// @flow
import type { playlistStateType } from '../reducers/playlist';

type actionType = {
  +type: string
};

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const LOAD_PLAYLIST = 'LOAD_PLAYLIST';

export function loadPlaylist(playlist) {
  return {
    type: LOAD_PLAYLIST,
    playlist: playlist
  };
}

export function addItem(item, start) {
  return {
    type: ADD_ITEM,
    item: item,
    start: start
  };
}

export function removeItem(itemId) {
  return {
    type: REMOVE_ITEM,
    itemId: itemId
  };
}
