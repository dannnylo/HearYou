// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';
import ElectronStore from 'electron-store'
import { bindActionCreators } from 'redux';

import * as PodcastActions from "../actions/podcast";
import { loadPodcast } from "../actions/podcast";

import PodcastItem from "../components/PodcastItem"

// var electronStore = new ElectronStore();
// let podcasts = [
//   {
//     id: 2,
//     url: 'http://www.mundofreak.com.br/feed/podcast/',
//     title: 'Mundo Freak'
//   },
// ]
// electronStore.set('podcasts', podcasts)

class MyPodcastsPage extends Component {
  // props: {
  //   podcast: 'Array'
  // };

  constructor(props) {
    super(props);
    this.electronStore = new ElectronStore();
  }

  componentDidMount() {
    let podcast = this.electronStore.get('podcasts')
    podcast = podcast || []
    this.props.loadPodcast(podcast)
  }

  render() {
    return (
      <Table striped celled>
        <Table.Body>
          {
            this.props.podcasts.map((item) => {
              return (<PodcastItem key={item.id} item={item} />);
            })
          }
        </Table.Body>
      </Table>
    );
  }
}

function mapStateToProps(state) {
  return {
    podcasts: state.podcasts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PodcastActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPodcastsPage);
