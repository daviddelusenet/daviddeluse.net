import React from 'react';

// Styled Components
import { Divider, Link, Wrapper } from './Navigation.sc';

export default () => (
  <Wrapper>
    <Link
      href="https://github.com/daviddelusenet"
      target="_blank"
    >
      Github
    </Link>
    <Divider>·</Divider>
    <Link
      href="https://www.linkedin.com/in/david-de-lusenet-31b838111/"
      target="_blank"
    >
      LinkedIn
    </Link>
    <Divider>·</Divider>
    <Link
      href="http://cv.lusenet.com/"
      target="_blank"
    >
      CV
    </Link>
    <Divider>·</Divider>
    <Link
      href="mailto:me@daviddeluse.net"
    >
      Email
    </Link>
  </Wrapper>
);
