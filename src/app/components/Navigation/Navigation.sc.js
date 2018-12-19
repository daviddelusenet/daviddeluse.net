import styled from 'styled-components';
import { BLACK, WHITE } from '../../utils/consts';
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
  color: ${WHITE};
  font-size: 18px;
  
  .is-inverted & {
    color: ${BLACK};
  }
`;

export const LinkInner = styled.span`
  position: relative;

  &:hover {
    ${underline({ bottom: '0px' })};
  }
`;
