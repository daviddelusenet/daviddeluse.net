import React from 'react';

// Styled components
import { Button, StyledAudioPlayer } from './AudioPlayer.sc';

export default class AudioPlayer extends React.PureComponent {
  audioRef = React.createRef();

  state = {
    isMuted: false,
    isStarted: false,
  };

  componentDidMount() {
    this.addEventListeners();
  }

  componentWillUnmount() {
    this.removeEventListeners();
  }

  handleKeyPress = (event) => {
    if (event.keyCode === 109) {
      // When 'M' is pressed
      this.toggleAudioVolume();
    } else if (event.keyCode === 112) {
      // When 'P' is pressed
      this.playAudio();
    }
  };

  playAudio = () => {
    this.audioRef.current.play()
      .then(() => {
        this.setState({
          isStarted: true,
        });
      });
  };

  toggleAudioVolume = () => {
    const { isMuted } = this.state;

    this.audioRef.current.volume = isMuted ? 1 : 0;

    this.setState({
      isMuted: !isMuted,
    });
  };

  addEventListeners() {
    window.addEventListener('keypress', this.handleKeyPress);
  }

  removeEventListeners() {
    window.removeEventListener('keypress', this.handleKeyPress);
  }

  render() {
    const { isMuted, isStarted } = this.state;

    return (
      <StyledAudioPlayer>
        {isStarted ? (
          <Button onClick={this.toggleAudioVolume}>
            [m]
            {' '}
            {isMuted ? 'Unmute' : 'Mute'}
          </Button>
        ) : (
          <Button onClick={this.playAudio}>[p] Play</Button>
        )}
        <audio autoPlay loop ref={this.audioRef}>
          <source src="/assets/sound/sleepwalker.mp3" type="audio/mpeg" />
        </audio>
      </StyledAudioPlayer>
    );
  }
}
