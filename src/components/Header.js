import React, { Component } from 'react';
import Player from './player/Player';
import { Input, Menu, Segment, Icon, Button } from 'semantic-ui-react';

class Header extends Component {

  handleItemClick() {
    console.log('fui clicado')
  }

  render() {
    const { activeItem } = 'home'

    return (
      <div>
        <Menu pointing>
          <Menu.Item name='Meus Podcasts' active={activeItem === 'my_podcasts'} onClick={this.handleItemClick} />
          <Menu.Item name='MarketPlace' active={activeItem === 'market_place'} onClick={this.handleItemClick} />

          <Menu.Item>
            <Player />
          </Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Buscar novo podcast...' />
            </Menu.Item>
            <Menu.Item>
              <Button icon title="Downloads">
                <Icon name='download' />
              </Button>
            </Menu.Item>
            <Menu.Item>
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

export default Header;
