import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';

const initBaseStyles = () => injectGlobal`
  ${reset}

  * {
    box-sizing: border-box;
    cursor: none;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

`;

export default initBaseStyles;
