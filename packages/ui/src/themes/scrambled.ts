import { ThemeContract } from './types';

export const scrambledTheme: ThemeContract = {
  colors: {
    light: '#D8EED1',
    dark: '#211f1f',
    primary: '#E69F00',
    secondary: '#4F7353',
    surface: '#F1F1EF',
  },
  typography: {
    displayFont: 'var(--font-henny)',
    bodyFont: 'var(--font-lexend)',
  },
  utils: {
    borderRadius: '12px',
    borderWidth: '4px',
  }
};
