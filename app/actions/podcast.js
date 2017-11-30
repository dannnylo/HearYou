// @flow
import type { podcastStateType } from "../reducers/podcast";

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const LOAD_PODCASTS = 'LOAD_PODCASTS';

export function loadPodcast(podcasts) {
  return {
    type: LOAD_PODCASTS,
    podcasts
  };
}

export function addItem(item) {
  return {
    type: ADD_ITEM,
    item
  };
}

export function removeItem(itemId) {
  return {
    type: REMOVE_ITEM,
    itemId
  };
}
