// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ElectronStore from 'electron-store'
import { bindActionCreators } from 'redux';

import * as EpisodesActions from "../actions/episode";

import { Grid, Table, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

import Episode from "../components/podcasts/Episode";
import Preview from "../components/podcasts/Preview";

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
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Preview podcast={podcast} />
          </Grid.Column>
          <Grid.Column width={12}>
            <Header as='h3'>{podcast.title}</Header>
            <Table striped celled>
              <Table.Body>
                {
                  this.props.episodes.map((episode) => {
                    return (<Episode key={episode.guid} episode={episode} podcast={this.props.podcast} />);
                  })
                }
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
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
