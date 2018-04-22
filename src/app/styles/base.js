import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';

export default () => injectGlobal`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
