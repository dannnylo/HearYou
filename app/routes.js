/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import MarketPlacePage from './containers/MarketPlacePage';
import MyPodcastsPage from './containers/MyPodcastsPage';
import DownloadsPage from './containers/DownloadsPage';
import ConfigurationsPage from './containers/ConfigurationsPage';


export default () => (
  <App>
    <Switch>
      <Route exact path="/" component={MyPodcastsPage}/>
			<Route exact path="/market_place" component={MarketPlacePage}/>
			<Route exact path="/my_podcasts" component={MyPodcastsPage}/>
			<Route exact path="/downloads" component={DownloadsPage}/>
			<Route exact path="/configurations" component={ConfigurationsPage}/>
    </Switch>
  </App>
);