// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import playlist from './playlist';
import podcasts from './podcast';
import episodes from './episode';
import general from './general';

const rootReducer = combineReducers({
  playlist,
  podcasts,
  episodes,
  general,
  router,
});

export default rootReducer;
