// @flow
import React, { Component } from 'react';
import Moment from 'react-moment';
import { Header, Image, Table, Button } from 'semantic-ui-react';
// import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PlaylistActions from '../../actions/playlist';

class Episode extends Component {
  constructor(props) {
    super(props);
    this.playEpisode = this.playEpisode.bind(this);
    this.addToPlaylist = this.addToPlaylist.bind(this);
    this.episodeToPlaylist = this.episodeToPlaylist.bind(this);
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
        </Table.Cell>
      </Table.Row>);
  }
}


function mapStateToProps(state) {
  return { };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PlaylistActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Episode);
