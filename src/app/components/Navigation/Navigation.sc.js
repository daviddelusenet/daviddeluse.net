import styled from 'styled-components';
import { WHITE } from '../../utils/consts';
import underline from '../../styles/mixins/underline';

export const StyledNavigation = styled.div`
  position: fixed;
  top: 30px;
  right: 30px;
  text-align: right;
`;

export const Link = styled.a`
  display: inline-block;
  position: relative;
  text-decoration: none;
  line-height: 1;
  color: ${WHITE};
  font-size: 20px;
`;

export const LinkInner = styled.span`
  position: relative;

  &:hover {
    ${underline({ bottom: '0px' })};
  }
`;

export const Divider = styled.span`
  display: block;
  line-height: 30px;
  color: ${WHITE};
  font-size: 30px;
`;
