import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Harini Issue",
  description: "A birthday magazine for Harini's 20th birthday"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
