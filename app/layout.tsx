import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const font = Montserrat({ subsets: ["latin"], weight: "600" });

export const metadata: Metadata = {
  description: "Official risecloth. Web Store",
  images: [
    {
      url: 'https://risecloth-shop.vercel.app/favicon.ico', // Must be an absolute URL
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
