'use client';

import { ThemeProvider } from 'styled-components';
import { readBootTheme } from '@repo/ui/themes';
import { GlobalStyles } from '@repo/ui/styles';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={readBootTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
