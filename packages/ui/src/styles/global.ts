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

  /* 3. Theme Injection: The Hybrid Token System */
  :root {
    /* We map the strictly typed theme props to CSS variables. */
    /* This allows Server Components to use var(--color-primary). */
    --color-light: ${props => props.theme.colors.light};
    --color-dark: ${props => props.theme.colors.dark};
    --color-primary: ${props => props.theme.colors.primary};
    --color-secondary: ${props => props.theme.colors.secondary};
    --color-surface: ${props => props.theme.colors.surface};

    /* Typography Variables - Injected by next/font, consumed here */
    --font-display: ${props => props.theme.typography.displayFont};
    --font-body: ${props => props.theme.typography.bodyFont};

    /* Utility Variables */
    --border-radius: ${props => props.theme.utils.borderRadius};
    --border-width: ${props => props.theme.utils.borderWidth};
  }

  body {
    background-color: var(--color-light);
    color: var(--color-text);
    font-family: var(--font-body);
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* 4. Accessibility & Motion Preferences */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms!important;
      animation-iteration-count: 1!important;
      transition-duration: 0.01ms!important;
      scroll-behavior: auto!important;
    }
  }
`;
