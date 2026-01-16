import { ThemeContract } from './types';

export const readBootTheme: ThemeContract = {
  colors: {
    light: '#FAF9F6',
    dark: '#36454F',
    primary: '#DC143C',
    secondary: '#008080',
    surface: '#FAF9F6',
  },
  typography: {
    displayFont: 'var(--font-henny-penny)',
      bodyFont: 'var(--font-lexend)',
  },
  utils: {
    borderRadius: '12px',
    borderWidth: '3px',
  },
};
