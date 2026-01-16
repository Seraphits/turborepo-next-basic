// packages/ui/src/styled.d.ts
import 'styled-components';
import { ThemeContract } from './themes/types';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeContract {}
}
