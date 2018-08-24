import { css } from 'styled-components';
import { WHITE } from '../../utils/consts';

export default ({ bottom = '8px' } = {}) => (css`
  &:after {
    display: block;
    position: absolute;
    right: 5px;
    bottom: ${bottom};
    left: 5px;
    background-color: ${WHITE};
    width: auto;
    height: 1px;
    content: '';
  }
`);
