// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';
import ElectronStore from 'electron-store';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as PodcastActions from '../actions/podcast';
import PodcastItem from '../components/PodcastItem';

// let podcast = [
//   {
//     id: 2,
//     url: 'https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/1hz-10khz-sweep.mp3',
//     title: 'Test',
//     duration: 0,
//     podcast: {
//       name: 'Mundo'
//     }
//   },
//   {
//     id: 3,
//     url: 'https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/walking.mp3',
//     title: 'walking',
//     duration: 0,
//     podcast: {
//       name: 'Mundo'
//     }
//   }
// ]
// this.electronStore.set('podcast', podcast)

class MyPodcastsPage extends Component {
  // props: {
  //   podcasts: PropTypes.array,
  //   electronStore: PropTypes.object,
  //   loadPodcast: PropTypes.func
  // };

  constructor(props) {
    super(props);
    this.electronStore = new ElectronStore();
  }

  componentDidMount() {
    let podcasts = this.props.electronStore.get('podcasts')
    podcasts = podcasts || []
    console.info(podcasts)
    this.props.loadPodcast(podcasts)
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
    podcast: state.podcast
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PodcastActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPodcastsPage);
