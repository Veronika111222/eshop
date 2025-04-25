// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";  

// Správná inicializace Inter fontu
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Zlatnictví Perla | Luxusní šperky a snubní prsteny Valašské Meziříčí",
  description: "Rodinné zlatnictví Perla ve Valašském Meziříčí nabízí luxusní zlaté a stříbrné šperky, zásnubní a snubní prsteny, náramky, řetízky a šperky na míru. Navštivte náš eshop nebo kamennou prodejnu.",
  keywords: "zlatnictví, šperky, snubní prsteny, zásnubní prsteny, Valašské Meziříčí, perly, zlaté šperky, stříbrné šperky, náramky, prsteny, nastřelování naušnic, oprava šperků, výměna baterií v hodinkách, řetízky, diamanty, přírodní kameny, šperky na míru, dětské naušnice, křtiny, narozeniny, svátky, výročí, přívěsky, zlatnictví Perla, brilianty, rodium, white gold, zlaté hodinky, chirurgická ocel, dárek pro ženu, dárek pro muže, gravírování šperků, klenotnictví, rhodiování, šperkařství, zlatnické práce, zlaté mince, investiční zlato, stříbrné mince, čištění šperků, drahokamy, polodrahokamy, platina, titanové šperky, svatební šperky, šperky pro děti, brože, manžetové knoflíčky, amulety, talismany, čtyřlístky, pánské prsteny, dámské prsteny, svatební dary",
  generator: "Next.js",
  applicationName: "Zlatnictví Perla",
  referrer: "origin-when-cross-origin",
  authors: [
    { name: "Zlatnictví Perla" }
  ],
  icons: {
    icon: "/imgs/favicon.png",
  },
  creator: "Zlatnictví Perla",
  publisher: "Zlatnictví Perla",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  metadataBase: new URL("https://www.zlatnictviperla.cz"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Zlatnictví Perla | Luxusní šperky a snubní prsteny Valašské Meziříčí",
    description: "Rodinné zlatnictví Perla ve Valašském Meziříčí nabízí luxusní zlaté a stříbrné šperky, zásnubní a snubní prsteny, náramky, řetízky a šperky na míru. Navštivte náš eshop nebo kamennou prodejnu.",
    url: "https://www.zlatnictviperla.cz",
    siteName: "Zlatnictví Perla",
    images: [
      {
        url: "https://www.zlatnictviperla.cz/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zlatnictví Perla - luxusní šperky a snubní prsteny",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zlatnictví Perla | Luxusní šperky a snubní prsteny",
    description: "Rodinné zlatnictví Perla ve Valašském Meziříčí nabízí luxusní zlaté a stříbrné šperky, zásnubní a snubní prsteny a šperky na míru.",
    images: ["https://www.zlatnictviperla.cz/images/twitter-image.jpg"],
  },
  verification: {
    google: "verification_token", // Nahraďte skutečným verifikačním tokenem
    yandex: "verification_token", // Nahraďte skutečným verifikačním tokenem
  },
  category: "Zlatnictví a šperky",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className={cn(inter.className, "bg-gray-900")}>
        {children}
      </body>
    </html>
  );
}