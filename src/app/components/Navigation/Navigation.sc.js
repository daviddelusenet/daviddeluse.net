import styled from 'styled-components';
import { CALIBRI, WHITE } from './../../utils/consts';

export const Wrapper = styled.div`
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
  font-family: ${CALIBRI};
  font-size: 20px;
  
  &:hover {
    &:after {
      display: block;
      position: absolute;
      right: 4px;
      bottom: 8px;
      left: 4px;
      background-color: ${WHITE};
      width: auto;
      height: 1px;
      content: '';
    }
  }
`;

export const Divider = styled.span`
  flex: 0 0 auto;
  padding: 0 5px;
  line-height: 80px;
  color: ${WHITE};
  font-size: 30px;
`;
