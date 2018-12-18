import styled from 'styled-components';
import { WHITE } from '../../utils/consts';
import cursorHover from '../../styles/mixins/cursorHover';

export const StyledLogo = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  height: 100vh;
  min-height: 500px;
`;

export const Square = styled.div`
  ${cursorHover()};
  position: relative;
  border: 2px solid ${WHITE};
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
