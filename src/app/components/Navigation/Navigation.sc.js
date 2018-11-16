import styled from 'styled-components';
import { WHITE } from '../../utils/consts';
import underline from '../../styles/mixins/underline';

export const StyledNavigation = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  justify-content: center;
  width: 100%;
`;

export const Link = styled.a`
  position: relative;
  flex: 0 0 auto;
  margin: 20px 0;
  padding: 10px 0;
  text-align: center;
  text-decoration: none;
  line-height: 1;
  color: ${WHITE};
  font-size: 20px;
  
  &:hover {
    ${underline()};
  }
`;

export const Divider = styled.span`
  flex: 0 0 auto;
  padding: 0 5px;
  line-height: 80px;
  color: ${WHITE};
  font-size: 30px;
`;
