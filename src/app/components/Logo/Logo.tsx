import { Circle, Image, Square, StyledLogo, Video } from './Logo.sc';
import React, { FunctionComponent } from 'react';

const Logo: FunctionComponent = () => (
    <StyledLogo>
        <Square>
            <Circle>
                <Video autoPlay loop muted playsInline preload="auto" src="/assets/video/fireplace.mp4" />
                <Image src="/assets/image/ice.jpg" />
            </Circle>
        </Square>
    </StyledLogo>
);

export default Logo;
