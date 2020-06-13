import { css, FlattenSimpleInterpolation } from 'styled-components';

export const cursorHover = (): FlattenSimpleInterpolation => css`
    cursor: url('/assets/image/cursor-hover.png') 12 12, auto;

    .is-inverted & {
        cursor: url('/assets/image/cursor-hover-inverted.png') 12 12, auto;
    }
`;

export default cursorHover;
