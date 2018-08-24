import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';

// Consts
import { BLACK } from '../utils/consts';

export default () => injectGlobal`
  ${reset}

  * {
    box-sizing: border-box;
  }
  
  html {
    background-color: ${BLACK};
  }
  
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
