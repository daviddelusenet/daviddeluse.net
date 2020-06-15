import { createGlobalStyle } from 'styled-components';
import { cursorHover } from './mixins/cursorHover';
import reset from 'styled-reset';

export default createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }

    html {
        background-color: ${({ theme }) => theme.primaryBackgroundColor};
        font-family: ${({ theme }) => theme.primaryFontFamily};
    }

    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .app {
        cursor: url('/assets/image/cursor-normal.png') 12 12, auto;

        &.is-inverted {
            cursor: url('/assets/image/cursor-normal-inverted.png') 12 12, auto;
        }
    }

    a {
        ${cursorHover()}
    }

    button {
        ${cursorHover()}
        outline: none;
        font-family: ${({ theme }) => theme.primaryFontFamily};
    }
`;
