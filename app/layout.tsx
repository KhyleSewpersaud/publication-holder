import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const dm_sans = DM_Sans({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "PubView",
  description: "View Your Publications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
