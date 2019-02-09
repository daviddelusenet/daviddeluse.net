import { BLACK, WHITE } from '../../utils/consts';
import styled from 'styled-components';

export default styled.div`
  background-color: ${BLACK};
  
  .is-inverted & {
    background-color: ${WHITE};
  }
`;
