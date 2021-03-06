import React, { Component } from 'react';
import { Button, Modal, Input, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RSSParser from '../../utils/RSSParser';
import * as PodcastActions from '../../actions/podcast';
import * as EpisodesActions from '../../actions/episode';
import * as GeneralActions from '../../actions/general';

class NewPodcast extends Component {
  constructor(props) {
    super(props);
    this.addPodcast = this.addPodcast.bind(this);
    this.onChangeUrl = this.onChangeUrl.bind(this);
  }

  state = { open: false, url: '' }

  show = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  addPodcast() {
    this.props.loading(true);
    const parser = new RSSParser(1, this.state.url);
    parser.getData((data) => {
      const podcastId = new Date().getTime();

      this.props.addPodcast({
        id: podcastId,
        url: data.link,
        title: data.title,
        description: data.description,
        cover: data.image
      });
      this.props.addEpisodes(podcastId, data.episodes);
      this.props.loading(false);
    });
    this.setState({ open: false, url: '' });
  }

  onChangeUrl(event) {
    this.setState({ open: this.state.open, url: event.target.value });
  }

  render() {
    const { open } = this.state;

    return (
      <div>
        <Button color="green" onClick={this.show} >
          <Icon name="plus" />
          Add Podcast
        </Button>
        <Modal size="small" open={open} onClose={this.close}>
          <Modal.Header>
            Add Podcast
          </Modal.Header>
          <Modal.Content>
            <Input iconPosition="left" placeholder="Url" fluid onChange={this.onChangeUrl} >
              <Icon name="linkify" />
              <input />
            </Input>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={this.close}>
              Cancel
            </Button>
            <Button positive icon="checkmark" labelPosition="right" content="Add" onClick={this.addPodcast} />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    podcasts: state.podcasts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign(PodcastActions, EpisodesActions, GeneralActions), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPodcast);
