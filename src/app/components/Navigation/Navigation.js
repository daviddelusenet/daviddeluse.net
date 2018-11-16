import React from 'react';

// Styled components
import { Divider, Link, StyledNavigation } from './Navigation.sc';

const Navigation = () => (
  <StyledNavigation>
    <Link href="https://github.com/daviddelusenet" target="_blank">Github</Link>
    <Divider>·</Divider>
    <Link href="https://www.linkedin.com/in/david-de-lusenet-31b838111/" target="_blank">LinkedIn</Link>
    <Divider>·</Divider>
    <Link href="http://cv.lusenet.com/" target="_blank">CV</Link>
    <Divider>·</Divider>
    <Link href="mailto:me@daviddeluse.net">Email</Link>
  </StyledNavigation>
);

export default Navigation;
