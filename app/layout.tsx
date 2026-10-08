import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
const anton = localFont({
  src: '../public/fonts/anton.ttf',
  variable: '--font-anton',
  display: 'swap',
});
const barlow = localFont({
  src: [
    { path: '../public/fonts/barlow-400.ttf', weight: '400' },
    { path: '../public/fonts/barlow-600.ttf', weight: '600' },
    { path: '../public/fonts/barlow-700.ttf', weight: '700' },
    { path: '../public/fonts/barlow-900.ttf', weight: '900' },
  ],
  variable: '--font-barlow',
  display: 'swap',
});
const rocktown = localFont({
  src: '../public/fonts/rocktown.ttf',
  variable: '--font-rocktown',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'KIOTTI — HARDBODY 24/7',
  description:
    'Houston. The frequency is yours. Music, culture, and the city — on your frequency, around the clock.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${anton.variable} ${barlow.variable} ${rocktown.variable}`}>
      <body>{children}</body>
    </html>
  );
}
