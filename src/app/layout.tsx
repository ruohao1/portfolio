import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Roboto, Roboto_Mono } from "next/font/google";

import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono", weight: '400',
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ruohao's Portfolio",
  // description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-roboto font-roboto-mono ${roboto.variable} ${robotoMono.variable} antialiased w-max-screen w-screen`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
