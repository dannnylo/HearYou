// @flow
import ElectronStore from 'electron-store'
import { ADD_ITEM, REMOVE_ITEM, LOAD_PODCASTS } from '../actions/podcast';
import PodcastItem from '../components/PodcastItem';

export type podcastStateType = {
  +podcast: array
};

type actionType = {
  +type: string,
  podcasts: array,
  item: PodcastItem,
  itemId: string
};

export default function podcastReducer(state: podcast = [], action: actionType) {
  const electronStore = new ElectronStore();

  switch (action.type) {
    case LOAD_PODCASTS:
      return action.podcasts;
    case ADD_ITEM:
      const newPodcast = [].concat(state.podcast)
      newPodcast.push(action.item)
      electronStore.set('podcast', newPodcast)
      return newPodcast;
    case REMOVE_ITEM:
      const reducedPodcast = [].concat(state.podcast)
      reducedPodcast.reduce((item) => { return (item.id != action.itemId)})
      electronStore.set('podcast', reducedPodcast)
      return reducedPodcast;
    default:
      return state;
  }
}
