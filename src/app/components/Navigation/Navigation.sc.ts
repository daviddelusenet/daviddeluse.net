import styled from 'styled-components';
import underline from '../../styles/mixins/underline';

export const StyledNavigation = styled.div`
    position: fixed;
    top: 30px;
    right: 30px;
    z-index: 2;
    text-align: right;
`;

export const Link = styled.a`
    display: inline-block;
    position: relative;
    text-decoration: none;
    line-height: 1;
    color: ${({ theme }) => theme.primaryTextColor};
    font-size: 18px;
`;

export const LinkInner = styled.span`
    position: relative;

    &:hover {
        ${underline({ bottom: '0px' })}
    }
`;
