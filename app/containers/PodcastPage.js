// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ElectronStore from 'electron-store'
import { bindActionCreators } from 'redux';

import * as EpisodesActions from "../actions/episode";

import { Sidebar, Segment, Table, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

import Episode from "../components/podcasts/Episode";

class PodcastPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadEpisodes(new ElectronStore().get('episodes_' + this.props.podcastId, []))
  }

  render() {
    const podcast = this.props.podcast;

    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='thin' visible="true" icon='labeled' vertical inverted >
            <Image src={podcast.cover} />
            {podcast.title}
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3'>O id do meu podcast é {podcast.title}</Header>
              <Table striped celled>
                <Table.Body>
                  {
                    this.props.episodes.map((episode) => {
                      console.info(episode)
                      return (<Episode key={episode.id} eppisode={episode} />);
                    })
                  }
                </Table.Body>
              </Table>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const podcastId = parseInt(props.match.params.id, 10);
  var podcasts = state.podcasts;
  if (podcasts.length == 0) {
    podcasts = (new ElectronStore()).get('podcasts', [])
  }

  return {
    episodes: state.episodes,
    podcastId: podcastId,
    podcast: podcasts.filter((podcast) => { return podcast.id == podcastId })[0]
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(EpisodesActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PodcastPage);
