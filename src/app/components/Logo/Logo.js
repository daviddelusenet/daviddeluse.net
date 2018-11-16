import React from 'react';
import { Draggable } from 'gsap/all';
import '../../../libs/ThrowPropsPlugin';

// Styled components
import { Circle, StyledLogo, Video } from './Logo.sc';

export default class Logo extends React.PureComponent {
  styledLogoRef = React.createRef();

  componentDidMount() {
    Draggable.create(this.styledLogoRef.current, {
      throwProps: true,
      type: 'rotation',
    });
  }

  render() {
    return (
      <StyledLogo ref={this.styledLogoRef}>
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
      </StyledLogo>
    );
  }
}
