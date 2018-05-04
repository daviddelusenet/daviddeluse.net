import styled from 'styled-components';
import { WHITE } from './../../utils/consts';

export const Square = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  border: 2px solid ${WHITE};
`;

export const Circle = styled.div`
  position: absolute;
  top: 5%;
  left: 5%;
  overflow: hidden;
  width: 90%;
  height: 90%;
  z-index: 1;
  border: 2px solid ${WHITE};
  border-radius: 100%;
`;

export const Video = styled.video`
  display: block;
  position: absolute;
  top: -5%;
  left: 50%;
  width: auto;
  height: 105%;
  transform: translate3d(-50%, 0, 0);
  z-index: -1;
`;
