// @flow
import React, { Component } from 'react';
import { Header, Image, Table, Button } from 'semantic-ui-react';

export default class PodcastItem extends Component {
  render() {
    const item = this.props.item;
    return (
      <Table.Row key={item.id}>
        <Table.Cell>
          <Header as="h4" image>
            <Image src="https://react.semantic-ui.com/assets/images/avatar/small/mark.png" rounded size="mini" />
            <Header.Content>
              {item.title}
              <Header.Subheader>{item.url}</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>
          <Button icon="refresh" />
        </Table.Cell>
      </Table.Row>);
  }
}
