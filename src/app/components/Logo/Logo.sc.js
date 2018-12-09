import styled from 'styled-components';
import { WHITE } from '../../utils/consts';

export const StyledLogo = styled.div`
  position: relative;
  margin: 0 auto;
  border: 2px solid ${WHITE};
  cursor: url('/assets/image/cursor-hover.png') 12 12, auto;
  width: 300px;
  height: 300px;
`;

export const Circle = styled.div`
  position: absolute;
  top: 5%;
  left: 5%;
  z-index: 1;
  border: 2px solid ${WHITE};
  border-radius: 100%;
  width: 90%;
  height: 90%;
  overflow: hidden;
`;

export const Video = styled.video`
  display: block;
  position: absolute;
  top: -5%;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  z-index: -1;
  width: auto;
  height: 105%;
`;
