import React, { FunctionComponent, MouseEventHandler, ReactNode } from 'react';
import { StyledButton } from './Button.sc';

interface ButtonProps {
    children: ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: FunctionComponent<ButtonProps> = ({ children, onClick }) => (
    <StyledButton onClick={onClick}>{children}</StyledButton>
);

export default Button;
