import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// Consts
import { BLACK, CALIBRI } from '../utils/consts';
import cursorHover from './mixins/cursorHover';

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
    cursor: url('/assets/image/cursor-normal.png') 12 12, auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  a {
    ${cursorHover()};
  }
  
  button { 
    ${cursorHover()};
    font-family: ${CALIBRI};
    outline: none;
  }
`;
