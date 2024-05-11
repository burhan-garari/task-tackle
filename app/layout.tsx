import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const isoveka = localFont({
  src: [
    {
      path: '../public/fonts/iosevka/IosevkaFixed-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/iosevka/IosevkaFixed-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/iosevka/IosevkaFixed-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/iosevka/IosevkaFixed-ExtendedBoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable:'--font-isoveka'
})


export const metadata: Metadata = {
  title: "Task Tackle",
  description: "tackle your tasks with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  lang="en" className={`${isoveka.className}`}>
      <body>{children}</body>
    </html>
  );
}

const DARK = '@media (prefers-color-scheme: dark)';

