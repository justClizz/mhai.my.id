import type { Metadata } from "next";

import { Montserrat } from "next/font/google";
import "./globals.css";

const font = Montserrat({ subsets: ["latin"], weight: "600" });

export const metadata: Metadata = {
openGraph: {
  description: "Official risecloth. Web Store",
  images: [
    {
      url: 'https://risecloth-shop.vercel.app/logo.ico', // Must be an absolute URL
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
      <link rel="icon" href="/logo.ico" sizes="any" />
      <body className={font.className}>{children}</body>
    </html>
  );
}
