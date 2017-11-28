import React, { Component } from 'react';
import Player from './player/Player';
import { Input, Menu, Segment, Icon, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom'

export default class Header extends Component {

  handleItemClick() {
    console.log('fui clicado')
  }

  render() {
    const activeItem = 'my_podcasts';

    return (
      <div>
        <Menu pointing>
          <Menu.Item as={NavLink} to="/" exact activeClassName="active" onClick={this.handleItemClick}>
            Home
          </Menu.Item>

          <Menu.Item as={NavLink} to="/my_podcasts" exact  activeClassName="active" onClick={this.handleItemClick}>
            Meus Podcasts
          </Menu.Item>

          <Menu.Item as={NavLink} to="/market_place" exact  activeClassName="active" onClick={this.handleItemClick}>
            MarketPlace
          </Menu.Item>

          <Menu.Item>
            <Player />
          </Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Buscar novo podcast...' />
            </Menu.Item>

            <Menu.Item>
              <Button icon title="Update">
                <Icon name='refresh' />
              </Button>
            </Menu.Item>

            <Menu.Item as={NavLink} to="/downloads" exact activeClassName="active">
              <Button icon title="Downloads">
                <Icon name='download' />
              </Button>
            </Menu.Item>

            <Menu.Item as={NavLink} to="/configurations" exact activeClassName="active">
              <Button icon title="Configurações">
                <Icon name='setting' />
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
