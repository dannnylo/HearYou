// @flow
import React, { Component } from 'react';
import { Header, Image, Table, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import * as PodcastActions from '../actions/podcast';

class Episode extends Component {
  constructor(props) {
    super(props);
    this.playEpisode = this.playEpisode.bind(this);
  }

  playEpisode() {
    // this.props.removePodcast(this.props.item.id);
  }

  render() {
    const episode = this.props.episode;
    console.info(episode)
    return (
      <Table.Row key={episode.guid}>
        <Table.Cell>
          <Header as="h4" image>
            <Image src={episode.cover} rounded size="mini" />
            <Header.Content>
              {episode.title}
              <Header.Subheader>{episode.url}</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>
          {episode.published}
        </Table.Cell>
        <Table.Cell collapsing>
          <Button icon="refresh" />
          <Button icon="remove" onClick={this.playEpisode} />
        </Table.Cell>
      </Table.Row>);
  }
}


// function mapStateToProps(state) {
//   return { };
// }
//
// fun// ction mapDispatchToProps(dispatch) {
//   return bindActionCreators(PodcastActions, dispatch);
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(PodcastItem);
export default Episode
