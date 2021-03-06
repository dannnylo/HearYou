// @flow
import React, { Component } from 'react';
import { Header, Image, Table, Button } from 'semantic-ui-react';

export default class PlaylistItem extends Component {
  render() {
    let item = this.props.item
    return (
      <Table.Row key={item.id}>
        <Table.Cell>
          <Header as="h4" image>
            <Image src={item.podcast.cover} rounded size="mini" />
            <Header.Content>
              {item.title}
              <Header.Subheader>{item.podcast.title}</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell collapsing>
          <Button icon="play" />
        </Table.Cell>
      </Table.Row>)
  }
}
