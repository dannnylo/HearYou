// @flow
import React, { Component } from 'react';
import { Header, Image, Table, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PodcastActions from '../actions/podcast';

class PodcastItem extends Component {
  constructor(props) {
    super(props);
    this.removePodcast = this.removePodcast.bind(this);
  }

  removePodcast() {
    this.props.removePodcast(this.props.item.id);
  }

  render() {
    const item = this.props.item;

    return (
      <Table.Row key={item.id}>
        <Table.Cell>
          <Header as="h4" image>
            <Image src={item.cover} rounded size="mini" />
            <Header.Content>
              {item.title}
              <Header.Subheader>{item.url}</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>

        <Table.Cell collapsing>
          <Button icon="refresh" />
          <Button as={NavLink} to={"/podcasts/" + item.id} exact icon="list layout" />
          <Button icon="remove" onClick={this.removePodcast} />
        </Table.Cell>
      </Table.Row>);
  }
}


function mapStateToProps(state) {
  return { };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PodcastActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PodcastItem);
