import styled from 'styled-components';
import { BLACK, WHITE } from '../../utils/consts';

export default styled.p`
  line-height: 30px;
  color: ${WHITE};
  font-size: 30px;
  
  .is-inverted & {
    color: ${BLACK};
  }
`;
