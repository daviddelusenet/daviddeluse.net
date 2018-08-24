import React from 'react';

// Styled components
import {
  LinkToHome,
  Message,
  Wrapper,
} from './Error.sc';

const ErrorPage = () => (
  <Wrapper>
    <Message>
      Oops, something went wrong
      <span aria-label="Scream" role="img"> 😱</span>
    </Message>
    <LinkToHome to="/">
      <span>Go back home</span>
    </LinkToHome>
  </Wrapper>
);

ErrorPage.propTypes = {

};

export default ErrorPage;
