import type { Metadata } from "next";
import { Link } from "next/link";

import { Montserrat } from "next/font/google";
import "./globals.css";

const font = Montserrat({ subsets: ["latin"], weight: "600" });

export const metadata: Metadata = {
openGraph: {
  description: "Official risecloth. Web Store",
  images: [
    {
      url: 'https://risecloth-shop.vercel.app/favicon.ico', // Must be an absolute URL
    },
  ],
}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Link rel="icon" type="image/x-icon" href="https://risecloth-shop.vercel.app/favicon.ico">
      <body className={font.className}>{children}</body>
    </html>
  );
}
