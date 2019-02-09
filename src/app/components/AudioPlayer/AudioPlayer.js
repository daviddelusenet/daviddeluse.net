import Button from '../Button/Button';
import React from 'react';

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
      this.handleOnAudioToggleVolume();
    } else if (event.keyCode === 112) {
      // When 'P' is pressed
      this.handleOnPlayAudio();
    }
  };

  handleOnPlayAudio = () => {
    this.audioRef.current.play()
      .then(() => {
        this.setState({
          isStarted: true,
        });
      });
  };

  handleOnAudioToggleVolume = () => {
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
      <React.Fragment>
        {isStarted ? (
          <Button onClick={this.handleOnAudioToggleVolume}>
            [ M ]
            {' '}
            {isMuted ? 'Unmute' : 'Mute'}
          </Button>
        ) : (
          <Button onClick={this.handleOnPlayAudio}>[ P ] Play</Button>
        )}
        <audio autoPlay loop ref={this.audioRef}>
          <source src="/assets/sound/sleepwalker.mp3" type="audio/mpeg" />
        </audio>
      </React.Fragment>
    );
  }
}
