// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import playlist from './playlist';
import podcasts from './podcast';
import episodes from './episode';

const rootReducer = combineReducers({
  playlist,
  podcasts,
  episodes,
  router,
});

export default rootReducer;
