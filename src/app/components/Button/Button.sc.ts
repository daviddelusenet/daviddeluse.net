import styled from 'styled-components';

export const StyledButton = styled.button`
    border: 0;
    background: none;
    padding: 0;
    line-height: 1;
    color: ${({ theme }) => theme.primaryTextColor};
    font-size: 18px;
`;

export default StyledButton;
