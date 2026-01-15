import { PatternProvider } from '@repo/ui';
import { baloo, inter } from './fonts';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Only Baloo and Inter here
    <html lang="en" className={`${baloo.variable} ${inter.variable}`}>
      <body>
        <PatternProvider app="readboot">
          {children}
        </PatternProvider>
      </body>
    </html>
  );
}
