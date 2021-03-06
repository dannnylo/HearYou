// @flow
import type { downloadStateType } from "../reducers/download";

export const ADD_DOWNLOAD = 'ADD_DOWNLOAD';
export const REMOVE_DOWNLOAD = 'REMOVE_DOWNLOAD';
export const LOAD_DOWNLOADS = 'LOAD_DOWNLOADS';

export function loadDownload(downloads) {
  return {
    type: LOAD_DOWNLOADS,
    downloads
  };
}

export function addDownload(item) {
  return {
    type: ADD_DOWNLOAD,
    item
  };
}

export function removeDownload(itemId) {
  return {
    type: REMOVE_DOWNLOAD,
    itemId
  };
}
