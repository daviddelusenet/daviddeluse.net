import React from 'react';

// Styled components
import {
  Link,
  Message,
  StyledErrorPage,
} from './Error.sc';

const ErrorPage = () => (
  <StyledErrorPage>
    <Message>
      Oops, something went wrong
      <span aria-label="Scream" role="img"> 😱</span>
    </Message>
    <Link to="/">
      <span>Go back home</span>
    </Link>
  </StyledErrorPage>
);

export default ErrorPage;
