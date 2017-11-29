// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import playlist from './playlist';

const rootReducer = combineReducers({
  playlist,
  router,
});

export default rootReducer;
