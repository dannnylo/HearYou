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
          <Menu.Item active={activeItem === 'my_podcasts'} onClick={this.handleItemClick}>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </Menu.Item>

          <Menu.Item active={activeItem === 'my_podcasts'} onClick={this.handleItemClick}>
            <NavLink to="/my_podcasts" exact activeClassName="active">
              Meus Podcasts
            </NavLink>
          </Menu.Item>

          <Menu.Item active={activeItem === 'market_place'} onClick={this.handleItemClick}>
            <NavLink to="/market_place" exact activeClassName="active">
              MarketPlace
            </NavLink>
          </Menu.Item>

          <Menu.Item>
            <Player />
          </Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Buscar novo podcast...' />
            </Menu.Item>


            <Menu.Item>
              <NavLink to="/downloads" exact activeClassName="active">
                <Button icon title="Downloads">
                  <Icon name='download' />
                </Button>
              </NavLink>
            </Menu.Item>

            <Menu.Item>
              <NavLink to="/configurations" exact activeClassName="active">
                <Button icon title="Configurações">
                  <Icon name='setting' />
                </Button>
              </NavLink>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
