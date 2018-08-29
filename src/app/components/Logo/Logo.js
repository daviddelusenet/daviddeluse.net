import React from 'react';
import { Draggable } from 'gsap/all';
import '../../../libs/ThrowPropsPlugin';

// Styled Components
import { Circle, Square, Video } from './Logo.sc';

export default class Logo extends React.PureComponent {
  square = React.createRef();

  componentDidMount() {
    Draggable.create(this.square.current, {
      throwProps: true,
      type: 'rotation',
    });
  }

  render() {
    return (
      <Square innerRef={this.square}>
        <Circle>
          <Video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            src="assets/video/fireplace.mp4"
          />
        </Circle>
      </Square>
    );
  }
}
