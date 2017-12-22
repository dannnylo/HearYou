import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Input, Menu, Icon, Button, Loader } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Player from './player/Player';
import * as GeneralActions from '../actions/general';

class Header extends Component {

  handleItemClick() {
    console.log('fui clicado ', this);
  }

  render() {
    return (
      <Menu pointing>
        <Menu.Item as={NavLink} to="/" exact activeClassName="active" onClick={this.handleItemClick}>
          My Podcasts
        </Menu.Item>

        <Menu.Item as={NavLink} to="/playlist" exact activeClassName="active" onClick={this.handleItemClick}>
          Playlist
        </Menu.Item>

        <Menu.Item as={NavLink} to="/market_place" exact activeClassName="active" onClick={this.handleItemClick} style={{display: 'none'}}>
          MarketPlace
        </Menu.Item>

        <Menu.Item>
          <Player />
        </Menu.Item>
        <Menu.Item>
          <Loader active={this.props.isLoading} inline="centered" />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search podcast..." />
          </Menu.Item>

          <Menu.Item>
            <Button icon title="Update">
              <Icon name="refresh" loading={this.props.isLoading}/>
            </Button>
          </Menu.Item>

          <Menu.Item as={NavLink} to="/downloads" exact activeClassName="active">
            <Button icon title="Downloads">
              <Icon name="download" />
            </Button>
          </Menu.Item>

          <Menu.Item as={NavLink} to="/configurations" exact activeClassName="active">
            <Button icon title="Settings">
              <Icon name="setting" />
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
function mapStateToProps(state) {
  return {
    isLoading: !!state.general.loading
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(GeneralActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
