import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://web3jatin.com'),
  title: "Token Launch Strategy & Execution | Web3 Jatin",
  description: "Helping Web3 founders design and execute token launches that survive post-TGE. Strategy, listings, and liquidity planning.",
  icons: {
    icon: '/images/Web3Jatinlogo.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Load Material Symbols Outlined icons */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${manrope.className} bg-background-light text-secondary`}>
        {children}
      </body>
    </html>
  );
}