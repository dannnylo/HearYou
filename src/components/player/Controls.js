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
        <Button.Group>
          <Button onClick={this.props.onVolumeUp} icon='plus' />
          <Button icon='play' />
          <Button icon='pause' />
          <Button icon='repeat' />
          <Button onclick={this.props.onVolumeDown} icon='minus' />
        </Button.Group>

        <ul>
          {controls.play && control('Play', this.props.onPlay)}
          {controls.stop && control('Stop', this.props.onStop)}
          {controls.pause && control('Pause', this.props.onPause)}
          {controls.resume && control('Resume', this.props.onResume)}
        </ul>

         Loop?:
         <input type="checkbox" checked={this.props.loop} onChange={this.props.onToggleLoop}/>
      </div>
    );
  }
}
