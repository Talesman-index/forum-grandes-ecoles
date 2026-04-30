import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Forum des Grandes Écoles (FGE) — Cotonou 2026",
  description: "Orientation et réseautage pour les étudiants africains souhaitant étudier en Europe, au Canada et aux États-Unis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${barlow.variable} scroll-smooth`}>
      <body className={`${barlow.className} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
