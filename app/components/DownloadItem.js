// @flow
import React, { Component } from 'react';
import { Header, Image, Table, Button, Loader } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RSSParser from '../utils/RSSParser';
import * as DownloadActions from '../actions/download';
import * as GeneralActions from '../actions/general';

class DownloadItem extends Component {
  constructor(props) {
    super(props);
    this.removeDownload = this.removeDownload.bind(this);
  }

  removeDownload() {
    this.props.removeDownload(this.props.item.id);
  }

  render() {
    const item = this.props.item;

    return (
      <Table.Row key={item.id}>
        <Table.Cell>
          <Header as="h4" image>
            <Image src={item.image} rounded size="mini" />
            <Header.Content>
              {item.title}
              <Header.Subheader>{item.url}</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>

        <Table.Cell collapsing>
          <Button icon="remove" onClick={this.removeDownload} />
        </Table.Cell>
      </Table.Row>);
  }
}


function mapStateToProps(state) {
  return { };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign(DownloadActions, GeneralActions), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DownloadItem);
