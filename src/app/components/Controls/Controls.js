import AudioPlayer from '../AudioPlayer/AudioPlayer';
import ButtonInvert from '../ButtonInvert/ButtonInvert';
import Divider from '../Divider/Divider';
import React from 'react';
import StyledControls from './Controls.sc';

const Controls = () => (
    <StyledControls>
        <AudioPlayer />
        <Divider />
        <ButtonInvert />
    </StyledControls>
);

export default Controls;
