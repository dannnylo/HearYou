// @flow
import type { episodeStateType } from "../reducers/episode";

export const ADD_EPISODE = 'ADD_EPISODE';
export const ADD_EPISODES = 'ADD_EPISODES';
export const REMOVE_EPISODE = 'REMOVE_EPISODE';
export const LOAD_EPISODES = 'LOAD_EPISODES';

export function loadEpisodes(episodes) {
  return {
    type: LOAD_EPISODES,
    episodes
  };
}

export function addEpisode(item) {
  return {
    type: ADD_EPISODE,
    item
  };
}

export function removeEpisode(itemId) {
  return {
    type: REMOVE_EPISODE,
    itemId
  };
}

export function addEpisodes(podcastId, episodes) {
  return {
    type: ADD_EPISODES,
    podcastId,
    episodes
  };
}
