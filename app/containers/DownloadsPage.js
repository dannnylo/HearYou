// @flow
import {ipcRenderer} from 'electron'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'semantic-ui-react';
import ElectronStore from 'electron-store'
import { bindActionCreators } from 'redux';
import DownloadFileWithProgressbar from 'download-file-with-progressbar';

import * as DownloadActions from "../actions/download";
import DownloadItem from "../components/DownloadItem"

class DownloadsPage extends Component {
  constructor(props) {
    super(props);
    this.download = this.download.bind(this);

    ipcRenderer.on('download-progress', (event, episode, item, progress) => {
      this.props.updateDownload(true, 0, progress);
    })
  }

  componentDidMount() {
    this.props.loadDownload(new ElectronStore().get('downloads', []))
  }

  componentDidUpdate() {
    const first = this.props.downloads[0]
    if (first && !first.active) {
      // this.download(first)
      ipcRenderer.send('downloadFile', first, '/tmp/teste.mp3')
    }
  }

  download(episode) {
    this.props.updateDownload(true, 0, 0, true);
    var dd = DownloadFileWithProgressbar(episode.enclosure.url, {
      // filename: 'the filename to store, default = path.basename(YOUR_URL) || "unknowfilename"',
      // dir: 'the folder to store, default = os.tmpdir()',
      onDone: (info) => {
        this.props.removeDownload(episode.guid);
      },
      onError: (err) => {
      },
      onProgress: (curr, total) => {
        this.props.updateDownload(true, 0, (curr / total * 100).toFixed(2));
      },
    });
    // dd.abort()
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
