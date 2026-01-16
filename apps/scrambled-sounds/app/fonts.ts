import { Henny_Penny, Lexend } from 'next/font/google';

export const hennyPenny = Henny_Penny({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-henny',
  display: 'swap',
});

export const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  display: 'swap',
});
