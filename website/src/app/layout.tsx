import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TLH Fruit Trees",
  description:
    "A Project where we provide coordinates, fruit-type, fruiting-times, type of property the tree is on, whether the property own allows public picking in Tallahassee, FL",
  openGraph: {
    title: "TLH Fruit Trees",
    description:
      "A Project where we provide coordinates, fruit-type, fruiting-times, type of property the tree is on, whether the property own allows public picking in Tallahassee, FL",
    url: "https://tally-fruit-trees.vercel.app",
    siteName: "TLH Fruit Trees",
    images: [
      {
        url: "https://open-tallahassee.s3.us-east-1.amazonaws.com/tally_fruit_trees.png", // Must be an absolute URL
        width: 500,
        height: 500,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
