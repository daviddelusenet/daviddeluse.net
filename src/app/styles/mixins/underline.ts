import { css, DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';

export default ({ bottom = '8px' } = {}): FlattenInterpolation<ThemeProps<DefaultTheme>> => css`
    &::after {
        display: block;
        position: absolute;
        right: 5px;
        bottom: ${bottom};
        left: 5px;
        background-color: ${({ theme }) => theme.primaryTextColor};
        width: auto;
        height: 1px;
        content: '';
    }
`;
