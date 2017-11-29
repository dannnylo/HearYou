// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Image, Table, Button } from 'semantic-ui-react';

class PlaylistPage extends Component {
  constructor(props) {
    super(props);
    this.renderItems = this.renderItems.bind(this);
  }

  renderItems() {
    const rows = [];
    // this.props.playlist
    const playlist = [
      {
        id: 2,
        url: 'https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/1hz-10khz-sweep.mp3',
        title: 'Test',
        duration: 0,
        podcast: {
          name: 'Mundo'
        }
      },
      {
        id: 3,
        url: 'https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/walking.mp3',
        title: 'walking',
        duration: 0,
        podcast: {
          name: 'Mundo'
        }
      }
    ]

    for (var variable in playlist) {
      if (playlist[variable]) {
        const item = playlist[variable];

        rows.push(<Table.Row key={item.id}>
          <Table.Cell>
            <Header as="h4" image>
              <Image src="https://react.semantic-ui.com/assets/images/avatar/small/mark.png" rounded size="mini" />
              <Header.Content>
                {item.title}
                <Header.Subheader>{item.podcast.name}</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            <Button icon="play" />
          </Table.Cell>
        </Table.Row>)
      }
    }
    return rows;
  }

  render() {
    return (
      <Table striped celled collapsing size="large">
        <Table.Body>
          {this.renderItems()}
        </Table.Body>
      </Table>
    );
  }
}


// import { bindActionCreators } from 'redux';
// import Counter from '../components/Counter';
// import * as CounterActions from '../actions/counter';

function mapStateToProps(state) {
  return {
    playlist: state.playlist
  };
}

export default connect(mapStateToProps)(PlaylistPage);
