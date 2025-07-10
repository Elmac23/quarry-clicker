import type { Metadata } from "next";
import { Jersey_10 } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/components/StoreProvider";

const jersey10 = Jersey_10({
  subsets: ["latin"],
  variable: "--jersey10",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Quarry Clicker",
  description: "Quarry clicker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jersey10.variable} antialiased`}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
