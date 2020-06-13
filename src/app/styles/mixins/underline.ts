import { BLACK, WHITE } from '../../utils/consts';
import { css, FlattenSimpleInterpolation } from 'styled-components';

export default ({ bottom = '8px' } = {}): FlattenSimpleInterpolation => css`
    &::after {
        display: block;
        position: absolute;
        right: 5px;
        bottom: ${bottom};
        left: 5px;
        background-color: ${WHITE};
        width: auto;
        height: 1px;
        content: '';

        .is-inverted & {
            background-color: ${BLACK};
        }
    }
`;
