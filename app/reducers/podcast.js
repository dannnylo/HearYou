// @flow
import ElectronStore from 'electron-store'
import { ADD_ITEM, REMOVE_ITEM, LOAD_PODCASTS } from '../actions/podcast';
import PodcastItem from '../components/PodcastItem';

export type podcastStateType = {
  +podcasts: array
};

type actionType = {
  +type: string,
  podcasts: array,
  // item: PodcastItem,
  // itemId: string
};

export default function podcastReducer(state: podcasts = [], action: actionType) {
  const electronStore = new ElectronStore();

  switch (action.type) {
    case LOAD_PODCASTS:
      return action.podcasts;
    // case ADD_ITEM:
    //   const newPodcasts = [].concat(state.podcasts)
    //   newPodcasts.push(action.item)
    //   electronStore.set('podcasts', newPodcasts)
    //   return newPodcasts;
    // case REMOVE_ITEM:
    //   const reducedPodcasts = [].concat(state.podcast)
    //   reducedPodcasts.reduce((item) => { return (item.id != action.itemId)})
    //   electronStore.set('podcasts', reducedPodcasts)
    //   return reducedPodcasts;
    default:
      return state;
  }
}
