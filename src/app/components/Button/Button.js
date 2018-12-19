import React from 'react';
import PropTypes from 'prop-types';

// Styled components
import StyledButton from './Button.sc';

const Button = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
