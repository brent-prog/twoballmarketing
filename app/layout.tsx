import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://twoballdarts.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "TwoBall Darts",
  title: {
    default: "TwoBall Darts | How to Play Golf on a Dartboard",
    template: "%s | TwoBall Darts",
  },
  description:
    "TwoBall Darts is a golf-style darts game played over 18 holes with exactly two darts per hole. Learn the rules, scoring and hazards, then play online.",
  alternates: { canonical: "/" },
  icons: {
    icon: "/brand/twoball-badge.webp",
    shortcut: "/brand/twoball-badge.webp",
    apple: "/brand/twoball-badge.webp",
  },
  category: "games",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "TwoBall Darts",
    title: "TwoBall Darts | Golf Scoring on a Dartboard",
    description:
      "Turn a standard dartboard into an 18-hole golf course. Two darts per hole. Lowest score wins.",
    images: [
      {
        url: "/brand/twoball-badge.webp",
        width: 1294,
        height: 1216,
        alt: "TwoBall Darts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TwoBall Darts | Golf Scoring on a Dartboard",
    description:
      "Turn a standard dartboard into an 18-hole golf course. Two darts per hole. Lowest score wins.",
    images: ["/brand/twoball-badge.webp"],
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
