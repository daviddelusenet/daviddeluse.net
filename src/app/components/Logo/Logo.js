import { Circle, Image, Square, StyledLogo, Video } from './Logo.sc';
import React from 'react';

const Logo = () => (
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
