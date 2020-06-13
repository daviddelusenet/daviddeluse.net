import { BLACK, WHITE } from '../../utils/consts';
import styled from 'styled-components';

export const StyledDivider = styled.p`
    line-height: 30px;
    color: ${WHITE};
    font-size: 30px;

    .is-inverted & {
        color: ${BLACK};
    }
`;

export default StyledDivider;
