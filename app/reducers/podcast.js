// @flow
import ElectronStore from 'electron-store'
import { ADD_PODCAST, REMOVE_PODCAST, LOAD_PODCASTS } from '../actions/podcast';
import PodcastItem from '../components/PodcastItem';

export type podcastStateType = {
  +podcasts: array
};

type actionType = {
  +type: string,
  podcasts: array,
  item: object,
  itemId: object
};

export default function podcastReducer(state = [], action: actionType) {
  const electronStore = new ElectronStore();

  switch (action.type) {
    case LOAD_PODCASTS:
      console.info('LOAD', action.podcasts)
      return action.podcasts;
    case ADD_PODCAST:
      const newPodcast = [].concat(state)
      newPodcast.push(action.item)
      electronStore.set('podcasts', newPodcast)
      return newPodcast;
    case REMOVE_PODCAST:
      const reducedPodcast = [].concat(state.podcast)
      reducedPodcast.reduce((item) => { return (item.id != action.itemId)})
      electronStore.set('podcasts', reducedPodcast)
      return reducedPodcast;
    default:
      return state;
  }
}
