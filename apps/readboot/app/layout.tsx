import { PatternProvider } from '@repo/ui';
import { hennyPenny, lexend } from './fonts';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${hennyPenny.variable} ${lexend.variable}`}>
      <body>
        <PatternProvider app="scrambled">
          {children}
        </PatternProvider>
      </body>
    </html>
  );
}
