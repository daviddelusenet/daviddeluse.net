import React from 'react';

// Styled components
import StyledControls from './Controls.sc';

// Child components
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import ButtonInvert from '../ButtonInvert/ButtonInvert';
import Divider from '../Divider/Divider';

const Controls = () => (
  <StyledControls>
    <AudioPlayer />
    <Divider />
    <ButtonInvert />
  </StyledControls>
);

export default Controls;
