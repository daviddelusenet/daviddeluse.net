import '../../../libs/ThrowPropsPlugin';
import {
  Circle,
  Image,
  Square,
  StyledLogo,
  Video,
} from './Logo.sc';
import { Draggable } from 'gsap/all';
import React from 'react';

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
              src="/assets/video/fireplace.mp4"
            />
            <Image src="/assets/image/ice.jpg" />
          </Circle>
        </Square>
      </StyledLogo>
    );
  }
}
