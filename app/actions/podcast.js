// @flow
import type { podcastStateType } from "../reducers/podcast";

export const ADD_PODCAST = 'ADD_PODCAST';
export const REMOVE_PODCAST = 'REMOVE_PODCAST';
export const LOAD_PODCASTS = 'LOAD_PODCASTS';

export function loadPodcast(podcasts) {
  return {
    type: LOAD_PODCASTS,
    podcasts
  };
}

export function addPodcast(item) {
  return {
    type: ADD_PODCAST,
    item
  };
}

export function removePodcast(itemId) {
  return {
    type: REMOVE_PODCAST,
    itemId
  };
}
