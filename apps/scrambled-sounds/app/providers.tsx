'use client';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@repo/ui/styles';
import { scrambledTheme } from '@repo/ui/themes'; // Ensure this import is correct

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={scrambledTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
