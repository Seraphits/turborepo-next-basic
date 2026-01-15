import StyledComponentsRegistry from '@repo/ui/registry';
import { Providers } from './providers';
import { hennyPenny, lexend } from '@/fonts'; // Assumes font setup via next/font

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${hennyPenny.variable} ${lexend.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <Providers>
            {children}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
