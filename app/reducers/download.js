// @flow
import ElectronStore from 'electron-store';
import { ADD_DOWNLOAD, REMOVE_DOWNLOAD, LOAD_DOWNLOADS } from '../actions/download';

export type downloadStateType = {
  +downloads: array
};

type actionType = {
  +type: string,
  downloads: array,
  item: object,
  itemId: object
};

export default function downloadReducer(state = [], action: actionType) {
  const electronStore = new ElectronStore();

  switch (action.type) {
    case LOAD_DOWNLOADS:
      if (action.downloads == null) { return []; }
      return action.downloads;
    case ADD_DOWNLOAD:
      const newDownload = [].concat(state);
      newDownload.push(action.item);
      electronStore.set('downloads', newDownload);
      return newDownload;
    case REMOVE_DOWNLOAD:
      const reducedDownload = state.filter((item) => { return item.id != action.itemId })
      electronStore.set('downloads', reducedDownload)
      return reducedDownload;
    default:
      return state;
  }
}
