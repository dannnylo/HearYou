// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';
import ElectronStore from 'electron-store'
import { bindActionCreators } from 'redux';

import * as PlaylistActions from '../actions/playlist';
import { loadPlaylistDispatch, loadPlaylist } from '../actions/playlist';

import PlaylistItem from "../components/PlaylistItem"

class PlaylistPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadPlaylist((new ElectronStore()).get('playlist', []))
  }

  render() {
    return (
      <Table striped celled>
        <Table.Body>
          {this.props.playlist.map(function(item) { return (<PlaylistItem key={item.id} item={item} />); })}
        </Table.Body>
      </Table>
    );
  }
}

function mapStateToProps(state) {
  return {
    playlist: state.playlist
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PlaylistActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistPage);
