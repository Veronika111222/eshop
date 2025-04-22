// app/layout.tsx

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Načteme self‑hosted font Charm
const charm = localFont({
  src: [
    {
      path: "../public/fonts/Charm-Regular.ttf",  // relativní vůči app/layout.tsx
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Charm-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-charm",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zlatnictví Perla",
  description: "Luxusní zlatnictví",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className={charm.variable}>
      <body className="bg-gray-900 text-gray-300 antialiased">
        {children}
      </body>
    </html>
  );
}
