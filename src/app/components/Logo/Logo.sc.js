import { BLACK, WHITE } from '../../utils/consts';
import styled from 'styled-components';

export const StyledLogo = styled.div`
  display: flex;
  position: relative;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  z-index: 1;
  height: 100vh;
  min-height: 500px;
`;

export const Square = styled.div`
  position: relative;
  border: 2px solid ${WHITE};
  width: 300px;
  height: 300px;

  .is-inverted & {
    border-color: ${BLACK};
  }
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

  .is-inverted & {
    border-color: ${BLACK};
  }
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

  .is-inverted & {
    display: none;
  }
`;

export const Image = styled.img`
  display: none;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  z-index: -1;
  width: auto;
  height: 100%;

  .is-inverted & {
    display: block;
  }
`;
