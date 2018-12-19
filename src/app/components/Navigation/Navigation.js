import React from 'react';

// Styled components
import {
  Link,
  LinkInner,
  StyledNavigation,
} from './Navigation.sc';

// Child components
import Divider from '../Divider/Divider';

const Navigation = () => (
  <StyledNavigation>
    <Link href="https://github.com/daviddelusenet" target="_blank">
      <LinkInner>Github</LinkInner>
    </Link>
    <Divider>·</Divider>
    <Link href="https://www.linkedin.com/in/david-de-lusenet-31b838111/" target="_blank">
      <LinkInner>LinkedIn</LinkInner>
    </Link>
    <Divider>·</Divider>
    <Link href="http://cv.lusenet.com/" target="_blank">
      <LinkInner>CV</LinkInner>
    </Link>
    <Divider>·</Divider>
    <Link href="mailto:me@daviddeluse.net">
      <LinkInner>Email</LinkInner>
    </Link>
  </StyledNavigation>
);

export default Navigation;
