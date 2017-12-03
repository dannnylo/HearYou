// @flow
import React, { Component } from 'react';
import { Header, Image, Table, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default class PodcastItem extends Component {
  remove() {
    console.log('TODO: remover podcast da lista')
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
          <Button as={NavLink} to={"/playlist/" + item.id} exact icon="list layout" />
          <Button icon="remove" onClick={this.remove} />
        </Table.Cell>
      </Table.Row>);
  }
}
