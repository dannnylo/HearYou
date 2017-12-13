// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ElectronStore from 'electron-store'

import { Sidebar, Segment, Table, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

export default class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const podcast = this.props.podcast;

    return (
      <div className="podcast-preview">
        <Image src={podcast.cover} />
        <h3>
            {podcast.title}
        </h3>

        <p>
            {podcast.description.long}
        </p>
      </div>
    );
  }
}
