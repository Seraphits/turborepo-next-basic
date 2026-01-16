'use client';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from './registry';
import { GlobalStyles } from './styles/global';
import { readBootTheme, scrambledTheme, ThemeContract } from './themes';

// Define which apps are supported
export type AppNamespace = 'readboot' | 'scrambled' | 'docs';

interface PatternProviderProps {
  children: React.ReactNode;
  app: AppNamespace;
}

const themeMap: Record<AppNamespace, ThemeContract> = {
  readboot: readBootTheme,
  scrambled: scrambledTheme,
  docs: readBootTheme, // Using readboot as default for docs for now
};

export function PatternProvider({ children, app }: PatternProviderProps) {
  const selectedTheme = themeMap[app];

  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={selectedTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
