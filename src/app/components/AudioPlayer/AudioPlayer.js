import Button from '../Button/Button';
import React from 'react';

export default class AudioPlayer extends React.PureComponent {
    audioRef = React.createRef();

    state = {
        isPlaying: false,
    };

    componentDidMount() {
        this.addEventListeners();
    }

    componentWillUnmount() {
        this.removeEventListeners();
    }

    handleKeyPress = (event) => {
        if (event.keyCode === 112) {
            this.handleToggleAudioPlayback();
        }
    };

    handleToggleAudioPlayback = () => {
        const { isPlaying } = this.state;

        this.audioRef.current.play().then(() => {
            if (isPlaying) {
                this.audioRef.current.pause();
            }

            this.setState({
                isPlaying: !isPlaying,
            });
        });
    };

    addEventListeners() {
        window.addEventListener('keypress', this.handleKeyPress);
    }

    removeEventListeners() {
        window.removeEventListener('keypress', this.handleKeyPress);
    }

    render() {
        const { isPlaying } = this.state;

        return (
            <>
                <Button onClick={this.handleToggleAudioPlayback}>{`[ P ] ${isPlaying ? 'Pause' : 'Play'}`}</Button>
                <audio loop ref={this.audioRef}>
                    <source src="/assets/sound/sleepwalker.mp3" type="audio/mpeg" />
                </audio>
            </>
        );
    }
}
