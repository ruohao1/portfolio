import type { Metadata } from "next";
import { SiteRails } from "@/components/portfolio/site-rails";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cedric LIN | Cybersecurity Portfolio",
  description:
    "Operator-focused cybersecurity portfolio covering homelab infrastructure, hardening automation, SIEM pipelines, and CTF work.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteRails />
        {children}
      </body>
    </html>
  );
}
