// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import playlist from './playlist';
import podcasts from './podcast';

const rootReducer = combineReducers({
  playlist,
  podcasts,
  router,
});

export default rootReducer;
