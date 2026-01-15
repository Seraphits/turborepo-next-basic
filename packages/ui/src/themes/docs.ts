import { ThemeContract } from './types';

export const docsTheme: ThemeContract = {
  colors: {
    light: '#FAF9F6',
    dark: '#36454F',
    primary: '#144ddc',
    secondary: '#97b3e4',
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
