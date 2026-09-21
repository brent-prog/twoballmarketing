import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://twoballdarts.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TwoBall Darts | Golf Scoring on a Dartboard",
    template: "%s | TwoBall Darts",
  },
  description:
    "Play golf on a dartboard. Two darts per hole, eighteen holes, lowest score wins.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "TwoBall Darts",
    title: "TwoBall Darts | Golf Scoring on a Dartboard",
    description: "Two darts. Eighteen holes. Golf scoring on the dartboard you already own.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TwoBall Darts",
    description: "Two darts. Eighteen holes. Lowest score wins.",
  },
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
