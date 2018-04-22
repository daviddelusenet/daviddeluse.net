import styled from 'styled-components';
import { GILL_SANS, WHITE } from './../../utils/consts';

export const Wrapper = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  justify-content: center;
`;

export const Link = styled.a`
  width: 25%;
  padding: 30px 20px;
  flex: 0 0 auto;
  text-align: center;
  text-decoration: none;
  color: ${WHITE};
  font-family: ${GILL_SANS};
  font-size: 18px;
`;
