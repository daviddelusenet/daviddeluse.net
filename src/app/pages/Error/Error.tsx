import { Link, Message, StyledErrorPage } from './Error.sc';
import React, { FunctionComponent } from 'react';

const ErrorPage: FunctionComponent = () => (
    <StyledErrorPage>
        <Message>
            {'Oops, something went wrong'}
            <span aria-label="Scream" role="img">
                {' 😱'}
            </span>
        </Message>
        <Link to="/">
            <span>{'Go back home'}</span>
        </Link>
    </StyledErrorPage>
);

export default ErrorPage;
