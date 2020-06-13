import React, { useCallback, useEffect, useRef, useState } from 'react';
import Button from '../Button/Button';

const AudioPlayer = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const onToggleAudioPlaybackCallback = useCallback(() => {
        audioRef.current.play().then(() => {
            if (isPlaying) {
                audioRef.current.pause();
            }

            setIsPlaying(!isPlaying);
        });
    }, [audioRef, isPlaying]);

    const onKeyPressCallback = useCallback(
        (event) => {
            if (event.key === 'p' || event.keyCode === 112) {
                onToggleAudioPlaybackCallback();
            }
        },
        [onToggleAudioPlaybackCallback]
    );

    useEffect(() => {
        window.addEventListener('keypress', onKeyPressCallback);

        return () => window.removeEventListener('keypress', onKeyPressCallback);
    }, [onKeyPressCallback]);

    return (
        <>
            <Button onClick={onToggleAudioPlaybackCallback}>{`[ P ] ${isPlaying ? 'Pause' : 'Play'}`}</Button>
            <audio loop ref={audioRef}>
                <source src="/assets/sound/sleepwalker.mp3" type="audio/mpeg" />
            </audio>
        </>
    );
};

export default AudioPlayer;
