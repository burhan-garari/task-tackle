import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import * as stylex from "@stylexjs/stylex";

const inter = Inter({ subsets: ["latin"] });

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
    <html  lang="en">
      <body >{children}</body>
    </html>
  );
}

const DARK = '@media (prefers-color-scheme: dark)';
