// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ElectronStore from 'electron-store'
import { bindActionCreators } from 'redux';

import * as PodcastActions from "../actions/podcast";
import { loadPodcast } from "../actions/podcast";

import { Sidebar, Segment, Table, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

class PodcastPage extends Component {
  constructor(props) {
    super(props);
    this.electronStore = new ElectronStore();
  }

  componentDidMount() {
    console.log(parseInt(this.props.match.params.id, 10));
  }

  render() {
    let podcast_id = parseInt(this.props.match.params.id, 10);
    let podcast = this.electronStore.get('podcasts')[0];
    console.log(podcast)

    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='thin' visible="true" icon='labeled' vertical inverted >
            <Image src='https://hipsters.tech/wp-content/uploads/2017/01/logo-hipsters-pontotech.svg' />
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3'>O id do meu podcast é {podcast_id}</Header>

              {/* {
                podcast.map((item) => {
                  conosole.log(item.id);
                })
              } */}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
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

export default connect(mapStateToProps, mapDispatchToProps)(PodcastPage);
