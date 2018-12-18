import styled from 'styled-components';
import { BLACK, WHITE } from '../../utils/consts';
import cursorHover from '../../styles/mixins/cursorHover';

export const StyledScrollDownIndicator = styled.div`
  ${cursorHover()};
  display: flex;
  position: absolute;
  top: calc(100vh - 114px);
  left: calc(50% - 12px);
  justify-content: center;
  width: 24px;
  height: 84px;
`;

export const Circle = styled.div`
  position: absolute;
  top: 0;
  border: 1px solid ${WHITE};
  border-radius: 100%;
  background-color: ${BLACK};
  width: 12px;
  height: 12px;
`;
