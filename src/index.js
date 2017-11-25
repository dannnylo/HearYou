import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Header from './components/Header'
import MarketPlaceList from './components/market_place/List';
import MyPodcastsList from './components/my_podcasts/List';
import DownloadsList from './components/downloads/List';
import ConfigurationsList from './components/configurations/List';
import { HashRouter, Route, Switch } from 'react-router-dom';
import NotFound from './components/errors/NotFound';

ReactDOM.render(
	(<HashRouter>
		<Switch>
			<Route exact path="/" component={App}/>
			<Route exact path="/market_place" component={MarketPlaceList}/>
			<Route exact path="/my_podcasts" component={MyPodcastsList}/>
			<Route exact path="/downloads" component={DownloadsList}/>
			<Route exact path="/configurations" component={ConfigurationsList}/>
		</Switch>
	</HashRouter>),
  document.getElementById('root')
);
