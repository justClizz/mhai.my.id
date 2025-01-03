import type { Metadata } from "next";

import { Montserrat } from "next/font/google";
import "./globals.css";
 
// If loading a variable font, you don't need to specify the font weight
const font = Montserrat({ subsets: ["latin"], weight: "600", });

export const metadata: Metadata = {
openGraph: {
  description: "Muhammad Haikal Ali Abdillah | A Website",
  images: [
    {
      url: 'https://risecloth-shop.vercel.app/512-favicon.png', // Must be an absolute URL
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
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={font.className}>{children}</body>
    </html>
  );
}
