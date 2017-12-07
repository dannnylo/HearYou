// @flow
import ElectronStore from 'electron-store'
import { ADD_EPISODE, REMOVE_EPISODE, LOAD_EPISODES, ADD_EPISODES } from '../actions/episode';
// import EpisodeItem from '../components/EpisodeItem';

export type episodeStateType = {
  +episodes: array
};

type actionType = {
  +type: string,
  episodes: array,
  item: object,
  itemId: object
};

export default function episodeReducer(state = [], action: actionType) {
  const electronStore = new ElectronStore();

  switch (action.type) {
    case LOAD_EPISODES:
      if (action.episodes == null) { return []; }
      return action.episodes;
    case ADD_EPISODES:
      electronStore.set('episodes_' + action.podcastId, action.episodes)
      return action.episodes;
    // case ADD_EPISODE:
    //   const newEpisode = [].concat(state)
    //   newEpisode.push(action.item)
    //   electronStore.set('episodes', newEpisode)
    //   return newEpisode;
    // case REMOVE_EPISODE:
    //   const reducedEpisode = state.filter((item) => { return item.id != action.itemId })
    //   electronStore.set('episodes', reducedEpisode)
    //   return reducedEpisode;
    default:
      return state;
  }
}
