// @flow
import React, { Component } from 'react';
import Moment from 'react-moment';
import { Header, Image, Table, Button } from 'semantic-ui-react';
// import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PlaylistActions from '../../actions/playlist';
import * as DownloadActions from '../../actions/download';

class Episode extends Component {
  constructor(props) {
    super(props);
    this.playEpisode = this.playEpisode.bind(this);
    this.addToPlaylist = this.addToPlaylist.bind(this);
    this.episodeToPlaylist = this.episodeToPlaylist.bind(this);
    this.addToDownload = this.addToDownload.bind(this);
  }

  episodeToPlaylist(){
    const episode = this.props.episode;
    return {
      id: episode.guid,
      url: episode.enclosure.url,
      title: episode.title,
      duration: 0,
      podcast: this.props.podcast
    }
  }

  playEpisode() {
    this.props.addItem(this.episodeToPlaylist(), true);
  }

  addToPlaylist() {
    this.props.addItem(this.episodeToPlaylist(), false);
  }

  addToDownload() {
    this.props.addDownload(this.props.episode);
  }

  render() {
    const episode = this.props.episode;

    return (
      <Table.Row key={episode.guid}>
        <Table.Cell>
          <Header as="h4" image>
            <Image src={episode.image} rounded size="mini" />
            <Header.Content>
              {episode.title}
              <Header.Subheader>{episode.url}</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>

        <Table.Cell textAlign='right' collapsing>
          <Moment format="DD/MM/YYYY">
            {episode.published}
          </Moment>
        </Table.Cell>

        <Table.Cell textAlign='right' collapsing>
          <Button icon="play" title="Play this episode." onClick={this.playEpisode} />
          <Button icon="plus" title="Add to playlist." onClick={this.addToPlaylist} />
          <Button icon="download" title="Download this episode." onClick={this.addToDownload} />
        </Table.Cell>
      </Table.Row>);
  }
}


function mapStateToProps(state) {
  return { };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign(PlaylistActions, DownloadActions), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Episode);
