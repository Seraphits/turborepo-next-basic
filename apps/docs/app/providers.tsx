'use client';

import { ThemeProvider } from 'styled-components';
// We use ReadBoot theme as a temporary default for docs, or you can create a specific docsTheme later
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
