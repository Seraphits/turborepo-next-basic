import { PatternProvider } from '@repo/ui';
import { baloo, inter } from './fonts'; // Use the correct local exports

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${baloo.variable} ${inter.variable}`}>
      <body>
        {/* Verification: Ensure app="readboot" is set to trigger the Crimson theme */}
        <PatternProvider app="readboot">
          {children}
        </PatternProvider>
      </body>
    </html>
  );
}
