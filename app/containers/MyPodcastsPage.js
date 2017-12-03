// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'semantic-ui-react';
import ElectronStore from 'electron-store'
import { bindActionCreators } from 'redux';

import * as PodcastActions from "../actions/podcast";
import { loadPodcast } from "../actions/podcast";

import PodcastItem from "../components/PodcastItem"
import NewPodcast from "../components/podcasts/NewPodcast"

class MyPodcastsPage extends Component {
  // props: {
  //   podcast: 'Array'
  // };

  componentDidMount() {
    this.props.loadPodcast(new ElectronStore().get('podcasts', []))
  }

  render() {
    return (
      <div>
        <NewPodcast />
        <Table striped celled>
          <Table.Body>
            {
              this.props.podcasts.map((item) => {
                return (<PodcastItem key={item.id} item={item} />);
              })
            }
          </Table.Body>
        </Table>
      </div>
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
