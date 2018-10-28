import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// Consts
import { BLACK, CALIBRI } from '../utils/consts';

export default createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }
  
  html {
    background-color: ${BLACK};
    font-family: ${CALIBRI};
  }
  
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
