import React from 'react';
import { Draggable } from 'gsap/all';
import '../../../libs/ThrowPropsPlugin';

// Styled components
import {
  Circle,
  Square,
  StyledLogo,
  Video,
} from './Logo.sc';

export default class Logo extends React.PureComponent {
  squareRef = React.createRef();

  componentDidMount() {
    Draggable.create(this.squareRef.current, {
      throwProps: true,
      type: 'rotation',
    });
  }

  render() {
    return (
      <StyledLogo>
        <Square ref={this.squareRef}>
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
      </StyledLogo>
    );
  }
}
