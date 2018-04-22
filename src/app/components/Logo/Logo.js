import React from 'react';

// Styled Components
import { Circle, Square, Video } from './Logo.sc';

export default () => (
  <Square>
    <Circle>
      <Video
        autoPlay
        loop
        preload="auto"
        src="assets/video/fireplace.mp4"
      />
    </Circle>
  </Square>
);
