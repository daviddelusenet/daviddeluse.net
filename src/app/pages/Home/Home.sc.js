import styled from 'styled-components';
import { BLACK, WHITE } from '../../utils/consts';

export default styled.div`
  background-color: ${BLACK};
  
  .is-inverted & {
    background-color: ${WHITE};
  }
`;
