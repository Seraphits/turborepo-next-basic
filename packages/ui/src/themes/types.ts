// packages/ui/src/themes/types.ts
export interface ThemeContract {
  colors: {
    light: string;
    dark: string;
    primary: string;
    secondary: string;
    surface: string;
  };
  typography: {
    displayFont: string;
    bodyFont: string;
  };
  utils: {
    borderRadius: string;
    borderWidth: string;
  };
}
