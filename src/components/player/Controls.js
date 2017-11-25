import React from 'react';
import Sound from 'react-sound';
import { Menu, Icon, Button } from 'semantic-ui-react';

function control(text, clickHandler) {
  const onClick = (ev) => {
    ev.preventDefault();
    clickHandler();
  };
  return <li><a href="#" onClick={onClick}>{text}</a></li>;
}

export default class Controls extends React.Component {
  render() {
    return <div>
      {this.renderControls()}
    </div>;
  }

  renderControls() {
    const controls = {
      play: this.props.playStatus === Sound.status.STOPPED,
      stop: this.props.playStatus !== Sound.status.STOPPED,
      pause: this.props.playStatus === Sound.status.PLAYING,
      resume: this.props.playStatus === Sound.status.PAUSED
    };

    return (
      <div>
        <Button.Group style={{'marginRight': '5px'}}>
          <Button onClick={this.props.onVolumeUp} icon='plus' />
          <Button onClick={this.props.onVolumeDown} icon='minus' />
        </Button.Group>

        <Button.Group style={{'marginRight': '5px'}}>
          {controls.play && control(<Button icon='play' />, this.props.onPlay)}
          {controls.stop && control(<Button icon='stop' />, this.props.onStop)}
          {controls.pause && control(<Button icon='pause' />, this.props.onPause)}
          {controls.resume && control(<Button icon='resume' />, this.props.onResume)}
        </Button.Group>

        <Button color={this.props.loop ? 'green' : 'gray'} icon='repeat' onChange={this.props.onToggleLoop}/>
      </div>
    );
  }
}
