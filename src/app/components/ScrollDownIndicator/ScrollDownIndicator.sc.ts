import { cursorHover } from '../../styles/mixins/cursorHover';
import styled from 'styled-components';

export const StyledScrollDownIndicator = styled.div`
    ${cursorHover()}
    display: flex;
    position: absolute;
    top: calc(100vh - 114px);
    left: calc(50% - 25px);
    justify-content: center;
    z-index: 2;
    width: 50px;
    height: 84px;
`;

export const Circle = styled.div`
    position: absolute;
    top: 0;
    border: 1px solid ${({ theme }) => theme.primaryTextColor};
    border-radius: 100%;
    background-color: ${({ theme }) => theme.primaryBackgroundColor};
    width: 12px;
    height: 12px;
`;
