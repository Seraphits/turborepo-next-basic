// packages/ui/src/styles/global.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* 1. CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* 2. HTML & Body Defaults */
  html, body {
    height: 100%;
    width: 100%;
    -webkit-font-smoothing: antialiased; /* macOS font smoothing */
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }
`;
