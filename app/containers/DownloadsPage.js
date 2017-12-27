// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'semantic-ui-react';
import ElectronStore from 'electron-store'
import { bindActionCreators } from 'redux';

import * as DownloadActions from "../actions/download";
import DownloadItem from "../components/DownloadItem"

class DownloadsPage extends Component {
  // props: {
  //   download: 'Array'
  // };

  componentDidMount() {
    this.props.loadDownload(new ElectronStore().get('downloads', []))
  }

  render() {
    return (
      <div>
        <Table striped celled>
          <Table.Body>
            {
              this.props.downloads.map((item) => {
                return (<DownloadItem key={item.guid} item={item} />);
              })
            }
          </Table.Body>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    downloads: state.downloads
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(DownloadActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DownloadsPage);
