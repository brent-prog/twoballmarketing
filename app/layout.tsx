import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TwoBall Darts",
  description: "Two darts. Eighteen holes. Golf scoring on a dartboard.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
