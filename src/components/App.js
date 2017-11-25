import React, { Component } from 'react';
import Header from './Header'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}
