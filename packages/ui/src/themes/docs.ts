import { ThemeContract } from './types';

export const readBootTheme: ThemeContract = {
  colors: {
    light: '#FAF9F6', // ref-color-offwhite
    dark: '#36454F',       // ref-color-charcoal
    primary: '#DC143C',    // ref-color-crimson
    secondary: '#008080',  // Teal (Navigators)
    surface: '#FAF9F6',
  },
  typography: {
    displayFont: 'var(--font-baloo)', // CSS Variable from next/font
    bodyFont: 'var(--font-inter)',
  },
  utils: {
    borderRadius: '12px',
    borderWidth: '3px',
  },
};
