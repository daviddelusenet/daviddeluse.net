import { cursorHover } from '../../styles/mixins/cursorHover';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import underline from '../../styles/mixins/underline';

export const StyledErrorPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding: 20px;
    max-width: 620px;
    height: 100vh;
    color: ${({ theme }) => theme.primaryTextColor};
`;

export const Message = styled.p`
    margin: 0 0 50px;
    font-size: 40px;
`;

export const Link = styled(RouterLink)`
    ${cursorHover()}
    position: relative;
    text-transform: uppercase;
    text-decoration: none;
    color: ${({ theme }) => theme.primaryTextColor};
    font-size: 16px;
    font-weight: 700;

    &:hover {
        span {
            ${underline({ bottom: '-2px' })}
            position: relative;
        }
    }
`;
