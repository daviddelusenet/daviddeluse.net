import React, { FunctionComponent } from 'react';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import ButtonInvert from '../ButtonInvert/ButtonInvert';
import Divider from '../Divider/Divider';
import { StyledControls } from './Controls.sc';

const Controls: FunctionComponent = () => (
    <StyledControls>
        <AudioPlayer />
        <Divider />
        <ButtonInvert />
    </StyledControls>
);

export default Controls;
