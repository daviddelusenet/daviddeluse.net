import React from 'react';

// Styled Components
import { Link, Wrapper } from './Navigation.sc';

export default () => (
  <Wrapper>
    <Link
      href="https://github.com/daviddelusenet"
      target="_blank">Github
    </Link>
    <Link
      href="https://www.linkedin.com/in/david-de-lusenet-31b838111/"
      target="_blank">LinkedIn
    </Link>
    <Link
      href="http://cv.lusenet.com/"
      target="_blank">CV
    </Link>
    <Link
      href="mailto:david@lusenet.nl">Email
    </Link>
  </Wrapper>
);
