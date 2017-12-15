// @flow
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
const baseState = {
  playlist: [],
  podcasts: [],
  episodes: [],
  general: { loading: false }
};

const history = createBrowserHistory();
const router = routerMiddleware(history);
const enhancer = applyMiddleware(thunk, router);

function configureStore(initialState?: baseState) {
  return createStore(rootReducer, initialState, enhancer);
}

export default { configureStore, history };
