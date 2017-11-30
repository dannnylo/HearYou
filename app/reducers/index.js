// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import playlist from './playlist';
import podcast from './podcast';

const rootReducer = combineReducers({
  playlist,
  podcast,
  router,
});

export default rootReducer;
