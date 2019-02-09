import { BLACK, WHITE } from '../../utils/consts';
import styled from 'styled-components';

export default styled.button`
  border: 0;
  background: none;
  padding: 0;
  line-height: 1;
  color: ${WHITE};
  font-size: 18px;
  
  .is-inverted & {
    color: ${BLACK};
  }
`;
