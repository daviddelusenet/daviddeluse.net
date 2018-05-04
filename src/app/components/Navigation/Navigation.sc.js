import styled from 'styled-components';
import { CALIBRI, WHITE } from './../../utils/consts';

export const Wrapper = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  justify-content: center;
`;

export const Link = styled.a`
  padding: 30px 0;
  flex: 0 0 auto;
  text-align: center;
  text-decoration: none;
  line-height: 1;
  color: ${WHITE};
  font-family: ${CALIBRI};
  font-size: 20px;
`;

export const Divider = styled.span`
  padding: 0 5px;
  flex: 0 0 auto;
  line-height: 80px;
  color: ${WHITE};
  font-size: 30px;
`;
