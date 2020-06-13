import React, { FunctionComponent, useCallback, useEffect, useRef, useState } from 'react';
import Button from '../Button/Button';

const AudioPlayer: FunctionComponent = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const onToggleAudioPlaybackCallback = useCallback(() => {
        if (audioRef.current) {
            void audioRef.current.play().then(() => {
                if (audioRef.current) {
                    if (isPlaying) {
                        audioRef.current.pause();
                    }

                    setIsPlaying(!isPlaying);
                }
            });
        }
    }, [audioRef, isPlaying]);

    const onKeyPressCallback = useCallback(
        ({ key, keyCode }: KeyboardEvent) => {
            if (key === 'p' || keyCode === 112) {
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
